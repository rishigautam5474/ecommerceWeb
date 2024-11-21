import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String
    },
    productId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Product"
    }
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
