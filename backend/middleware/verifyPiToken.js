// backend/middleware/verifyPiToken.js
import { verifyAccessToken } from 'pi-sdk'; // assumes pi-sdk is installed
import User from '../models/User.js';

const verifyPiToken = async (req, res, next) => {
  const piToken = req.headers['authorization']?.split(' ')[1];
  if (!piToken) return res.status(401).json({ error: 'No Pi token provided' });

  try {
    const payload = await verifyAccessToken(piToken); // validate with Pi SDK
    const { user } = payload;

    // Optional: save or update user in DB
    let existingUser = await User.findOne({ piId: user.uid });
    if (!existingUser) {
      existingUser = await User.create({ piId: user.uid, username: user.username });
    }

    req.user = existingUser;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid Pi token' });
  }
};

export default verifyPiToken;