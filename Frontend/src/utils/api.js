// Example API wrapper using fetch
export async function fetchData(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}