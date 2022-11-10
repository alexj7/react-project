import { Link } from "wouter";
import "./Gif.css";

export default function Gif({ title, url, id }) {
  return (
    <Link to={`/detail/${id}`} className="Gif">
      <h4> {title} </h4>
      <img src={url} alt={id} />
    </Link>
  );
}
