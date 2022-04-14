const Products = require("../models/Product");
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const productCtrl = {
  getAllProduct: async (req, res) => {
    try {
      const products = await Products.find();
      res.status(200).json({
        success: true,
        products,
      });
    } catch (error) {
      res.status(500).json({
        msg: error.message,
      });
    }
  },
  detailProduct: async (req, res) => {
    const product = await Products.findById(req.params.id);

    if (!product) {
      return next(new ErrorHander("Product not found", 404));
    }

    res.status(200).json({
      success: true,
      product,
    });
  },
  createProduct: async (req, res) => {
    try {
      const { name, description, price, sex, color, size, stock, category } =
        req.body;
      let images = [];

      if (typeof req.body.images === "string") {
        images.push(req.body.images);
      } else {
        images = req.body.images;
      }

      const imagesLinks = [];

      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
          folder: "products",
        });
        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }
      const newProduct = new Products({
        name,
        description,
        price,
        sex,
        color,
        size,
        stock,
        category,
        images: imagesLinks,
      });
      await newProduct.save();
      return res.status(201).json({
        success: true,
        product: newProduct,
      });
    } catch (error) {
      res.status(500).json({
        msg: error.message,
      });
    }
  },
};

module.exports = productCtrl;
