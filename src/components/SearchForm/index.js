import { useState, memo, useReducer } from "react";
import { useLocation } from "wouter";

const RATINGS = ["g", "pg", "pg-13", "r"];

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1,
      };
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
};

function SearchForm({ initialKeyword = "", initalRating = RATINGS[0] }) {
  // const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword));
  // const [times, setTimes] = useState(0);
  // const [rating, setRating] = useState(initalRating);
  const [_, pushLocation] = useLocation();

  const [{ keyword, rating }, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initalRating,
    times: 0,
  });

  const handleChange = (evt) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChangeRating = (evt) => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: evt.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Buscar</button>
      <input
        placeholder="Search a gif here..."
        onChange={handleChange}
        type="text"
        value={keyword}
      />
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating Type</option>
        {RATINGS.map((rate) => (
          <option key={rate}>{rate}</option>
        ))}
      </select>
    </form>
  );
}

export default memo(SearchForm);
