import React, { useState } from "react";
import extreme from "../assets/products/case-extreme.jpg";
import spartan from "../assets/products/case-spartan.jpg";
import blue from "../assets/products/disco-wd-blue.jpg";
import green from "../assets/products/disco-wd-green.jpg";
import adrus from "../assets/products/placa-adrus.png";
import giga from "../assets/products/placa-gigabye.jpg";
import logo from "../assets/logo_shop.png";
import ProductoEditarPage from "../pages/modals/editarProducto";
import ProductoEliminarPage from "../pages/modals/eliminarProducto";
export interface IItemProductPageProps {
  id: string;
  imagen: string;
  nombre: string;
  precio: string;
}

const ItemProductPage: React.FunctionComponent<IItemProductPageProps> = (
  props
) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEliminar, setShowEliminar] = useState(false);
  const handleCloseEliminar = () => setShowEliminar(false);
  const handleShowEliminar = () => setShowEliminar(true);
  return (
    <div className="container__item-product col">
      <div className="item__product-image">
        <img
          className="product__image"
          src={
            props.nombre == "Case gamers Extreme"
              ? extreme
              : props.nombre == "Case gamers Spartan"
              ? spartan
              : props.nombre == "Disco wester blue 500gb"
              ? blue
              : props.nombre == "Disco wester green 500gb"
              ? green
              : props.nombre == "Placa gamers Adrus"
              ? adrus
              : props.nombre == "Placa gamers gigabyte"
              ? giga
              : logo
          }
          alt="product"
        />
      </div>
      <div className="item__product-info">
        <div className="item__product-price">{"s./" + props.precio}</div>
        <div className="item__product-name">{props.nombre}</div>
      </div>
      <div className="controller">
        <button type="button" className="btn btn-primary" onClick={handleShow}>
          o
        </button>
        <ProductoEditarPage
          {...{
            nombre: props.nombre,
            precio: props.precio,
            imagen: props.imagen,
            show,
            handleClose,
          }}
        ></ProductoEditarPage>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleShowEliminar}
        >
          x
        </button>

        <ProductoEliminarPage
          {...{ nombre: props.nombre, showEliminar, handleCloseEliminar }}
        ></ProductoEliminarPage>
      </div>
    </div>
  );
};

export default ItemProductPage;
