import React from "react";
import "./PricingSection.css";
import check from "../assets/Check.png";
import info from "../assets/Info.png";
import info_w from "../assets/Info_w.png";

const PricingSection = () => {
  return (
    <div class="pricingSection mt-lg-5 container d-flex justify-content-center align-items-center">
      <div class="row w-100">
        <div class="col col-12 col-md-6 col-lg-4 my-3 d-flex align-items-center justify-content-center">
          <div className="firstPriceCard w-100 px-4 py-5 d-flex flex-column">
            <span className="preHeader">FOR YOU TO START</span>
            <div className="my-2 d-flex justify-content-between align-items-center">
              <h1 className="cardHeading">Essentials</h1>
              <span className="cardHeading">₹ 199/mo </span>
            </div>
            <button className="mt-3">Subscribe now</button>
            <div style={{ border: "1px solid #E2E8F0" }} className="my-4"></div>
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <i>
                    <img src={check} alt="" />
                  </i>
                  <p className="ms-2">Up to 3 users</p>
                </div>
                <i>
                  <img src={info} alt="" />
                </i>
              </div>

              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <i>
                    <img src={check} alt="" />
                  </i>
                  <p className="ms-2">Self service</p>
                </div>
                <i>
                  <img src={info} alt="" />
                </i>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-12 col-md-6 col-lg-4 my-3 d-flex align-items-center justify-content-center">
          <div
            className="secondPriceCard w-100 px-4 py-5 d-flex flex-column"
            style={{ color: "#fff" }}
          >
            <div className="tag">
              <span className="d-flex justify-content-center align-items-center">
                <i>
                MORE ADVANTAGEOUS
                </i>
                </span>
            </div>
            <span className="preHeader">FOR YOU TO TAKE OFF</span>
            <div className="my-2 d-flex justify-content-between align-items-center">
              <h1 className="cardHeading">Ultimate</h1>
              <span className="cardHeading">₹ 299/mo </span>
            </div>
            <button className="mt-3">Subscribe now</button>
            <div style={{ border: "1px solid #334155" }} className="my-4"></div>
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <i>
                    <img src={check} alt="" />
                  </i>
                  <p className="ms-2">Unlimited users</p>
                </div>
                <i>
                  <img src={info_w} alt="" />
                </i>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <i>
                    <img src={check} alt="" />
                  </i>
                  <p className="ms-2">24/7 support</p>
                </div>
                <i>
                  <img src={info_w} alt="" />
                </i>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <i>
                    <img src={check} alt="" />
                  </i>
                  <p className="ms-2">Dedicated CSM</p>
                </div>
                <i>
                  <img src={info_w} alt="" />
                </i>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <i>
                    <img src={check} alt="" />
                  </i>
                  <p className="ms-2">Trainings</p>
                </div>
                <i>
                  <img src={info_w} alt="" />
                </i>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-12 col-md-6 col-lg-4 my-3 d-flex align-items-center justify-content-center">
          <div className="thirdPriceCard w-100 px-4 py-5 d-flex flex-column">
            <span className="preHeader">FOR YOUR COMPANY</span>
            <div className="my-2 d-flex justify-content-between align-items-center">
              <h1 className="cardHeading">Entreprise </h1>
              <span className="cardHeading">₹ 369/mo </span>
            </div>
            <button className="mt-3">Talk to us</button>
            <div style={{ border: "1px solid #E2E8F0" }} className="my-4"></div>
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <i>
                  <img src={check} alt="" />
                </i>
                <p className="ms-2 mb-0">
                  Customized plan especially for the needs of your business
                </p>
                {/* <i>
                  <img src={info} alt="" />
                </i> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
