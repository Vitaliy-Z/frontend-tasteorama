import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import MyRecipesList from "../../components/MyRecipesList";
import FavoritesList from "../../components/FavoritesList";
import styles from "./ProfilePage.module.css";
import { useState } from "react";

const ProfilePage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>My Profile</h1>

      <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
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
