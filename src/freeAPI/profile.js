import axios from "axios";

export class UserProfileManagement {
  constructor() {
    this.method = "GET";
    this.URL = "/api/v1/social-media/profile";
    this.headers = { accept: "application/json" };
  }

  async getMyProfile() {
    const options = {
      method: this.method,
      url: this.URL,
      headers: this.headers,
    };
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.request(options);
      console.log(data);
      console.log(data.data.firstName);
      console.log(data.success);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async updateAvatar({ avatar }) {
    const formData = new FormData();
    formData.append("avatar", avatar);

    const options = {
      method: "PATCH",
      url: `${this.URL}/users/avatar`,
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

  async updateUserProfile({
    bio,
    countryCode,
    dob,
    firstName,
    lastName,
    location,
    phoneNumber,
  }) {
    const options = {
      method: "PATCH",
      url: this.URL,
      headers: {
        ...this.headers,
        "content-type": "application/json",
      },
      data: {
        bio,
        countryCode,
        dob,
        firstName,
        lastName,
        location,
        phoneNumber,
      },
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getProfileByUsername(username) {
    const options = {
      method: this.method,
      url: `${this.URL}/u/${username}`,
      headers: this.headers,
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async updateCoverImage({ coverImage }) {
    const formData = new FormData();
    formData.append("coverImage", coverImage);
    const options = {
      method: "PATCH",
      url: `${this.URL}/cover-image`,
      headers: {
        ...this.headers,
        "content-type": "multipart/form-data",
      },
      data: formData,
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}

const userProfileManagement = new UserProfileManagement();

export default userProfileManagement;
