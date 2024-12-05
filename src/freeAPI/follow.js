import axios from "axios";

export class FollowService {
  constructor() {
    this.method = "GET";
    this.URL = "/api/v1/social-media/follow";
    this.headers = { accept: "application/json" };
  }

  async getUserFollowersList({ username, page = "1", limit = "5" }) {
    const options = {
      method: this.method,
      url: `${this.URL}/list/followers/${username}`,
      params: { page, limit },
      headers: this.headers,
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getUserFollowingToList({ username, page = "1", limit = "5" }) {
    const options = {
      method: this.method,
      url: `${this.URL}/list/following/${username}`,
      params: { page, limit },
      headers: this.headers,
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async followOrUnfollowUser({ toBeFollowedUserId }) {
    const options = {
      method: "POST",
      url: `${this.URL}/${toBeFollowedUserId}`,
      headers: this.headers,
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

const followService = new FollowService();

export default followService;
