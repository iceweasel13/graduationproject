// models/Certificate.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CertificateSchema = new Schema({
  projectId: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  contractAddress: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
});

module.exports = Certificate = mongoose.model("certificate", CertificateSchema);
