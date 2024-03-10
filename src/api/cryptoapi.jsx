const API_URL = "https://api.coincap.io/v2/assets";

export const fetchCryptos = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Fetching error: ", error);
    return [];
  }
};
