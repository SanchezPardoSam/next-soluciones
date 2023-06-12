import React from "react";
import { ModulesRoutes } from "../routes/router";
import { ServiceLogin } from "../services/login.service";

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  const comprobarLogin = async () => {
    console.log(user + "-" + pass);
    const validate = await ServiceLogin(user, pass);
    if (validate?.username) {
      window.location.href = ModulesRoutes.PRODUCTS;
    } else {
      console.log("datos incorrectos");
    }
  };
  return (
    <div className="container__login">
      <div className="login">
        <h1 className="login__title">Login</h1>
        <div className="login__credenciales">
          <input
            className="form-control"
            id="username"
            placeholder="Username"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
          <input
            className="form-control"
            id="password"
            placeholder="Password"
            type="password"
            value={pass}
            onChange={(event) => setPass(event.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={comprobarLogin}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
