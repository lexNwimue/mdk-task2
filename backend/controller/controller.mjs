import { User } from "../model/userModel.mjs";
const handleSave = (req, res) => {
  const {
    from_airport,
    from_country,
    to_airport,
    to_country,
    total,
    referenceNum,
    status,
  } = req.body;

  console.log(req.body);

  // Create user object
  const newUser = new User({
    from_airport,
    from_country,
    to_airport,
    to_country,
    total,
    referenceNum,
    status,
  });

  newUser
    .save()
    .then((user) => {
      res.json({ success: user });
      return;
    })
    .catch((e) => console.log(e));
};

export { handleSave };
