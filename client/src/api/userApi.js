import api from "./axios";

const userApi = {
  getAll: async () => {
    const { data } = await api.get("/users");
    return data;
  },
  create: async (newUser) => {
    const { data } = await api.post("/users", newUser);
    return data;
  },
  delete: async (id) => {
    const { data } = await api.delete(`/users/${id}`);
    return data;
  },
};

export default userApi;
