let User = require("./userModel.js");
exports.update = async (req, res) => {
  const { userId, image, voteCast, voteToWin, voteTotal } = req.body;

  // Check if the user exists.
  const user = await User.findById(userId);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  // Update the user's image.
  user.image = image;
  user.voteCast = voteCast;
  user.voteToWin = voteToWin;
  user.voteTotal = voteTotal;
  await user.save();

  // Return the user object.
  res.json(user);
};
