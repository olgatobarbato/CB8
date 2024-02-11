const BASE_URL = "https://pokeapi.co/api/v2";

export const HTTP_GET = async (endpoint) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
};
