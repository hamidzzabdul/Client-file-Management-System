import api from "./axios";

const getToken = () => {
  const storedAuth = localStorage.getItem("auth");
  if (!storedAuth) return null;
  return JSON.parse(storedAuth).token; // only the token string
};

const userApi = {
  getAll: async () => {
    const { data } = await api.get("/users");
    return data;
  },
  create: async (newUser) => {
    const token = getToken();
    if (!token) throw new Error("No token found. Please login first.");
    const { data } = await api.post("/users/create-user", newUser, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  },
  delete: async (id) => {
    const { data } = await api.delete(`/users/${id}`);
    return data;
  },
};

export default userApi;
