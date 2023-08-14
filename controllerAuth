const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let User = require("./userModel.js");
const dotenv = require("dotenv");
const { parsed: config } = dotenv.config();
exports.createAccount = async (req, res) => {
  let { email, password } = req.body;

  // Check if the email is already in use.
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400).json({ error: "Email already in use" });
    return;
  }

  // Create a new user.

  password = await bcrypt.hash(password, 10);
  const user = new User({ email, password });
  await user.save();

  // Return the user object.
  res.json(user);
};
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email.
  const user = await User.findOne({ email });
  if (!user) {
    res.status(401).json({ error: "Invalid email or password" });
    return;
  }

  // Compare the password.
  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    res.status(401).json({ error: "Invalid email or password" });
    return;
  }

  // Create a token for the user
  const token = await jwt.sign({ id: user._id }, config.SECRET, {
    expiresIn: 1000, // expires in 1 hour
  });

  // Return the token.
  res.json(user);
};
