import React, { useCallback, useEffect, useRef } from "react";
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import useNearScreen from "hooks/useNearScreen";

import { useGifs } from "hooks/useGifs";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { show } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });
  const title = gifs ? `${gifs.length} resultados de ${keyword}` : "";

  //const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(
    function () {
      if (show) debounceHandleNextPage();
    },
    [show, debounceHandleNextPage]
  );

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>${title} | Giffy</title>
            <meta name="description" content={title} />
            <meta name="rating" content="General" />
          </Helmet>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </>
  );
}
