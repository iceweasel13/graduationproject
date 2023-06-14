// routes/api/projects.js
const express = require("express");
const router = express.Router();

// Project Model
const Project = require("../models/Project");

// @route GET api/projects
// @description Get All Projects
router.get("/", (req, res) => {
  Project.find()
    .then((projects) => res.json(projects))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route POST api/projects
// @description Create A Project
router.post("/", (req, res) => {
  const newProject = new Project({
    url: req.body.url,
    logo: req.body.logo,
    title: req.body.title,
    introduction: req.body.introduction,
    instagram: req.body.instagram,
    twitter: req.body.twitter,
    linkedin: req.body.linkedin,
    website: req.body.website,
    walletAddress: req.body.walletAddress,
    applicationStatus: req.body.applicationStatus,
  });

  newProject
    .save()
    .then((project) => res.json(project))
    .catch((err) => res.status(404).json({ success: false }));
});
// @route GET api/projects/:walletAddress
// @description Get a project by wallet address
router.get("/:walletAddress", (req, res) => {
  Project.findOne({ walletAddress: req.params.walletAddress })
    .then((project) => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ success: false });
      }
    })
    .catch((err) => res.status(500).json({ success: false }));
});
// @route PUT api/projects/:walletAddress
// @description Update a project by wallet address
router.put("/:walletAddress", (req, res) => {
  const updatedProject = {
    url: req.body.url,
    logo: req.body.logo,
    title: req.body.projectName,
    introduction: req.body.introduction,
    instagram: req.body.instagram,
    twitter: req.body.twitter,
    linkedin: req.body.linkedin,
    website: req.body.website,
  };

  Project.findOneAndUpdate(
    { walletAddress: req.params.walletAddress },
    updatedProject,
    { new: true }
  )
    .then((project) => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ success: false, message: "Project not found" });
      }
    })
    .catch((err) =>
      res.status(500).json({ success: false, message: err.message })
    );
});

// @route DELETE api/projects/:id
// @description Delete A Project
router.delete("/:id", (req, res) => {
  Project.findById(req.params.id)
    .then((project) => project.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
