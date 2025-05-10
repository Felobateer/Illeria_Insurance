import { receiveEmails } from "./utils/email-manager";

export async function contactEmail(info) {
    try {
        const { name, email, message } = info;
        const formattedMessage = `
            <h1>${name} has asked you this: </h1>
            <p><strong>Message:</strong> ${message}</p>
            <br />
            <p><strong>email used to contact you:</strong> ${email}</p>
        `;
        const status = `${name} has contacted you on your website`;
        receiveEmails(status, formattedMessage, email);
        return {
            status: 'success',
            message: 'Email sent successfully',
            info,
        };
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

export default function handler(req, res) {
    const info = req.body;

    if (req.method === "POST") {
        contactEmail(info)
            .then(() => {
                res.status(200).json({ message: "Email sent successfully" });
            })
            .catch((error) => {
                res.status(500).json({ error: "Error sending email" });
            });
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}