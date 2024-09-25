import { redirect } from '@sveltejs/kit';
import { APP_JWT_SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';

export const handle = async ({ event, resolve }) => {
    const response = await resolve(event);
    const requestedPath = event.url.pathname;
    const cookies = event.cookies;

    // Auth check
    const token = cookies.get("token");

    if (requestedPath.includes("/problem")) {
        if (!token) {
            throw redirect(303, "/");
        }
        else {
            const decoded = jwt.verify(token, APP_JWT_SECRET);
            if (!decoded) {
                throw redirect(303, "/");
            }
        }
    }

    return response;
};