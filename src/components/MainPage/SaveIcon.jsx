import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { RiDeleteBin4Line } from "react-icons/ri";
import css from "./SaveIcon.module.css";

export default function FavoriteBtn({ recipeId, isInitiallyFavorite }) {
  const [isFavorite, setIsFavorite] = useState(isInitiallyFavorite);
  const [loading, setLoading] = useState(false);

  const toggleFavorite = async (e) => {
    try {
      setLoading(true);
      if (isFavorite) {
        console.log("Delete from favorites", recipeId);
      } else {
        console.log("Add to favorites", recipeId);
      }
      setIsFavorite(!isFavorite);
      e.currentTarget.blur();
    } catch (error) {
      console.error("Favorite update error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={`${css.button} ${isFavorite ? css.active : ""}`}
      onClick={toggleFavorite}
      disabled={loading}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? <RiDeleteBin4Line /> : <FaRegBookmark />}
    </button>
  );
}