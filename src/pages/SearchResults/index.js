import React, { useEffect, useRef, useCallback } from "react";
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import useSeo from "hooks/useSeo";
import { Helmet } from "react-helmet";
import SearchForm from "components/SearchForm";

export default function SearchResults({ params }) {
  const { keyword, rating = "g" } = params;
  const { loading, gifs, setPage } = useGifs({ keyword, rating });
  const visorRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: !loading && visorRef,
    once: false,
  });

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : "";
  useSeo({ title });

  const debounceNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 2000),
    [setPage]
  );

  useEffect(function () {
    console.log({ keyword });
    // if (isNearScreen) setPage(prevPage => prevPage + 1)
    if (isNearScreen) debounceNextPage();
  });

  return (
    <>
      <Helmet>
        <title>{title}| Giffy</title>
      </Helmet>
      <SearchForm initialKeyword={keyword} initialRating={rating} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div data-testid="visor" ref={visorRef} />
        </>
      )}
    </>
  );
}
