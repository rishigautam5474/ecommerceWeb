import Category from "../models/category.model.js";
import Product from "../models/product.model.js";

const getAllCategory = async (req, res) => {
  try {
    const category = await Category.find({});

    if (!category) {
      return res
        .status(400)
        .json({ status: "error", message: "category not founded" });
    }

    return res.status(200).json({ status: "success", categories: category });
  } catch (error) {
    console.log("Server Error :", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

const getSpecificCategory = async (req, res) => {
  try {
    const { id } = req?.params;

    const category = await Category.findById(id);

    if (!category) {
      return res
        .status(400)
        .json({ status: "error", message: "category not founded" });
    }

    return res.status(200).json({ status: "success", category: category });
  } catch (error) {
    console.log("Server Error :", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

const getCategoryByProduct = async (req, res) => {
  try {
    const { productId } = req?.params;

    const product = await Product.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    }

    const category = await Category.find({ productId });

    if (category.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No category found for this product",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "category founded Seccessfully",
      data: category,
    });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

const createCategory = async (req, res) => {
  try {
    const body = req?.body;
    if (!body || !body.name) {
      return res
        .status(400)
        .json({ status: "Bad request", message: "Required field is missing" });
    }
    const category = await Category.create({
      name: body.name,
      description: body.description,
    });

    return res.status(200).json({
      status: "success",
      message: "create new category",
      category: category,
    });
  } catch (error) {
    console.log("Server Error :", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req?.params;
    const body = req?.body;

    if (!body || !body.name) {
      return res
        .status(400)
        .json({ status: "error", message: "Required field is missing" });
    }

    const category = await Category.findByIdAndUpdate(
      id,
      {
        name: body.name,
        description: body.description,
      },
      { new: true }
    );

    return res.status(200).json({
      status: "success",
      message: "category updated",
      category: category,
    });
  } catch (error) {
    console.log("Server Error :", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req?.params;

    const category = await Category.findById(id);

    if (!category) {
      return res
        .status(200)
        .json({ status: "error", message: "category not founded" });
    }

    await Category.findByIdAndDelete(id);

    const product = await Product.findByIdAndUpdate(category.productId, {
      $set: { categoryId: null },
    });

    return res
      .status(200)
      .json({ status: "success", message: "deleted Category" });
  } catch (error) {
    console.log("Server Error :", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export {
  getAllCategory,
  getSpecificCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryByProduct,
};
