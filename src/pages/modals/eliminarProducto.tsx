import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export interface IProductoEliminarPageProps {
  nombre: string;
  showEliminar: boolean;
  handleCloseEliminar: () => void;
}

const ProductoEliminarPage: React.FunctionComponent<
  IProductoEliminarPageProps
> = (props) => {
  return (
    <>
      <Modal show={props.showEliminar} onHide={props.handleCloseEliminar}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar producto</Modal.Title>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCloseEliminar}>
            Cerrar
          </Button>
          <Button variant="danger" onClick={props.handleCloseEliminar}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductoEliminarPage;
