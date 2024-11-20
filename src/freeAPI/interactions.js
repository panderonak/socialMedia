import axios from "axios";

export class InteractionsService {
  constructor() {
    this.method = "POST";
    this.URL = "https://api.freeapi.app/api/v1/social-media";
    this.headers = { accept: "application/json" };
  }

  async likeOrUnlikePost({ postId }) {
    const options = {
      method: this.method,
      url: `${this.URL}/like/post/${postId}`,
      headers: this.headers,
    };
    // postId: string
    try {
      const { data } = await axios.request(options);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async likeOrUnlikeComment({ commentId }) {
    const options = {
      method: this.method,
      url: `${this.URL}/like/comment/${commentId}`,
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

  async getPostComments({ page = "1", limit = "5", postId }) {
    const options = {
      method: "GET",
      url: `${this.URL}/comments/post/${postId}`,
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

  async addComment({ postId, comment }) {
    const options = {
      method: this.method,
      url: `${this.URL}/comments/post/${postId}`,
      headers: { ...this.headers, "content-type": "application/json" },
      data: { content: comment },
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteComment({ commentId }) {
    const options = {
      method: "DELETE",
      url: `${this.URL}/comments/${commentId}`,
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

  async updateComment({ commentId, comment }) {
    const options = {
      method: "PATCH",
      url: `${this.URL}/comments/${commentId}`,
      headers: { ...this.headers, "content-type": "application/json" },
      data: { content: comment },
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

const interactionsService = new InteractionsService();

export default interactionsService;
