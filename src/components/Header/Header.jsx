import { useDispatch, useSelector } from "react-redux";

import { addUser, deleteUser } from "../../redux/userSlice.js";
import { addRecipe, removeRecipe } from "../../redux/recipesSlice.js";

import users from "../../api/mockData/users.json";
import recipes from "../../api/mockData/recipes.json";

const mockRecipe = recipes[0];

const Header = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addUser(users[0]));
  };
  const handleDelete = () => {
    dispatch(deleteUser());
  };

  const handleAddRecipe = () => {
    dispatch(addRecipe(mockRecipe));
  };
  const handleDeleteRecipe = () => {
    dispatch(removeRecipe(mockRecipe._id));
  };

  const user = useSelector((state) => state.user);
  console.log(" user:", user);

  return (
    <header>
      <button type="button" onClick={handleAdd}>
        Add User
      </button>
      <button type="button" onClick={handleDelete}>
        Delete User
      </button>
      <br />
      <br />
      <button type="button" onClick={handleAddRecipe}>
        Add Recipe
      </button>
      <button type="button" onClick={handleDeleteRecipe}>
        Delete Recipe
      </button>
    </header>
  );
};

export default Header;
