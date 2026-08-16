export async function loadBooks(query, locale) {
  console.log(locale);

  const response = await fetch(
    `http://localhost:8080/api/search?query=${encodeURIComponent(query)}`,
    {
      headers: {
        "Accept-Language": locale,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
