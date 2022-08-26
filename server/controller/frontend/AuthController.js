import UserModel from '../../model/User.js';
const signup = (req, res) => {
  try {
    res.status(200).json({ status: true, msg: 'Signup Route' });
  } catch (e) {
    res.status(500).json({ status: true, msg: e });
  }
};
const signin = (req, res) => {
  try {
    res.status(200).json({ status: true, msg: 'Signin Route' });
  } catch (e) {
    res.status(500).json({ status: true, msg: e });
  }
};

export default { signup, signin };
