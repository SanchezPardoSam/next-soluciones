import { user } from "../models/user.models";

export const ServiceLogin = async (nombre: string, password: string) => {
  var url = "http://localhost:4000/user";

  const rest = await fetch(url, {
    method: "GET",
  });
  const data = await rest.json();
  console.log(data);

  const listUse =  data.users as user[];

  console.log("hello" + listUse);
  const result = listUse.find(
    (user) => user.username === nombre && user.password === password
  );
  console.log(result);
  return result;
};
