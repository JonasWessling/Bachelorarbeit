export async function loadBooks(query) {
  const response = await fetch(
    `http://localhost:8080/api/search?query=${encodeURIComponent(query)}`,
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
