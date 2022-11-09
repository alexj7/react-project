import { useState } from "react";
import { Link, useLocation } from "wouter";

import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

const POPULAR_GIFS = ["Gatos", "Anime", "Tecnologia"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [, setLocation] = useLocation();

  const { loader, gifs } = useGifs();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(`search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search gifs here..."
          value={keyword}
          onChange={handleChange}
        />
      </form>

      <h3>Ultima Busqueda</h3>
      {loader ? <i>Cargando...</i> : <ListOfGifs list={gifs} />}

      <h3>Los gifs mas populares</h3>
      {POPULAR_GIFS.map((gif) => (
        <Link to={`/search/${gif}`}> Gif de {gif} </Link>
      ))}
    </>
  );
}
