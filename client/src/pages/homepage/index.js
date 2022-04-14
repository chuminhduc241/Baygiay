import Slide from "components/layout/modules/slide";
import React from "react";
import giay4 from "assets/images/giay4.jpg";
import "./style.scss";
const Homepage = () => {
  return (
    <>
      <Slide />
      <>
        <div className="grid wide">
          <div className="row">
            <div className="col l-4">
              <div className="adv_bottom_inner">
                <div className="img_effect">
                  <img src={giay4} alt />
                </div>
              </div>
            </div>
            <div className="col l-4">
              <div className="adv_bottom_inner">
                <div className="img_effect">
                  <img src={giay4} alt />
                </div>
              </div>
            </div>
            <div className="col l-4">
              <div className="adv_bottom_inner">
                <div className="img_effect">
                  <img src={giay4} alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Homepage;
