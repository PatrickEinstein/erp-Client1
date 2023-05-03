import User from "../model/user.js";

const getThisUser = async (req, res) => {
  try {
    //find this user in question
    console.log(req.body);

    const { parameter } = req.body;

    const founduser = await User.find({
      $or: [
        { firstName: { $regex: parameter, $options: "i" } }, // case-insensitive search
        { lastName: { $regex: parameter, $options: "i" } },
        { email: { $regex: parameter, $options: "i" } },
        { companyName: { $regex: parameter, $options: "i" } },
        { Products: { $regex: parameter, $options: "i" } },
        { phone: { $regex: parameter, $options: "i" } },
      ],
    });
    //   $or: [
    //     { firstName: parameter },
    //     { lastName: parameter },
    //     { email: parameter },
    //     { companyName: parameter },
    //     { Products: parameter },
    //     { phone: parameter },
    //   ],
    // });
    //console.log(founduser);

    if (founduser.length === 0) {
      res.status(404).json({ message: "user not found" });
    } else {
      const found = founduser.map(
        ({
          _id,
          firstName,
          Products,
          lastName,
          phone,
          email,
          pdf,
          companyName,
          cat1,
          cat2,
          cat3,
          cat4,
          cat5,
          cat6,
          cat7,
          cat8,
          cat9,
          cat10,
          cat11,
          cat12,
          cat13,
          cat14,
          cat15,
          totalAveragePercentage,
          totalResult,
        }) => ({
          _id,
          firstName,
          lastName,
          phone,
          email,
          Products,
          companyName,
          pdf,
          cat1,
          cat2,
          cat3,
          cat4,
          cat5,
          cat6,
          cat7,
          cat8,
          cat9,
          cat10,
          cat11,
          cat12,
          cat13,
          cat14,
          cat15,
          totalAveragePercentage,
          totalResult,
          // file: [Buffer.from(pdf).toString("utf8")],
        })
      );
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
      const found = foundUsers.map(
        ({
          _id,
          firstName,
          Products,
          lastName,
          phone,
          email,
          pdf,
          companyName,
          cat1,
          cat2,
          cat3,
          cat4,
          cat5,
          cat6,
          cat7,
          cat8,
          cat9,
          cat10,
          cat11,
          cat12,
          cat13,
          cat14,
          cat15,
          totalAveragePercentage,
          totalResult,
        }) => ({
          _id,
          firstName,
          Products,
          lastName,
          phone,
          email,
          pdf,
          companyName,
          cat1,
          cat2,
          cat3,
          cat4,
          cat5,
          cat6,
          cat7,
          cat8,
          cat9,
          cat10,
          cat11,
          cat12,
          cat13,
          cat14,
          cat15,
          totalAveragePercentage,
          totalResult,
        })
      );
      console.log(found.length);
      res.status(200).json({ users: found });
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export default getThisUser;
