import useGlobalGifs from "../../hooks/useGlobalGif";
import Gif from "../../components/Gif/Gif";

export default function Detail({ params }) {
  const gifs = useGlobalGifs();
  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  return <Gif {...gif} />;
}
