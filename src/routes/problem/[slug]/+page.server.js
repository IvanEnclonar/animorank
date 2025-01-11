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

export async function load({ params, locals }) {
    // Update the load function
    let user = locals.user;

    let { data: Problem, error } = await supabase
        .from('Problem')
        .select("*, Session(*)")
        .eq("id", Number(params.slug))
        .eq("Session.student_email", user.email);

    // Check if session exists and replace starter code with it
    if (Problem && Problem.length > 0) {
        let session = Problem[0].Session[0];
        if (session.last_state) {
            Problem[0].starter_code = session.last_state;
        }
    }

    return {
        Problem: Problem,
        error: error
    }
}