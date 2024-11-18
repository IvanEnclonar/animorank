import { redirect } from '@sveltejs/kit';
import { OAuth2Client } from 'google-auth-library';
import { SECRET_CLIENT_ID, SECRET_CLIENT_SECRET } from '$env/static/private';
import { supabase } from "$lib/supabaseClient";

export const actions = {
    login: async ({ request }) => {
        const redirectURL = 'http://localhost:5173/oath';

        const oAuth2Client = new OAuth2Client(
            SECRET_CLIENT_ID,
            SECRET_CLIENT_SECRET,
            redirectURL
        );


        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: ['https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid'],
            prompt: 'consent'
        });

        return redirect(302, authUrl);
    },

    createPset: async ({ request }) => {
        const formData = await request.formData();
        const input = {
            title: formData.get('title'),
            description: formData.get('description'),
            owner_email: formData.get('owner_email'),
        };

        // Check if input is valid
        if (!input.title || !input.description || !input.owner_email) {
            return {
                error: 'All fields are required'
            }
        } else {
            // Insert into database
            const { data, error } = await supabase
                .from('Problem_set')
                .insert([
                    input
                ]);

            return {
                data: data,
                error: error
            }
        }
    }
};