import UserModel from '../model/User.js';

const signup = (req, res) => {
  try {
    // var userDetails = new UserModel({
    //   name: req.body.name,
    //   email: req.body.email,
    // });
    res.status(200).json({ status: true, msg: 'Signup Successfully' });
  } catch (e) {
    res.status(500).json({ status: false, msg: e });
  }
};
const signin = (req, res) => {
  try {
    res.status(200).json({ status: true, msg: 'Signin Route' });
  } catch (e) {
    res.status(500).json({ status: false, msg: e });
  }
};

export default { signup, signin };
