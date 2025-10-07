import api from "./axios";

const authApi = {
  login: async (credentials) => {
    const { data } = await api.post("/users/login", credentials, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("token", data.token);
    return data;
  },
  logout: async () => {
    localStorage.removeItem("token");
  },
};

export default authApi;
