import { Rating } from "@mui/material";
import React from "react";
import SmallProduct from "../small-product";
import TabProduct from "../tab-product";
import Breadcrumb from "../BreadCrumb";
import SizeProduct from "./SizeProduct";
import "./style.scss";

const Detail = () => {
  return (
    <>
      <div className="grid wide pt-2 pb-2 mb-4 border-bottom">
        <Breadcrumb />
      </div>
      <section className="detail-products">
        <div className="grid wide">
          <div className="row">
            <div className="col l-9">
              <div className="row">
                <div className="product-images col l-5"></div>
                <div className="detail-prod l-7">
                  <h1 class="title-product">
                    Thiết bị lưu trữ mạng NAS Synology DS220j
                  </h1>
                  <div className="review-result">
                    <Rating name="read-only" value={3} readOnly />
                    <span className="total-review">Xem 11 đánh giá</span>
                  </div>
                  <div class="group-status">
                    <span class="first_status">
                      Thương hiệu:
                      <span class="status_name">Synology</span>
                    </span>
                    <span class="first_status">
                      &nbsp;|&nbsp; Tình trạng:
                      <span class="status_name">
                        <span>Còn hàng</span>
                      </span>
                    </span>
                  </div>
                  <div className="price-box">
                    <span className="special-price">
                      <span>5.150.000₫</span>
                    </span>
                    <span className="old-price">
                      <del>5.150.000₫</del>
                    </span>
                  </div>
                  <div className="product-summary">
                    <div class="description">
                      <ul>
                        <li>Dạng ổ cứng: Thiết bị lưu trữ mạng NAS</li>
                        <li>Dung lượng: 0 TB (Chưa bao gồm ổ cứng)</li>
                        <li>Bảo hành: 2 năm</li>
                      </ul>
                    </div>
                  </div>
                  <form>
                    <div className="form_product_content ">
                      <div className="soluong">
                        <div class="label_sl">Số lượng:</div>
                        <div className="custom ">
                          <button type="button">-</button>
                          <input type="text" value={1} />
                          <button type="button">+</button>
                        </div>
                        <div className="custom">
                          <SizeProduct />
                        </div>
                        <div class="button_actions">
                          <button type="submit" className="add_to_cart">
                            <span className="text_1">MUA NGAY</span>
                            <span className="text_2">
                              Giao hàng COD tận nơi
                            </span>
                          </button>
                          <a className="btn_call" href="/">
                            <span className="text_1">GỌI ĐẶT HÀNG</span>
                            <span className="text_2">
                              Vui lòng gọi ngay 02477702777
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row mt-4 mb-4">
                <div className="col c-12">
                  <TabProduct />
                </div>
              </div>
            </div>
            <div className="col l-3">
              <div className="module_best_sale_product">
                <div className="title_module">
                  <h2>
                    <a href="/">Có thể bạn thích</a>
                  </h2>
                </div>
                <div className="sale_off_today">
                  <SmallProduct />
                  <SmallProduct />
                  <SmallProduct />
                  <SmallProduct />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
