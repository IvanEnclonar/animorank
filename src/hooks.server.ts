import { redirect } from '@sveltejs/kit';
import { APP_JWT_SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';
import type { Handle } from '@sveltejs/kit';
import type { JwtPayload } from 'jsonwebtoken';

export const handle: Handle = async ({ event, resolve }) => {
    const requestedPath = event.url.pathname;
    const cookies = event.cookies;
    const protectedRoutes = ["/edit", "/create", "/profile", "/",]


    // Auth check
    const token = cookies.get("token"); 


    if (token) {
        const res = validateToken(token);
        if (res) {
            event.locals.user = res;
        } else {
            event.locals.user = null;
        }
    } else {
        event.locals.user = null;
    } 


    for (const route of protectedRoutes) {
        if (requestedPath.startsWith(route)) {
            if (!event.locals.user) {
                throw redirect(302, "/login");
            }

            if (requestedPath.startsWith("/create") || requestedPath.startsWith("/edit")) {
                if (event.locals.user.role !== "teacher") {
                    throw redirect(302, "/");
                }
            }
        }
    }

    const response = await resolve(event);

    return response;
};


const validateToken = (token: string): string | JwtPayload | boolean => {
    let res: string | JwtPayload | boolean;
    try {
        res = jwt.verify(token, APP_JWT_SECRET);
    } catch {
        res = false;
    }
    return res;
}