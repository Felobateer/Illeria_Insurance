import fs from 'fs';
import path from 'path';
import { sendEmail } from './utils/email-manager';

const filePath = path.resolve(process.cwd(), 'data', 'newsletter.csv');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { subject, message } = req.body;
  if (!subject || !message) {
    return res.status(400).json({ error: 'Subject and message required' });
  }

  const csv = fs.readFileSync(filePath, 'utf-8');
  const emails = csv.split('\n').slice(1).filter(Boolean);

  for (const email of emails) {
    await sendEmail({
        to: email,
        subject,
        html: message
        });
  }

  res.status(200).json({ message: 'Newsletter sent' });
}
