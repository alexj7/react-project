import { useContext } from "react";

import GifsContext from "../context/GifContext";

export default function useGlobalGifs() {
  // return useContext(GifsContext).gifs
  const { gifs } = useContext(GifsContext);
  return gifs;
}
