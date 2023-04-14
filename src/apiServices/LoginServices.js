import axios from "axios";

const API_URL = "http://localhost:8080/sneakers";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "/login", { user })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("login", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }
}