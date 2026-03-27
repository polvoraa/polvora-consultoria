const mongoose = require("mongoose");

const contactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 160,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 4000,
    },
    source: {
      type: String,
      default: "site",
      trim: true,
      maxlength: 60,
    },
    metadata: {
      ip: {
        type: String,
        trim: true,
        maxlength: 100,
      },
      userAgent: {
        type: String,
        trim: true,
        maxlength: 500,
      },
      origin: {
        type: String,
        trim: true,
        maxlength: 200,
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("ContactMessage", contactMessageSchema);
