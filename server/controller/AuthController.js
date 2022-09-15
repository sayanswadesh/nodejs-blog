import { UserModel } from '../model/User.js';
import { UserOtpModel } from '../model/UserOtp.js';
import bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';

/****** user sign up  ******/
const signup = async (req, res) => {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    let checkEmail = await UserModel.findOne({ email });
    if (checkEmail) {
      res
        .status(400)
        .json({ status: false, msg: email + ' already used by another user.' });
    }

    let salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password, salt);

    let user = await UserModel.create({
      name: name,
      email: email,
      password: password,
    });

    let otp = Math.floor(1000 + Math.random() * 9000);

    await UserOtpModel.create({
      user_id: user._id,
      otp: otp,
    });

    let data = {
      user,
    };

    res.status(200).json({
      status: true,
      msg: 'Signup successfully. Please check your email.',
      data,
    });
  } catch (e) {
    res.status(500).json({ status: false, msg: e });
  }
};

/****** user email vefify   ******/
const verify = async (req, res) => {
  try {
    let otp = req.body.otp;
    let user_id = req.body.user_id;

    let userVerify = await UserOtpModel.findOne({
      $and: [{ user_id }, { otp }],
    });

    if (!!userVerify) {
      Jwt.sign({ user_id }, 'secretKey', (err, token) => {
        res.status(200).send({
          status: true,
          msg: 'User verification successfully.',
          data: { token },
        });
      });
    } else {
      res.status(400).send({ status: false, msg: 'Otp not match.' });
    }
  } catch (e) {
    res.status(500).send({
      status: false,
      msg: e,
    });
  }
};

/****** user sign in ******/
const signin = async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    let vefifyUser = await UserModel.findOne({ email });
    if (!!vefifyUser) {
      const vefifyPassword = await bcrypt.compare(
        password,
        vefifyUser.password
      );
      if (vefifyPassword) {
        Jwt.sign({ email }, 'secretKey', (err, token) => {
          if (!!err) {
            res.status(400).json({
              status: false,
              msg: 'Something wrong. Please try again.',
            });
          } else {
            res.status(200).send({
              status: true,
              msg: 'Sign in successfully.',
              data: { user: vefifyUser, token },
            });
          }
        });
      } else {
        res.status(400).json({
          status: false,
          msg: 'Password not match.',
        });
      }
    } else {
    }
  } catch (e) {
    res.status(500).json({ status: false, msg: e });
  }
};

export default { signup, verify, signin };
