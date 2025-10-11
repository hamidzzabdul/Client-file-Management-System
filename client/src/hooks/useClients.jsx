// src/hooks/useClients.js
import { useEffect, useState, useCallback } from "react";
import userApi from "../api/userApi";
import formatDate from "../utils/FormatDate";

export default function useClients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchClients = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await userApi.getAll();
      const users = res.data.users;

      const clientList = users.filter(
        (user) => user.role && user.role.toLowerCase() !== "admin"
      );

      const formatted = clientList.map((user, index) => ({
        number: index + 1,
        client: user.name,
        email: user.email,
        date: formatDate(user.createdAt),
        status: "Active",
        _id: user._id,
      }));

      setClients(formatted);
    } catch (err) {
      console.error("Failed to fetch clients:", err);
      setError(err.message || "Failed to load clients");
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteClient = useCallback(async (id) => {
    try {
      await userApi.delete(id);
      setClients((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error("❌ Failed to delete client:", err);
      setError(err.message || "Failed to delete client");
    }
  }, []);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  return { clients, loading, error, fetchClients, deleteClient };
}
