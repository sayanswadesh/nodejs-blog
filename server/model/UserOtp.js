import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { UserModel } from '../model/User.js';

const userOtpSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
  },
  otp: {
    type: Number,
  },
  created_date: {
    type: Date,
    default: Date.now(),
  },
});

export const UserOtpModel = mongoose.model('user_otp', userOtpSchema);
