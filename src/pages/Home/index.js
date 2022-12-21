import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import Trending from "components/Trending";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
  const { loader, gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <SearchForm />
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
