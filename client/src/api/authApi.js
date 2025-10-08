import api from "./axios";

const authApi = {
  login: async (credentials) => {
    const { data } = await api.post("/users/login", credentials, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Store token and user in localStorage
    if (data?.token) {
      localStorage.setItem(
        "auth",
        JSON.stringify({
          token: data.token,
          user: data.data.user, // adjust if your backend returns differently
        })
      );
    }

    return data;
  },

  logout: async () => {
    localStorage.removeItem("auth"); // remove auth completely
  },

  getToken: () => {
    const storedAuth = localStorage.getItem("auth");
    if (!storedAuth) return null;

    try {
      const parsed = JSON.parse(storedAuth);
      return parsed.token;
    } catch (err) {
      console.error("Failed to parse auth from localStorage:", err);
      return null;
    }
  },

  getUser: () => {
    const storedAuth = localStorage.getItem("auth");
    if (!storedAuth) return null;

    try {
      const parsed = JSON.parse(storedAuth);
      return parsed.user;
    } catch (err) {
      console.error("Failed to parse user from localStorage:", err);
      return null;
    }
  },
};

export default authApi;
