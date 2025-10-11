export default function formatDate(dateString) {
  if (!dateString) return "N/A";

  const date = new Date(dateString);

  // Options for a clean readable format
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  return date.toLocaleDateString("en-US", options);
}
