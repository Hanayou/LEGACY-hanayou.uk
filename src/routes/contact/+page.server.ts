import { fail } from '@sveltejs/kit';

export const actions = {
    submit: async ({ cookies, request }) => {
        // Extract Data
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');
        console.log(data);     

        // Validate
        try {
            if (name === '') { throw new Error('Name cannot be empty'); }
            if (email === '') { throw new Error('Email cannot be empty'); }
            if (message === '') { throw new Error('Message cannot be empty'); }
            let msgLength = message?.length as number;
            if (msgLength > 1000) { throw new Error('Message must be under 1000 chracters.')}
        } catch (error: any) {
            return fail(400, {
                name: data.get('name'),
                email: data.get('email'),
                message: data.get('message'),
                error: error.message
            });
        }

        return {
            name: data.get('name'),
            email: data.get('email'),
            message: data.get('message')
        };



        // Sanitise?


        // Send to mail API
    }
};