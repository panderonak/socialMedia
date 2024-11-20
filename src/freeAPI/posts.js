import axios from "axios";

export class PostsService {
  constructor() {
    this.method = "GET";
    this.URL = "https://api.freeapi.app/api/v1/social-media/posts";
    this.headers = { accept: "application/json" };
  }

  async getAllPosts({ page = "1", limit = "10" }) {
    const options = {
      method: this.method,
      url: this.URL,
      params: { page: page, limit: limit },
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

  async createAPost({ content, images = [], tags = [] }) {
    const formData = new FormData();
    formData.append("content", content);
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });

    tags.forEach((tag, ind) => {
      formData.append(`tag[${ind}]`, tag);
    });

    const options = {
      method: "POST",
      url: this.URL,
      headers: { ...this.headers, "content-type": "multipart/form-data" },
      data: formData,
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getPostById({ postId }) {
    const options = {
      method: this.method,
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

  async deleteAPost({ postId }) {
    const options = {
      method: "DELETE",
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

  async updatePost({ postId, content, images = [], tags = [] }) {
    const formData = new FormData();
    formData.append("content", content);
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });
    // Upto 6 total images are allowed per post
    tags.forEach((tag, ind) => {
      formData.append(`tag[${ind}]`, tag);
    });

    const options = {
      method: "PATCH",
      url: `${this.URL}/${postId}`,
      headers: { ...this.headers, "content-type": "multipart/form-data" },
      data: formData,
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getMyPosts({ page = "1", limit = "10" }) {
    const options = {
      method: this.method,
      url: `${this.URL}/get/my`,
      params: { page: page, limit: limit },
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

  async getPostsByUsername({ page = "1", limit = "3", username }) {
    const options = {
      method: this.method,
      url: `${this.URL}/get/u/${username}`,
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

  async getPostsByTag({ page = "1", limit = "3", tag }) {
    const options = {
      method: this.method,
      url: `${this.URL}/get/t/${tag}`,
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

  async removePostImage({ postId, imageId }) {
    const options = {
      method: "PATCH",
      url: `${this.URL}/remove/image/${postId}/${imageId}`,
      headers: this.headers,
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}

const postsService = new PostsService();
export default postsService;
