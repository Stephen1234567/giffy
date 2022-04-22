import { API_KEY, API_URL } from "./setting";

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const gifs2 = data.map((image) => {
      const { images, id, title } = image;
      const { url } = images.downsized_medium;
      return { id, title, url };
    });
    return gifs2;
  }
  return [];
};

export default function getGifs({
  limit = 25,
  keyword = "panda",
  page = 0,
} = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=g&lang=en`;
  return fetch(apiURL)
    .then((resp) => resp.json())
    .then(fromApiResponseToGifs);
}
