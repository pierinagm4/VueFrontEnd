import http from "../http-common";
class DataService {
  getAll() {
    return http.get("/tickets");
  }
  get(id) {
    return http.get(`/tickets/${id}`);
  }
  findByFilters(origin,destiny,departure_date,return_date) {
    return http.get(`/tickets?origin=${origin}&destiny=${destiny}
                            &departure_date=${departure_date}&return_date=${return_date}`);
  }
}
export default new DataService();