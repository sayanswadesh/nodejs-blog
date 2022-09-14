import { UserModel } from '../model/User.js';
import bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';

const signup = async (req, res) => {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    let salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password, salt);

    await UserModel.create({
      name: name,
      email: email,
      password: password,
    });

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
