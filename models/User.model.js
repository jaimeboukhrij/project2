const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {

    username: {
      type: String,
      trim: true,
      required: false,
      unique: true
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    secondName: {
      type: String,
      trim: true,
      required: true,
    },
    role: {
      type: String,
      enum: ["driver", "passenger", "admin"],
      trim: true,
      required: true,
    },
    dni: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: Number,
      trim: true
    },
    car: [
      {
        model: String,
        type: String,
        trim: true,
        required: true,
        default: null

      },
      {
        tuition: String,
        type: String,
        trim: true,
        required: true,
        default: null
      }
    ],
    trip: {
      type: Schema.Types.ObjectId,
      ref: 'Trip'
    },
    reviews: {
      type: Schema.Types.ObjectId,
      ref: 'Review'
    },
    aptitudes: [String]
  },
  {
    timestamps: true,
  });

const User = model("User", userSchema);

module.exports = User;
