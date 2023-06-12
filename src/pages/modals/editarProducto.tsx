import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export interface IProductoEditarPageProps {
  nombre: string;
  precio: string;
  imagen: string;
  show: boolean;
  handleClose: () => void;
}

const ProductoEditarPage: React.FunctionComponent<IProductoEditarPageProps> = (
  props
) => {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                placeholder="producto"
                autoFocus
                value={props.nombre}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="precio"
                autoFocus
                value={props.precio}
              />
            </Form.Group>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              
            ></input>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductoEditarPage;
