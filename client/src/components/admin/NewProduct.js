import axios from "axios";
import React, { useState } from "react";
import "./style.scss";
const NewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  // const [size, setSize] = useState([]);
  // const [color, setColor] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const handleSubmit = async () => {
    const newproduct = {
      name,
      price: Number(price),
      description,
      category,
      sex: "nam",
      images,
      size: [40, 41, 42],
      color: ["den", "trang"],
    };
    console.log(newproduct);
    const res = await axios.post("/createProduct", newproduct);
    console.log(res);
  };
  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  return (
    <div className="new-product">
      <h3>Create Product</h3>
      <div className="form-group">
        <label htmlFor="name">Tên sản phẩm</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Giá</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Miêu tả</label>
        <input
          type="text"
          name="name"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="stock">Kho</label>
        <input
          type="text"
          name="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">category</label>
        <input
          type="text"
          name="name"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="file"
          name="avatar"
          accept="image/*"
          onChange={createProductImagesChange}
          multiple
        />
      </div>
      <div className="form-group">
        <div id="createProductFormImage">
          {imagesPreview.map((image, index) => (
            <img key={index} src={image} alt="Product Preview" />
          ))}
        </div>
      </div>
      <button onClick={handleSubmit}>create</button>
    </div>
  );
};

export default NewProduct;
