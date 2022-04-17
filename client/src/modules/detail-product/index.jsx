import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../BreadCrumb";
import TabProduct from "../tab-product";
import SizeProduct from "./SizeProduct";
import Slider from "react-slick";
import "./style.scss";
import { Image } from "antd";
import { useParams } from "react-router-dom";
import { ProductService } from "services/product-service";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState();
  const productService = new ProductService();
  useEffect(() => {
    const getProduct = async () => {
      const res = await productService.getProductById({ id: id });
      console.log(res);
      setProduct(res.product);
    };
    getProduct();
  }, [id]);
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={product.images[i].url} alt={product._id} />
        </a>
      );
    },
    dots: true,
    dotsClass: "group-array-image",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    autoplaySpeed: 3000,
    nextArrow: (
      <div>
        <i class="fa fa-angle-right right"></i>
      </div>
    ),
    prevArrow: (
      <div>
        <i class="fa fa-angle-left left"></i>
      </div>
    ),
  };
  const showReview = (rating, numReviews) => {
    const rate = rating / numReviews;
    if (numReviews > 0) {
      return (
        <>
          <Rating name="read-only" value={rate} readOnly />
          <span className="total-review">có {numReviews} Đánh giá</span>
        </>
      );
    } else {
      return (
        <>
          <Rating name="read-only" value={5} readOnly />
          <span className="total-review">chưa có đánh giá</span>
        </>
      );
    }
  };
  const loadPrice = (product) => {
    const formatter = new Intl.NumberFormat("vn");
    if (product && product.isdiscount) {
      const price = product.price - (product.price * product.discount) / 100;
      return (
        <div className="price-box">
          <span className="special-price">
            <span>
              {formatter.format(price)} <u>đ</u>
            </span>
          </span>
          <span className="old-price">
            <del>{product.price}</del>
          </span>
        </div>
      );
    } else {
      return (
        <div className="price-box">
          <span className="special-price">
            <span>
              {formatter.format(product?.price)} <u>đ</u>
            </span>
          </span>
        </div>
      );
    }
  };
  const [size, setSize] = useState();
  const [soLuong, setSoLuong] = useState(1);
  const preNumber = () => {
    const number = Math.max(1, soLuong - 1);
    setSoLuong(number);
  };
  const nextNumber = () => {
    const number = Math.min(5, soLuong + 1);
    setSoLuong(number);
  };

  return (
    <>
      <div className="grid wide pt-2 pb-2 mb-4 border-bottom">
        <Breadcrumb />
      </div>
      <section className="detail-products grid wide">
        <div className="row">
          <div className="product-images col l-5">
            <div className="product-images-detaitl">
              <Slider {...settings}>
                {product?.images.map((image, index) => (
                  <div className="product-image" key={index}>
                    <Image src={image.url} alt={image._id} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="detail-prod col l-6 l-o-1">
            <h1 class="title-product">{product?.name}</h1>
            <div className="review-result">
              {showReview(product?.ratings, product?.numOfReviews)}
            </div>
            <div class="group-status">
              <span class="first_status">
                Nhà sản xuất:
                <span class="status_name">{product?.category}</span>
              </span>
              <span class="first_status">
                &nbsp;|&nbsp; Tình trạng:
                <span class="status_name">
                  <span>Còn hàng</span>
                </span>
              </span>
            </div>
            {loadPrice(product)}
            <div className="product-summary">
              <div class="description">
                <ul>
                  <li>Dạng ổ cứng: Thiết bị lưu trữ mạng NAS</li>
                  <li>Dung lượng: 0 TB (Chưa bao gồm ổ cứng)</li>
                  <li>Bảo hành: 2 năm</li>
                </ul>
              </div>
            </div>
            <div className="product_content ">
              <div className="size">
                <span className="size-title">Kích cỡ</span>
                {product?.size.map((s, i) => {
                  return (
                    <div className="size-item">
                      <span
                        onClick={() => setSize(s)}
                        className={s === size ? "size-item-active" : ""}
                      >
                        {s}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="soluong">
                <div class="label_sl">Số lượng:</div>
                <div className="custom">
                  <button type="button" onClick={preNumber}>
                    -
                  </button>
                  <input type="text" value={soLuong} />
                  <button type="button" onClick={nextNumber}>
                    +
                  </button>
                </div>
              </div>
              <div class="button_actions">
                <button type="submit" className="add_to_cart">
                  <span className="text_1">Thêm vào giỏ hàng</span>
                </button>
                <a className="btn_call" href="/">
                  <span className="text_1">Mua Ngay</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col c-12">
            <TabProduct product={product} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
