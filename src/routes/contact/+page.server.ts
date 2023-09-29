// For contact form input data validation and sanitization
import { fail } from '@sveltejs/kit';
import sanitize from 'sanitize-html';

// Sending emails via SMTP
import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY, SENDGRID_EMAIL } from '$env/static/private';
sgMail.setApiKey(SENDGRID_API_KEY);

export const actions = {
    submit: async ({ cookies, request }) => {
        // Extract Data and sanitise
        const data = await request.formData();
        let name = sanitize(data.get('name') as string);
        let email = sanitize(data.get('email') as string);
        let message = sanitize(data.get('message') as string);    
        message = message.replaceAll("\r\n", "<br/>") // replace so email renders newlines properly

        console.log({name, email, message});

        try {
            // Validate input data (none empty or too long)
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
        
        

        const userDetailsMsg = `Name: ${name}<br/>Email: ${email}<br/>Message:<br/>${message}`;
        // Send Email to contacts mailbox + user for confirmation using SendGrid SMTP API
        const msg = {
            to: SENDGRID_EMAIL,
            from: SENDGRID_EMAIL,
            subject: `Hanayou.uk - Contact Form (${name})`,
            text: userDetailsMsg,
            html: userDetailsMsg
        };

        try {
            await sgMail.send(msg);
        } catch (error: any) { 
            console.error(error);
        }

        // Append message prefix as automated response
        const autoMsg = "Thank you for your email, I aim to reply as quickly as possible.<br/>All the best - Sam (Hanayou)."

        // Send Email to contacts mailbox + user for confirmation using SendGrid SMTP API
        const userMsg = {
            to: email,
            from: SENDGRID_EMAIL,
            subject: 'Hanayou.uk - Contact Form',
            text: autoMsg,
            html: autoMsg
        };
        
        try {
            await sgMail.send(userMsg);
            // Successful return
            return {
                name: name,
                email: email,
                message: message
            };
        } catch (error: any) { 
            // Mail server error
            console.error(error);
            return {
                name: name,
                email: email,
                message: message,
                error: error.message
            };
        }
    }
};