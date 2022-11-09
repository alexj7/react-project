import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const {loader, gifs} = useGifs({ keyword });

  return <>{loader ? <i>Cargando...</i> : <ListOfGifs list={gifs} />}</>;
}
