import nodemailer from 'nodemailer';

// Configure the transporter for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
        user: process.env.ADMIN_EMAIL, // Admin email from environment variables
        pass: process.env.ADMIN_PASSWORD, // Admin password from environment variables
    },
});

// Function to send an email
export async function sendEmail(to, subject, text, html) {
    try {
        const mailOptions = {
            from: process.env.ADMIN_EMAIL,
            to,
            subject,
            text,
            html,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

// Function to receive emails (mocked, as receiving emails requires a different setup)
export async function receiveEmails(status, message, email) {
    try {
        const mailOptions = {
            from: email,
            to: process.env.ADMIN_EMAIL,
            subject: status,
            html: message
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email received:', info.response);
        if (info.accepted.length > 0) {
            return {
                status: 'success',
                message: 'Email received successfully',
                info,
            };
        }
    } catch (error) {
        console.error('Error receiving emails:', error);
        throw error;
    }
}