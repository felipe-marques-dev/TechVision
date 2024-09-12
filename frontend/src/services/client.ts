import axios from "axios";

export const client = axios.create({
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
  withCredentials: true,
  baseURL: "http://localhost:8000"
});
