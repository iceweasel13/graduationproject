// routes/api/certificates.js
const express = require("express");
const router = express.Router();

// Certificate Model
const Certificate = require("../models/Certificate");

// @route GET api/certificates
// @description Get All Certificates
router.get("/", (req, res) => {
  Certificate.find()
    .then((certificates) => res.json(certificates))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route POST api/certificates
// @description Create A Certificate
router.post("/", (req, res) => {
  const newCertificate = new Certificate({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    contractAddress: req.body.contractAddress,
    logo: req.body.logo,
    projectId: req.body.projectId,
    projectName: req.body.projectName,
  });

  newCertificate
    .save()
    .then((certificate) => res.json(certificate))
    .catch((err) => res.status(404).json({ success: false }));
});
// @route PUT api/certificates/:id
// @description Edit a Certificate
router.put("/:id", (req, res) => {
  Certificate.findById(req.params.id)
    .then((certificate) => {
      // update the certificate fields
      certificate.title = req.body.title || certificate.title;
      certificate.description = req.body.description || certificate.description;
      certificate.contractAddress =
        req.body.contractAddress || certificate.contractAddress;

      certificate
        .save()
        .then(() => res.json({ success: true }))
        .catch((err) => res.status(404).json({ success: false }));
    })
    .catch((err) => res.status(404).json({ success: false }));
});

router.get("/project/:projectId", (req, res) => {
  const projectId = req.params.projectId;

  Certificate.find({ projectId })
    .then((certificates) => {
      if (!certificates) {
        return res.status(404).json({ error: "Certificates not found" });
      }
      res.json(certificates);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    });
});

// @route DELETE api/certificates/:id
// @description Delete A Certificate
router.delete("/:id", (req, res) => {
  Certificate.findById(req.params.id)
    .then((certificate) =>
      certificate.remove().then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
