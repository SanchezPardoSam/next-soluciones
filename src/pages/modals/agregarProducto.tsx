import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export interface IProducAgregarPageProps {
  show: boolean;
  handleClose: () => void;
}

const ProducAgregarPage: React.FunctionComponent<IProducAgregarPageProps> = (
  props
) => {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control placeholder="producto" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" placeholder="precio" autoFocus />
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

export default ProducAgregarPage;
