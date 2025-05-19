export default function handler(req, res) {
  const apiKey = req.headers['x-api-key'];
  const validApiKey = process.env.MY_SECRET_KEY;

  if (apiKey !== validApiKey) {
    return res.status(403).json({ error: 'دسترسی غیر مجاز' });
  }

  const now = new Date();
  res.status(200).json({ dateTime: now.toISOString() });
