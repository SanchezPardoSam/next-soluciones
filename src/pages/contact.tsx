import React from "react";

export interface IContactPageProps {}

const ContactPage: React.FunctionComponent<IContactPageProps> = (props) => {
  return (
    <div className="container__form">
      <div className="form">
        <h2>Contactanos</h2>
        <div className="mb-3 row">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Nombre"
            />
          </div>

          <div className="mb-3 row">
            <div className="mb-3">
              <label className="form-label">Apellidos</label>
              <input
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Apellidos"
              />
            </div>
          </div>
        </div>

        <div className="mb-3 ">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={4}
          ></textarea>
        </div>
        <div className="container__button">
          <button type="button" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
