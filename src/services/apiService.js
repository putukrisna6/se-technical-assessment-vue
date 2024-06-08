import axios from "axios";

const apiService = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const api = {
  async getFeedbacks() {
    try {
      const response = await apiService.get("/feedbacks");
      return response.data;
    } catch (error) {
      return { error: true, message: error.message };
    }
  },
  async postFeedback(data) {
    try {
      const response = await apiService.post("/feedbacks", data);
      return response.data;
    } catch (error) {
      return { error: true, message: error.message };
    }
  }
};

export default api;
