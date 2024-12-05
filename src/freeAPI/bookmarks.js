import axios from "axios";

export class BookmarksService {
  constructor() {
    this.method = "GET";
    this.URL = "/api/v1/social-media/bookmarks";
    this.headers = { accept: "application/json" };
  }

  async getBookmarkedPosts({ page, limit }) {
    const options = {
      method: this.method,
      url: this.URL,
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

  async addOrRemoveBookmark({ postId }) {
    const options = {
      method: "POST",
      url: `${this.URL}/${postId}`,
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

const bookmarksService = new BookmarksService();

export default bookmarksService;
