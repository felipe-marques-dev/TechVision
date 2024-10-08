import axios from "axios";


const getCookie = (name) => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Verifica se o cookie começa com o nome do token
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
};

const csrftoken = getCookie('csrftoken');
axios.defaults.headers.common['X-CSRFToken'] = csrftoken;


export const client = axios.create({
  headers: {
    'X-CSRFToken': csrftoken,
    'Access-Control-Allow-Origin': '*'
  },
  withCredentials: true,
  baseURL: "http://localhost:8000"
});
