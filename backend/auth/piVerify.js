import fetch from 'node-fetch';

export async function verifyPiAccessToken(accessToken) {
  try {
    const res = await fetch('https://api.minepi.com/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    if (!res.ok) throw new Error(`Pi API error: ${res.status}`);

    const userData = await res.json();
    return userData;
  } catch (error) {
    console.error('Pi verification failed:', error.message);
    return null;
  }
}

export function piAuthMiddleware(requiredRole = null) {
  return async (req, res, next) => {
    const uid = req.headers['x-pi-uid'];
    const authHeader = req.headers['authorization'];
    const accessToken = authHeader?.split(' ')[1];

    if (!uid || !accessToken) {
      return res.status(401).json({ error: 'Missing credentials' });
    }

    const piUser = await verifyPiAccessToken(accessToken);

    if (!piUser || piUser.uid !== uid) {
      return res.status(403).json({ error: 'Unauthorized Pi user' });
    }

    if (requiredRole && piUser.roles?.includes(requiredRole) !== true) {
      return res.status(403).json({ error: 'Insufficient role access' });
    }

    req.piUser = piUser;
    next();
  };
}
