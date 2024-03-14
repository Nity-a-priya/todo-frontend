import axios from "axios";

const getRequest = async (url) => {
  const response = await axios.get(url);
  console.log(response.request.responseURL);
  console.log(response);
  if (response.request.responseURL !== response.config.url) {
    window.location.href = response.request.responseURL;
  } else {
    return response.data;
  }
};

const postReq = async (url, body) => {
  const response = await axios.post(url, body);
  if (response.request.responseURL !== response.config.url) {
    window.location.href = response.request.responseURL;
  } else {
    return response.data;
  }
};

export { getRequest, postReq };
