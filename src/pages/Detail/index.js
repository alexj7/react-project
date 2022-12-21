import Gif from "components/Gif";
import Spinner from "components/Spinner";
import useSingleGif from "hooks/useSingleGif";
import useSeo from "hooks/useSeo";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";

export default function Detail({ params }) {
  const { selectedGif, isLoading, isError } = useSingleGif({ id: params.id });
  const title = selectedGif ? selectedGif.title : "";
  useSeo({ title, description: `Detail of ${title}` });

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    );
  if (isError) return <Redirect to="/404" />;
  if (!selectedGif) return null;

  return (
    <>
      <h3 className="App-title">{selectedGif.title}</h3>
      <Gif {...selectedGif} />
    </>
  );
}
