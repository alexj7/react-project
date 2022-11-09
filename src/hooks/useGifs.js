import { useState, useEffect } from "react";

import getGifs from "../services/getGifs";

export function useGifs({ keyword } = { keyword: null }) {
  const [loader, setLoader] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      setLoader(true);

      const search_keyword = keyword || localStorage.getItem('lastKeyword') || 'Random'

      getGifs({ keyword: search_keyword }).then((gifs) => {
        setGifs(gifs);
        setLoader(false);
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword]
  );

  return { loader, gifs };
}
