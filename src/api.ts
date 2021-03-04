import axios from "axios";
const API_URL = "https://spring-app-delivery.herokuapp.com";

export function fetchOrdens() {
  return axios(`${API_URL}/ordens`);
}

export function confirmDelivery(ordemId: number) {
  return axios.put(`${API_URL}/ordens/${ordemId}/entregue`);
}
