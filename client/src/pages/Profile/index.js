import React from "react";
import TableCart from "./TableCart";
const Profile = () => {
  return (
    <section className="page_customer_account">
      <div className="grid wide">
        <div className="row">
          <div className="col l-9">
            <h1 className="title-head">
              <a href="/">Trang khách hàng</a>
            </h1>
            <p className="name-account">
              <strong>
                Xin chào,
                <a href="/">Tuyền Lê khách hàng VIP</a>
                &nbsp;!
              </strong>
            </p>
            <div className="table-cart">
              <TableCart />
            </div>
          </div>
          <div className="col l-3">
            <div className="block-account">
              <div className="block-title-account">
                <h5>Tài khoản của tôi</h5>
              </div>
              <div className="block-content">
                <p>
                  Tên tài khoản: <strong>Tuyền Lê</strong>
                </p>
                <p>Địa chỉ: </p>
                <p>Điện thoại: </p>
                <p>Email: </p>
                <p>
                  <a href="/">Sửa thông tin</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
