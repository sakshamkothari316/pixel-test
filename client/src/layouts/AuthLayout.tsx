import Footer from "./Footer";
import Header from "./Header";
import styles from "./styles/AuthLayout.module.css";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className={styles.main_container}>
      {/* header */}
      <Header />
      {/* main */}
      <main>
        <Outlet />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default AuthLayout;
