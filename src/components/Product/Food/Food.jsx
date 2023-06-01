import React from "react";
// import Navbar from "../../Navbar/Navbar";
import ProducFoodmainImg from "../Food/";
import "../ProductsFood/ProductFood.css";
import instagram from "../../../assets/image/inst.svg";
import telegram from "../../../assets/image/telegram.svg";
import facebook from "../../../assets/image/facebook.svg";
import WhatsApp from "../../../assets/image/Wp.svg";

const Food = () => {
  return (
    <>
      <Navbar />
      <div className="product__food_main-container">
        <div className="product__food_img">
          <img src={ProducFoodmainImg} alt="ProducFoodmainImg" />
        </div>
        <div className="product__food-right">
          <div className="product__food_text">
            <h1>Feel the Taste of Kyrgyz Traditional Food</h1>
            <p>
              Indulge in the delectable flavors of Kyrgyz cuisine, a true feast
              for the senses. From the tender Beshbarmak to the savory Manty and
              the comforting Shorpo, Kyrgyz food offers a delightful blend of
              hearty meats, aromatic spices, and fresh herbs. Prepare to savor
              the rich cultural heritage and culinary traditions of this Central
              Asian gem with every bite.
            </p>
          </div>
          <div className="product__food-btn">
            <button>Order Now</button>
          </div>
          <div className="homePage__item-socialIcon">
            <a href="#">
              <img className="social-icon" src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <img className="social-icon" src={telegram} alt="telegram" />
            </a>
            <a href="#">
              <img className="social-icon" src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img className="social-icon" src={WhatsApp} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
      <div className="product__food_card-container">
        <div className="item_filter-btn">
          <button>Meal</button>
          <button>Drinks</button>
          <button>Snacks</button>
        </div>
      </div>
    </>
  );
};

export default Food;