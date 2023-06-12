import { Product } from "../models/product.models";

export const ServiceProduct = async () => {
  var url = "http://localhost:4000/product";

  const rest = await fetch(url, {
    method: "GET",
  });
  const data = await rest.json();
  console.log(data);

  return  data.products as Product[];

};
