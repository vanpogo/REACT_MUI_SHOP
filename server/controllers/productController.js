import Product from "../models/products.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products) return res.json({ message: "Продукты не найдены" });

    return res.json({ products });
  } catch (e) {
    console.log(e.message);
    return res.json({ message: e.message });
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.id });

    if (!product) return res.json({ message: "Продукт не найден" });

    return res.json({ product });
  } catch (e) {
    console.log(e.message);
    return res.json({ message: e.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const imageUrl = `${req.file.originalname}`;

    const product = await new Product({
      name,
      price,
      description,
      image: imageUrl,
    });
    await product.save();

    return res.json({ product });
  } catch (e) {
    console.log(e.message);
    return res.json({ message: e.message });
  }
};
