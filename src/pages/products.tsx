import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ItemProductPage from "../components/itemProduct";
import { Product } from "../models/product.models";
import { ServiceProduct } from "../services/product.service";
import ProducAgregarPage from "./modals/agregarProducto";

export interface IProductsPageProps {}

const ProductsPage: React.FunctionComponent<IProductsPageProps> = (props) => {
  const [product, setProduct] = React.useState<Product[]>();

  const obtenerProduct = async () => {
    const consult = await ServiceProduct();
    setProduct(consult);
  };
  useEffect(() => {
    obtenerProduct();
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container__products row row-cols-2 row-cols-lg-5 ">
      <Button variant="primary" onClick={handleShow}>
        Agregar
      </Button>
    <ProducAgregarPage {...{show, handleClose}}></ProducAgregarPage>
      
      <div className="container__product-item">
        {product?.map((pro) => {
          return <ItemProductPage {...pro}></ItemProductPage>;
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
