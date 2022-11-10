import { useState, useEffect, useContext } from "react";

import getGifs from "../services/getGifs";
import GifsContext from "../context/GifContext";

export function useGifs({ keyword } = { keyword: null }) {
  const [loader, setLoader] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(
    function () {
      setLoader(true);

      const search_keyword =
        keyword || localStorage.getItem("lastKeyword") || "Random";

      getGifs({ keyword: search_keyword }).then((gifs) => {
        setGifs(gifs);
        setLoader(false);
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, setGifs]
  );

  return { loader, gifs };
}
