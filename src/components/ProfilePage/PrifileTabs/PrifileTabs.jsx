import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useSelector } from "react-redux";
import { selectRecipesItems } from "../../../redux/recipes/selectors";

import MyRecipesList from "../MyRecipesList/MyRecipesList.jsx";
import FavoritesList from "../FavoritesList/FavoritesList.jsx";
import Filters from "../../MainPage/Filters/Filters.jsx";

import styles from "./ProfileTabs.module.css";

const PrifileTabs = () => {
  const { recipeType } = useParams();
  const navigate = useNavigate();
  const tabRoutes = ["own", "favorites"];
  const selectedIndex = tabRoutes.indexOf(recipeType);
  const recipes = useSelector(selectRecipesItems);

  const handleSelect = (index) => {
    navigate(`/profile/${tabRoutes[index]}`);
  };

  if (!tabRoutes.includes(recipeType))
    return <Navigate to={`/profile/${tabRoutes[0]}`} replace />;

  return (
    <>
      <h1 className={styles.title}>My Profile</h1>
      <Tabs selectedIndex={selectedIndex} onSelect={handleSelect}>
        <TabList className={styles.tabList}>
          <Tab className={styles.tab} selectedClassName={styles.selectedTab}>
            My Recipes
          </Tab>
          <Tab className={styles.tab} selectedClassName={styles.selectedTab}>
            Saved Recipes
          </Tab>
        </TabList>
        <div className={styles.profileTopBar}>
          <div className={styles.recipesCount}>{recipes.length} recipes</div>
          <div className={styles.filtersWrapper}>
            <Filters hideTitle />
          </div>
        </div>
        <TabPanel>
          <MyRecipesList />
        </TabPanel>
        <TabPanel>
          <FavoritesList />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default PrifileTabs;
