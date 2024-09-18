import { redirect } from '@sveltejs/kit';
import { OAuth2Client } from 'google-auth-library';
import { SECRET_CLIENT_ID, SECRET_CLIENT_SECRET } from '$env/static/private';


export const GET = async ({ url }) => {
    const redirectURL = 'http://localhost:5173/oath';
    const code = url.searchParams.get('code');
    if (!code) {
        throw new Error('Authorization code not found');
    }

    //console.log('returned state',state)
    console.log('returned code', code)

    try {
        const oAuth2Client = new OAuth2Client(
            SECRET_CLIENT_ID,
            SECRET_CLIENT_SECRET,
            redirectURL
        );

        // Exchange the authorization code for tokens
        const { tokens } = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(tokens);

        console.info('Tokens acquired.');

        // Verify the id_token
        const idToken = tokens.id_token;
        if (!idToken) {
            throw new Error('ID token not found in tokens');
        }

        const ticket = await oAuth2Client.verifyIdToken({
            idToken: idToken,
            audience: SECRET_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
        });

        const payload = ticket.getPayload();
        console.log('User information:', payload);

        // Optionally, you can now use the payload to manage user sessions
        // For example, set user information in a cookie or session

    } catch (err) {
        console.log('Error logging in with OAuth2 user', err);
    }

    throw redirect(303, '/');
};
