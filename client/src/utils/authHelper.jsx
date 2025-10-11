// src/utils/auth.js
export const getStoredUser = () => {
  const storedAuth = localStorage.getItem("auth");
  if (!storedAuth) return null;

  try {
    const parsed = JSON.parse(storedAuth);
    return parsed.user || null;
  } catch (err) {
    console.error("Failed to parse user from localStorage", err);
    return null;
  }
};

export const getStoredToken = () => {
  const storedAuth = localStorage.getItem("auth");
  if (!storedAuth) return null;

  try {
    const parsed = JSON.parse(storedAuth);
    return parsed.token || null;
  } catch (err) {
    console.error("Failed to parse token from localStorage", err);
    return null;
  }
};
