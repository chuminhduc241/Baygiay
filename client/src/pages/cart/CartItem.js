import popup from "components/common/Popup";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateCart } from "redux/cartSlice";
import "./style.scss";

const Cart = () => {
  const dataCart = useSelector((state) => state.cart).cart;
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const formatter = new Intl.NumberFormat("vn");
  useEffect(() => {
    const sumPrice = dataCart.reduce((pre, item) => {
      return pre + item.product.price * item.quantity;
    }, 0);
    setTotal(sumPrice);
  }, [dataCart]);

  const increment = (quantity, index) => {
    dispatch(updateCart({ index, quantity: quantity + 1 }));
    popup("Cập nhập", "Cập nhập giỏ hàng thành công", "success");
  };
  const decrement = (quantity, index) => {
    const soluong = Math.max(1, quantity - 1);
    dispatch(updateCart({ index, quantity: soluong }));
    popup("Cập nhập", "Cập nhập giỏ hàng thành công", "success");
  };
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
                      {dataCart?.map((item, index) => (
                        <div className="cart-tbody" key={index}>
                          <div className="item-cart">
                            <div style={{ width: "17%" }}>
                              <a className="product-image" href="/">
                                <img src={item.product?.images[0].url} alt="" />
                              </a>
                            </div>
                            <div className="a-center" style={{ width: "33%" }}>
                              <h2 className="product-name">
                                <Link
                                  to={`/detail/${item.product._id}`}
                                  className="text2line"
                                >
                                  {item.product.name} <br />
                                  <span>Size: {item.product.size}</span>
                                </Link>
                              </h2>
                            </div>
                            <div style={{ width: "15%" }} class="a-center">
                              <span class="item-price">
                                <span class="price">
                                  {" "}
                                  {formatter.format(item.product.price)} đ
                                </span>
                              </span>
                            </div>
                            <div style={{ width: "14%" }}>
                              <span className="input_qty_pr">
                                <button
                                  type="button"
                                  onClick={() =>
                                    decrement(item.quantity, index)
                                  }
                                >
                                  -
                                </button>
                                <input type="text" value={item.quantity} />
                                <button
                                  type="button"
                                  onClick={() =>
                                    increment(item.quantity, index)
                                  }
                                >
                                  +
                                </button>
                              </span>
                            </div>
                            <div style={{ width: "15%" }} class="a-center">
                              <span class="item-price">
                                <span class="price">
                                  {formatter.format(
                                    item.product.price * item.quantity
                                  )}{" "}
                                  đ
                                </span>
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
                      ))}

                      <table class="shopping-cart-table-total mb-0">
                        <tfoot>
                          <tr>
                            <td colspan="20" class="a-right">
                              <span>Tổng tiền:</span>
                            </td>
                            <td class="a-right">
                              <strong>
                                <span class="totals_price price">
                                  {formatter.format(total)} đ
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
