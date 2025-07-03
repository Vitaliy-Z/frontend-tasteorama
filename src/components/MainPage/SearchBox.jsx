import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBox.module.css";

export const SearchBox = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedQuery = searchQuery.trim();

    if (!trimmedQuery) {
      toast.error("Please enter a recipe name.");
      return;
    }

    try {
      const response = await fetch(
        `${
          import.meta.env.API_BASE_URL 
        }/api/recipes?search=${trimmedQuery}` 
      );

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

      if (data.length === 0) {
        toast("No recipes found for your query.");
        onSearch([]);
        return;
      }

      onSearch(data); 
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    }
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