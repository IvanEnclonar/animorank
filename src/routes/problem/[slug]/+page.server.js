import { supabase } from "$lib/supabaseClient";
import { redirect } from '@sveltejs/kit';
import { OAuth2Client } from 'google-auth-library';
import { SECRET_CLIENT_ID, SECRET_CLIENT_SECRET } from '$env/static/private';

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
    }
};

export async function load({ params }) {
    let { data: Problem, error } = await supabase
        .from('Problem')
        .select("*")
        .eq("id", Number(params.slug))

    return {
        Problem: Problem,
        error: error
    }
}