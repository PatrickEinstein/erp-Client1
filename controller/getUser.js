import User from "../model/user.js";

const getThisUser = async (req, res) => {
  try {
    //find this user in question
    console.log(req.body);

    const { parameter } = req.body;

    const founduser = await User.find({
      $or: [
        { firstName: parameter },
        { lastName: parameter },
        { email: parameter },
      ],
    });

    if (founduser.length === 0) {
      res.status(404).json({ message: "user not found" });
    } else {
      const found = founduser.map(({ firstName, lastName, pdf }) => ({
        firstName,
        lastName,
        file: [Buffer.from(pdf).toString("utf8")],
      }));
      res.status(200).json({ users: found });
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const foundUsers = await User.find();

    if (foundUsers.length === 0) {
      res.status(404).json({ message: "user not found" });
    } else {
      const found = foundUsers.map(({ firstName, lastName, pdf }) => ({
        firstName,
        lastName,
        file: [Buffer.from(pdf).toString("utf8")],
      }));
      console.log(found.length);
      res.status(200).json({ users: found });
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export default getThisUser;
