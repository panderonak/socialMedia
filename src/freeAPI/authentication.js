import axios from "axios";

export class AuthService {
  constructor() {
    this.method = "POST";
    this.URL = "https://example.com/users";
    this.headers = {
      accept: "application/json",
      "content-type": "application/json",
    };
  }

  async createAccount({ email, password, username, role = "ADMIN" }) {
    const options = {
      method: this.method,
      url: `${this.URL}/register`,
      headers: this.headers,
      data: {
        email: email,
        password: password,
        role: role,
        username: username,
      },
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
      if (data) {
        return this.loginUser({ username, password });
      } else {
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async loginUser({ username, password }) {
    const options = {
      method: this.method,
      url: `${this.URL}/login`,
      headers: this.headers,
      data: { password: password, username: username },
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async logoutUser() {
    const options = {
      method: this.method,
      url: `${this.URL}/logout`,
      headers: { accept: "application/json" },
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

const authService = new AuthService();

export default authService;
