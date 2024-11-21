import Category from "../models/category.model.js";
import Product from "../models/product.model.js";
import { z } from "zod";

const getAllProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    if (!product) {
      return res
        .status(400)
        .json({ status: "error", message: "product not founded" });
    }

    return res.status(200).json({ status: "success", message: "product founded successfully" , products: product });
  } catch (error) {
    console.log("Server Error :", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

const getSpecificProduct = async (req, res) => {
  try {
    const { id } = req?.params;

    const product = await Product.findById(id);

    if (!product) {
      return res
        .status(400)
        .json({ status: "error", message: "product not founded" });
    }

    return res.status(200).json({ status: "success", product: product });
  } catch (error) {
    console.log("Server Error :", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

const getProductByCategory = async (req, res) => {
  try {
    const { categoryId } = req?.params;

    const category = await Category.findById(categoryId);
    if (!category) {
      return res
        .status(404)
        .json({ status: "error", message: "category not found" });
    }

    const product = await Product.find({ categoryId });

    if (product.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No products found for this category",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "product founded Seccessfully",
      product: product,
    });
  } catch (error) {
    console.log("Server Error :", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const body = req?.body;
    const productSchema = z.object({
      name: z.string(),
      price: z.number(),
      stock: z.number(),
      categoryId: z.string(),
    });

    const validate = productSchema.safeParse(req?.body);

    if (!validate.success) {
      return res
        .status(400)
        .json({ error: "Bad Request", message: "Required field is missing" });
    }

    const product = await Product.create({
      name: body.name,
      price: body.price,
      stock: body.stock,
      categoryId: body.categoryId,
    });

    const category = await Category.findByIdAndUpdate(body.categoryId, {
      $push: { productId: product._id },
    });

    return res.status(200).json({
      status: "success",
      message: "create new product",
      product: product,
    });
  } catch (error) {
    console.log("Server Error :", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req?.params;
    const body = req?.body;

    const productSchema = z.object({
      name: z.string(),
      price: z.number(),
      stock: z.number(),
    });

    const validate = productSchema.safeParse(req?.body);
    if (!validate.success) {
      return res
        .status(400)
        .json({ status: "error", message: "Required field is missing" });
    }

    const product = await Product.findByIdAndUpdate(
      id,
      {
        name: body.name,
        price: body.price,
        stock: body.stock,
        categoryId: body.categoryId,
      },
      { new: true }
    );

    if (!product) {
      return res
        .status(200)
        .json({ status: "error", message: "product not founded" });
    }

    return res.status(200).json({ status: "success", product: product });
  } catch (error) {
    console.log("Server Error :", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req?.params;

    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(200)
        .json({ status: "Bad Request", message: "product not founded" });
    }

    await Product.findByIdAndDelete(id);

    const category = await Category.findByIdAndUpdate(product.categoryId, {
      $pull: { productId: id },
    });

    return res
      .status(200)
      .json({ status: "success", message: "Deleted product" });
  } catch (error) {
    console.log("Server Error :", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export {
  getAllProduct,
  getSpecificProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory,
};
