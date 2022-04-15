import React from "react";
import thumb from "assets/images/giay1.jpg"
import "./style.scss";

const SmallProduct = () => {
  return (
    <div className="product-mini-item">
      <a className="product-img" href="/">
        <img src={thumb} alt="" />
      </a>
      <div className="product-info">
        <h3>
          <a href="/">Chuột có dây Logitech B100 910-006605</a>
        </h3>
        <div class="price-box">
          <span class="price">
            <span class="price product-price">80.000₫ </span>
          </span>
          <span class="old-price">
            <del class="sale-price">130.000₫</del>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SmallProduct;
