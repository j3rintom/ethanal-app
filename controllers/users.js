import UserSchema from "../models/UserSchema.js";

export const createUser = (req, res) => {
  const user = req.body;
  const newUser = new UserSchema(user);

  try {
    newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
