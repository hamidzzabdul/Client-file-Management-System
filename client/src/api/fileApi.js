import api from "./axios";
import { getToken } from "../utils/getToken";

const fileApi = {
  create: async (newFile) => {
    const token = getToken();
    if (!token) throw new Error("please Login first");
    const { data } = await api.post("/files/create-file", newFile, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },
  getAll: async () => {
    const { data } = await api.get("/files");
    return data;
  },
};

export default fileApi;
