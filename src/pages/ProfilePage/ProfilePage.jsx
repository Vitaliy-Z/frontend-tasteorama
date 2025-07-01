import { useParams, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import MyRecipesList from "../../components/MyRecipesList";
import FavoritesList from "../../components/FavoritesList";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  const { recipeType } = useParams();
  const navigate = useNavigate();

  const selectedIndex = recipeType === "favorites" ? 1 : 0;

  const handleSelect = (index) => {
    navigate(index === 0 ? "/profile/own" : "/profile/favorites");
  };

  return (
    <main className={styles.container}>
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

        <TabPanel>
          <MyRecipesList />
        </TabPanel>
        <TabPanel>
          <FavoritesList />
        </TabPanel>
      </Tabs>
    </main>
  );
};

export default ProfilePage;
