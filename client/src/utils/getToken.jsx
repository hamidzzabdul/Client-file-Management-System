export const getToken = () => {
  const storedAuth = localStorage.getItem("auth");
  if (!storedAuth) return null;
  return JSON.parse(storedAuth).token; // only the token string
};
