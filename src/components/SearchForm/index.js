import { useState } from "react";

export default function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const _onSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ keyword });
  };

  return (
    <form onSubmit={_onSubmit}>
      <button>Buscar</button>
      <input
        placeholder="Search a gif here..."
        onChange={handleChange}
        type="text"
        value={keyword}
      />
    </form>
  );
}
