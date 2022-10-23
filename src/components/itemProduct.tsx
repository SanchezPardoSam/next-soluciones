import React from "react";
import img from "../assets/logo_shop.png";
export interface IItemProductPageProps {}

const ItemProductPage: React.FunctionComponent<IItemProductPageProps> = (
  props
) => {
  return (
    <div className="container__item-product col">
      <div className="item__product-image">
        <img className="product__image" src={img} alt="product" />
      </div>
      <div className="item__product-info">
        <div className="item__product-price">s/. 200</div>
        <div className="item__product-name">procesador ryzen 7 serie 6000</div>
      </div>
    </div>
  );
};

export default ItemProductPage;
