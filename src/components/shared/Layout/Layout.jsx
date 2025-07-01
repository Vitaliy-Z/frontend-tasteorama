import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>{children}</div>
      </section>
    </main>
  );
};

export default Layout;
