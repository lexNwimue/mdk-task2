import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    from_airport: {
      required: true,
      type: String,
    }, //id, from_airport, from_country, to_airport, to_country, total, stripe_id, status(paid, failed)
    from_country: {
      required: true,
      type: String,
    },
    to_airport: {
      required: true,
      type: String,
    },
    to_country: {
      required: true,
      type: String,
    },
    total: {
      require: true,
      type: Number,
    },
    referenceNum: {
      required: true,
      unique: true,
      type: String,
    },
    status: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export { User };
