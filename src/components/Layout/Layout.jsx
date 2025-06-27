import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default Layout;
