// SnedGrid is a API-based SMTP service
// Already registered an account and DNS records with hanayou.uk
// Include this file when needing functionality to send emails
// Configured for emails to go to sam@hanayou.uk

import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '$env/static/private';
sgMail.setApiKey(SENDGRID_API_KEY);

export interface Email {
    to: string;
    from: string;
    subject: string;
    text: string;
    html: string;
}