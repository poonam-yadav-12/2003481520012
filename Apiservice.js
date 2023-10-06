// ApiService.js
const apiUrl = "http://localhost:8008/numbers";

export const fetchNumbers = async (urls) => {
  try {
    const response = await fetch(`${apiUrl}?url=${urls.join('&url=')}`);
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data = await response.json();
    return data.numbers;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
