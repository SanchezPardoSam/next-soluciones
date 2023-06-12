import { IAboutPageProps } from "../pages/about";


export const ServiceAbout = async () => {
  var url = "http://localhost:4000/info";

  const rest = await fetch(url, {
    method: "GET",    
  });
  const data = await rest.json();
  console.log(data);
  return data as IAboutPageProps;
};
