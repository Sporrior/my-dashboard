const API_URL = "https://api.coincap.io/v2/assets";

const fetchCryptos = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const filteredData = data.data.map((crypto) => ({
      rank: crypto.rank,
      name: crypto.name,
      symbol: crypto.symbol,
      priceUsd: crypto.priceUsd,
      marketCapUsd: crypto.marketCapUsd,
    }));
    return filteredData.slice(0, 100);
  } catch (error) {
    console.error("Fetching error: ", error);
    return [];
  }
};

export { fetchCryptos };
