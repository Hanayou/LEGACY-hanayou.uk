import type { PageServerLoad } from './$types';

export const load = (async ( url ) => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ cookies, request }) => {
        // Extract Data
        const data = await request.formData();
        console.log(data);
    }
};