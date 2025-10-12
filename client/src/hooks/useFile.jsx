import { useEffect, useState, useCallback } from "react";
import fileApi from "../api/fileApi";
import formatDate from "../utils/FormatDate";

export default function useFiles() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFiles = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fileApi.getAll();
      const fetchedFiles = res.data.files;

      const formatted = fetchedFiles.map((file, index) => ({
        number: index + 1,
        title: file.name,
        description: file.description || "—",
        date: formatDate(file.createdAt),
        type: file.type,
        size: `${(file.size / 1024).toFixed(2)} KB`,
        url: file.url,
        uploadedBy: file.uploadedBy?.name || "Unknown",
        _id: file._id,
      }));

      setFiles(formatted);
    } catch (err) {
      console.error("Failed to fetch files:", err);
      setError(err.message || "Failed to load files");
    } finally {
      setLoading(false);
    }
  }, []);

  // const deleteClient = useCallback(async (id) => {
  //   try {
  //     await fileApi.delete(id);
  //     setFiles((prev) => prev.filter((c) => c._id !== id));
  //   } catch (err) {
  //     console.error("❌ Failed to delete client:", err);
  //     setError(err.message || "Failed to delete client");
  //   }
  // }, []);

  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  return { files, loading, error, fetchFiles };
}
