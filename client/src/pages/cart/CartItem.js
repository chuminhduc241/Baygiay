import React from "react";
import Breadcrumb from "../BreadCrumb";
import thumb from "assets/images/giay1.jpg";
import "./style.scss";

const Cart = () => {
  return (
    <>
      {/* <div className="grid wide pt-2 pb-2 mb-4 border-bottom">
        <Breadcrumb />
      </div> */}
      <section className="main-cart-page main-container">
        <div className="grid wide">
          <div className="row">
            <div className="col c-12 m-12 l-12">
              <div className="header-cart">
                <h1 className="title">Giỏ hàng</h1>
                <div className="cart-page">
                  <form>
                    <div className="b-scroll">
                      <div className="cart-thead">
                        <div style={{ width: "17%" }}>Ảnh sản phẩm</div>
                        <div style={{ width: "33%" }}>
                          <span className="nobr">Tên sản phẩm</span>
                        </div>
                        <div style={{ width: "15%" }} className="a-center">
                          <span className="nobr">Đơn giá</span>
                        </div>
                        <div style={{ width: "14%" }} className="a-center">
                          Số lượng
                        </div>
                        <div style={{ width: "15%" }} className="a-center">
                          Thành tiền
                        </div>
                        <div style={{ width: "6%" }}>Xoá</div>
                      </div>
                      <div className="cart-tbody">
                        <div className="item-cart">
                          <div style={{ width: "17%" }}>
                            <a className="product-image" href="/">
                              <img src={thumb} alt="" />
                            </a>
                          </div>
                          <div className="a-center" style={{ width: "33%" }}>
                            <h2 className="product-name" href="/">
                              <a className="text2line">
                                Giày Converse Chuck Taylor Festival Golden Mind
                                Hi
                              </a>
                            </h2>
                          </div>
                          <div style={{ width: "15%" }} class="a-center">
                            <span class="item-price">
                              <span class="price">1.900.000₫</span>
                            </span>
                          </div>
                          <div style={{ width: "14%" }}>
                            <span className="input_qty_pr">
                              <button type="button">-</button>
                              <input type="text" value={1} />
                              <button type="button">+</button>
                            </span>
                          </div>
                          <div style={{ width: "15%" }} class="a-center">
                            <span class="item-price">
                              <span class="price">1.900.000₫</span>
                            </span>
                          </div>
                          <div style={{ width: "6%" }}>
                            <a class="remove-item-cart" title="Xóa" href="/">
                              <span>
                                <i class="fa-solid fa-trash-can"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <table class="shopping-cart-table-total mb-0">
                        <tfoot>
                          <tr>
                            <td colspan="20" class="a-right">
                              <span>Tổng tiền:</span>
                            </td>
                            <td class="a-right">
                              <strong>
                                <span class="totals_price price">
                                  1.900.000₫
                                </span>
                              </strong>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                      <ul class="checkout">
                        <li>
                          <button
                            class="btn-proceed-checkout"
                            title="Thực hiện thanh toán"
                            type="button"
                          >
                            <span>Thực hiện thanh toán</span>
                          </button>
                          <button title="Tiếp tục mua hàng" type="button">
                            <span>Tiếp tục mua hàng</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
