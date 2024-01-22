const { User } = require("../DB_connection");

async function postUser(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password || email.length === 0 || password.length === 0) {
      return res.status(400).send("Faltan datos");
    }

    const newUser = await User.findOrCreate({ where: { email, password } });
    return res.status(200).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  postUser,
};
