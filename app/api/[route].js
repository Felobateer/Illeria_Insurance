import { lifeEmail, healthEmail, finalExpenseEmail, medicareEmail, autoEmail } from "./utils/instant-quote";

const emailMap = {
  life: lifeEmail,
  health: healthEmail,
  finalexpense: finalExpenseEmail,
  medicare: medicareEmail,
  auto: autoEmail
};

export default function handler(req, res) {
  const { type } = req.query;
  const info = req.body;

  if (req.method === "POST") {
    const sendEmail = emailMap[type.toLowerCase()];
    if (sendEmail) {
      sendEmail(info);
      res.status(200).json({ message: "Email sent successfully" });
    } else {
      res.status(400).json({ error: "Invalid quote type" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
