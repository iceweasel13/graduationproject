// models/Project.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
  walletAddress: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: false,
  },
  twitter: {
    type: String,
    required: false,
  },
  linkedin: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  applicationStatus: {
    type: Boolean,
    default: false,
  },
});

module.exports = Project = mongoose.model("project", ProjectSchema);
