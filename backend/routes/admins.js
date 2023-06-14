// routes/api/admins.js
const express = require("express");
const router = express.Router();

// Admin Model
const Admin = require("../models/Admin");

// @route GET api/admins
// @description Get All Admins
router.get("/", (req, res) => {
  Admin.find()
    .then((admins) => res.json(admins))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route POST api/admins
// @description Create An Admin
router.post("/", (req, res) => {
  const { username, password } = req.body;

  Admin.findOne({ username: username })
    .then((admin) => {
      if (!admin) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid credentials." });
      }

      // here you should compare the password using a hashing function
      if (admin.password !== password) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid credentials." });
      }

      res.json(admin);
    })
    .catch((err) => res.status(500).json({ success: false }));
});

// @route DELETE api/admins/:id
// @description Delete An Admin
router.delete("/:id", (req, res) => {
  Admin.findById(req.params.id)
    .then((admin) => admin.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
