const asyncErrorHandler = require("../asyncErrorHandler");
const { User } = require("../../models");
const registerHandler = asyncErrorHandler(async (req, res, next) => {
  const {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    username,
  } = req.body;
  await User.create({ firstName, lastName, email, password, username });
  return res.status(201).json({ message: "akun berhasil dibuat", data: {} });
});

module.exports = registerHandler;
