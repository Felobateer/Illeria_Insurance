import fs from 'fs';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'data', 'newsletter.csv');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, 'email\n');
  }

  const csv = fs.readFileSync(filePath, 'utf-8');
  if (csv.includes(email)) {
    return res.status(409).json({ error: 'Email already subscribed' });
  }

  fs.appendFileSync(filePath, `${email}\n`);
  res.status(200).json({ message: 'Subscribed successfully' });
}
