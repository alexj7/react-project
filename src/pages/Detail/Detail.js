import { useContext } from "react";
import StaticContext from "../../context/StaticContext";

export default function Detail({ params }) {
  const context = useContext(StaticContext);

  return <h1>{context.name}</h1>;
}
