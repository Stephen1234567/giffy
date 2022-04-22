import { API_KEY, API_URL } from "./setting";

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export default function getTrendingTerms({ signal }) {
  const apiURL = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=10`;
  return fetch(apiURL, { signal })
    .then((resp) => resp.json())
    .then(fromApiResponseToGifs);
}
