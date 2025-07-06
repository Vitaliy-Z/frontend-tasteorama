import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBox.module.css";

export const SearchBox = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedQuery = searchQuery.trim();

    if (!trimmedQuery) {
      toast.error("Please enter a recipe name.");
      return;
    }

    onSearch(trimmedQuery); 
  };

  return (
    <div className={css.area}>
      <h1 className={css.title}>
        Plan, Cook, and<br />
        Share Your Flavors
      </h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          placeholder="Search recipes"
          value={searchQuery}
          onChange={handleChange}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;