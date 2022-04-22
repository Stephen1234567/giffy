import { useCallback } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import Category from "components/Category/index.js";
import { useGifs } from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches/index";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";
const POPULAR_GIFS = ["Matrix", "Ecuador", "Chile", "Colombia"];

export default function Home({ params }) {
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      //navegar a otra ruta
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <SearchForm onSubmit={handleSubmit} />
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <Category name="Categorias populares" options={POPULAR_GIFS} />
          <Category name="Mascotas" options={["Perros", "Gatos", "Hamster"]} />
        </div>
      </div>
    </>
  );
}
