import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const formatter = new Intl.NumberFormat("vn");
  return (
    <div className="card">
      <Link to={`detail/${product._id}`}>
        <img
          className="card-img"
          src={product.images[0].url}
          alt={product._id}
        />
        <div className="card-name">{product.name}</div>
      </Link>
      <div className="card-price">
        {formatter.format(product.price)} <u>đ</u>{" "}
      </div>
      <div className="card-reviews">Chưa có đánh giá</div>
    </div>
  );
};

export default ProductItem;
