// routes/api/users.js
const express = require("express");
const router = express.Router();

// User Model
const User = require("../models/User.js");

// @route GET api/users
// @description Get All Users
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ success: false }));
});
// @route GET api/users/:walletAddress
// @description Get a user by wallet address or create one if not found
router.get("/:walletAddress", (req, res) => {
  User.findOne({ walletAddress: req.params.walletAddress })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        // User not found, create a new user
        const newUser = new User({
          walletAddress: req.params.walletAddress, // This is the wallet address from the request
          name: "Default Name",
          surname: "Default Surname",
          username: "default_username",
          email: "default_email@example.com",
          profilePicture: "default_url",
        });

        newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) =>
            res.status(500).json({ success: false, message: err.message })
          );
      }
    })
    .catch((err) =>
      res.status(500).json({ success: false, message: err.message })
    );
});

// @route PUT api/users/:walletAddress
// @description Update a user by wallet address
router.put("/:walletAddress", (req, res) => {
  const updatedUser = {
    name: req.body.name,
    surname: req.body.surname,
    username: req.body.username,
    email: req.body.email,
    profilePicture: req.body.profilePicture,
  };

  User.findOneAndUpdate(
    { walletAddress: req.params.walletAddress },
    updatedUser,
    { new: true }
  )
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ success: false, message: "User not found" });
      }
    })
    .catch((err) =>
      res.status(500).json({ success: false, message: err.message })
    );
});
// @route POST api/users
// @description Create A User
router.post("/", (req, res) => {
  const newUser = new User({
    walletAddress: req.body.walletAddress,
    username: req.body.username,
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    profilePicture: req.body.profilePicture,
  });

  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route DELETE api/users/:id
// @description Delete A User
router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => user.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route PUT api/users/:id
// @description Update A User
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
