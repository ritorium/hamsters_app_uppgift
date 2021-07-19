import { BASE_URL, HAMSTERS_URL, MATCHES_URL } from "../constants";
import { showErrorMessage } from "../util";

const myHeaders = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json",
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  redirect: "follow",
};

const getDataServer = (url, options,signal) => {
  return fetch(url, options, { signal })
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => showErrorMessage(error));
};

export const getData = async (url, signal) => {
  requestOptions.method = "GET";
  delete requestOptions.body;
  const result = await getDataServer(url, requestOptions, signal);
  return result;
};

export const deleteData = (id, key, signal) => {
  requestOptions.method = "DELETE";
  const url = BASE_URL + key + id;
  const result = getDataServer(url, requestOptions);
  return result;
};

export const addData = (data) => {
  requestOptions.method = "POST";
  requestOptions.body = JSON.stringify(data);
  const url = BASE_URL + HAMSTERS_URL;
  const result = getDataServer(url, requestOptions);
  return result;
};

export const updateDate = (data, id, signal) => {
  requestOptions.method = "PUT";
  requestOptions.body = JSON.stringify(data);
  const url = BASE_URL + HAMSTERS_URL + id;
  const result = getDataServer(url, requestOptions, signal);
  return result;
};

export const addMatches = (data, signal) => {
  requestOptions.method = "POST";
  requestOptions.body = JSON.stringify(data);
  const url = BASE_URL + MATCHES_URL;
  const result = getDataServer(url, requestOptions, signal);
  return result;
};
