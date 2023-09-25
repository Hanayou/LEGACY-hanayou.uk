import { fail } from '@sveltejs/kit';
import sanitize from 'sanitize-html';

export const actions = {
    submit: async ({ cookies, request }) => {
        // Extract Data and sanitise
        const data = await request.formData();
        let name = sanitize(data.get('name') as string);
        let email = sanitize(data.get('email') as string);
        let message = sanitize(data.get('message') as string);    

        console.log({name, email, message});

        try {
            // Validate
            if (!name) { throw new Error('Name cannot be empty'); }
            if (!email) { throw new Error('Email cannot be empty'); }
            if (!message) { throw new Error('Message cannot be empty'); }
            let msgLength = message?.length as number;
            if (msgLength > 1000) { throw new Error('Message must be under 1000 chracters.')}

        } catch (error: any) {
            return fail(400, {
                name: name,
                email: email,
                message: message,
                error: error.message
            });
        }

        return {
            name: name,
            email: email,
            message: message
        };



        // Sanitise?


        // Send to mail API
    }
};