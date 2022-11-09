import Gif from "../Gif/Gif";

export default function ListOfGifs({ list }) {
  return (
    <>
      {list.map((singleGif) => (
        <Gif
          key={singleGif.id}
          title={singleGif.title}
          url={singleGif.url}
          id={singleGif.id}
        />
      ))}
    </>
  );
}
