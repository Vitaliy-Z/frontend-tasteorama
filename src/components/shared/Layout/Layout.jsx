import styles from "./Layout.module.css";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { selectAuthIsLoading } from "../../../redux/auth/selectors";

const Layout = ({ children }) => {
  const isUserLoading = useSelector(selectAuthIsLoading);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          {isUserLoading ? (
            <Loader />
          ) : (
            <Suspense fallback={<Loader />}>{children}</Suspense>
          )}
        </div>
      </section>
    </>
  );
};

export default Layout;
