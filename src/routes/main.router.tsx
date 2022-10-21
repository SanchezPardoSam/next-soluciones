import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import LoginPage from "../pages/login";
import ProductsPage from "../pages/products";
import { ModulesRoutes } from "./router";

export interface IRouterPageProps {}

const RouterPage: React.FunctionComponent<IRouterPageProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ModulesRoutes.PRODUCTS}
          element={<ProductsPage></ProductsPage>}
        />
        <Route path={ModulesRoutes.ABOUT} element={<AboutPage></AboutPage>} />
        <Route
          path={ModulesRoutes.CONTACT}
          element={<ContactPage></ContactPage>}
        />
        <Route path={ModulesRoutes.LOGIN} element={<LoginPage></LoginPage>} />
        <Route path="*" element={<>404 Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
