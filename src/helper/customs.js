import auth from "./auth";

const getHeader = () => {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: auth.getHeaderToken(),
  };
  return header;
};

const createPostJSON = (data) => {
  const lbc = {
    method: "POST",
    headers: getHeader(),
    withCredentials: true,
    crossdomain: true,
    body: JSON.stringify(data),
  };
  return lbc;
};

const createPutJSON = (data) => {
  const lbc = {
    method: "PUT",
    headers: getHeader(),
    withCredentials: true,
    crossdomain: true,
    body: JSON.stringify(data),
  };
  return lbc;
};
const createDELETEJSON = (data) => {
  const lbc = {
    method: "DELETE",
    headers: getHeader(),
    withCredentials: true,
    crossdomain: true,
    body: JSON.stringify(data),
  };
  return lbc;
};

const createGetJSON = () => {
  const lbc = {
    method: "GET",
    headers: getHeader(),
    withCredentials: true,
    crossdomain: true,
  };
  return lbc;
};

export { createGetJSON, createPostJSON, createPutJSON, createDELETEJSON };
