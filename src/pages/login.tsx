import React from "react";

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  return (
    <div className="container__login">
      <div className="login">
        <h1 className="login__title">Login</h1>
        <div className="login__credenciales">
          <input
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Username"
          />
          <input
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Password"
          />
        </div>
        <button type="button" className="btn btn-primary">
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
