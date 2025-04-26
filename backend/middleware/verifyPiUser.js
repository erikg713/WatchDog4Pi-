import fetch from 'node-fetch';

export default async function verifyPiUser(req, res, next) {
  const uid = req.headers['x-pi-uid'];
  const authHeader = req.headers['authorization'];

  if (!uid || !authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing credentials' });
  }

  const accessToken = authHeader.split(' ')[1];

  try {
    const piRes = await fetch('https://api.minepi.com/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    const userData = await piRes.json();

    if (userData.uid !== uid) {
      return res.status(403).json({ error: 'UID mismatch' });
    }

    req.piUser = userData; // Forward user info
    next();
  } catch (err) {
    console.error('Pi auth failed:', err);
    res.status(500).json({ error: 'Pi verification failed' });
  }
}
