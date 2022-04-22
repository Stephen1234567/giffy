import { useContext, useState, useEffect } from "react";
import getGifs from "services/getGifs";
import GifsContext from "context/GifsContext";

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  //const [gifs, setGifs] = useState([]);
  const { gifs, setGifs } = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(
    function () {
      setLoading(true);
      //recuperamos la keyword del localStorage

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        //guardamos la keyword en el localStorage
        localStorage.setItem("lastKeyword", keywordToUse);
      });
    },
    [keyword, keywordToUse, setGifs]
  );

  useEffect(
    function () {
      setLoadingNextPage(true);
      if (page === INITIAL_PAGE) return;
      getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      });
    },
    [keywordToUse, page, setGifs]
  );
  return { loading, loadingNextPage, gifs, setPage };
}
