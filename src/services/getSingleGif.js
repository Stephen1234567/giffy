import { API_KEY, API_URL } from "./setting";

const fromApiResponseToGifs = (apiResponse) => {
  const { data } = apiResponse;
  const { images, id, title } = data;
  const { url } = images.downsized_medium;
  return { id, title, url };
};

export default function getSingleGif({ id }) {
  return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then((resp) => resp.json())
    .then(fromApiResponseToGifs);
}
