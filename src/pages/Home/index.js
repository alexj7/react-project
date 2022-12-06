import { useLocation } from "wouter";

import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import Trending from "components/Trending";
import SearchForm from "components/SearchForm";

export default function Home() {
  const [_, pushLocation] = useLocation();
  const { loader, gifs } = useGifs();

  const handleSubmit = ({ keyword }) => {
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <Trending />
        </div>
      </div>
    </>
  );
}
