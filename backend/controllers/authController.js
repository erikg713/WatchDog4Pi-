import User from '../models/User.js';

export const verifyPiUser = async (req, res) => {
  const { pi_uid, username } = req.body;

  try {
    let user = await User.findOne({ pi_uid });

    if (!user) {
      user = await User.create({ pi_uid, username, lastLogin: new Date() });
    } else {
      user.lastLogin = new Date();
      await user.save();
    }

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ error: 'Auth failed', details: err.message });
  }
};
