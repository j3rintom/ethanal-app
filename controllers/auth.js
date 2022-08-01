import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (data) => {
  const { email, password, name } = data;
  try {
    if (!email) throw Error("Invalid Request");
    const existing = await User.findOne({ email });

    if (existing)
      return {
        success: false,
        errorMessage: "User with given email already exists!",
      };

    //request validated
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      password: hash,
      email,
    });
    await user.save();

    delete user.password;

    const token = jwt.sign(user._id.toJSON(), process.env.TOKEN_SECRET);
    user.token = token;

    return { success: true, user };
  } catch (e) {
    console.log(e);
  }
  return { success: false, message: "Request failed!", code: 500 };
};

const loginUser = async (data) => {
  const { email, password } = data;

  try {
    if (!email) throw Error("Invalid Request");
    const user = await User.findOne({ email })
      .select("+password")
      .lean()
      .exec();

    if (!user) return { success: false, message: "No such user!", code: 304 };

    const correct = await bcrypt.compare(password, user.password);
    delete user.password;

    if (!correct)
      return {
        success: false,
        errorMessage: "Incorrect password",
      };

    const token = jwt.sign(user._id.toJSON(), process.env.TOKEN_SECRET);
    user.token = token;

    return { success: true, user };
  } catch (e) {
    console.log(e);
  }
  return { success: false, errorMessage: "Could'nt Login!" };
};

export { registerUser, loginUser };
