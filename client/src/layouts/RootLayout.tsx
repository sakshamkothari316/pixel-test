import styles from "./styles/RootLayout.module.css";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className={styles.root_container}>
      <Outlet />
    </div>
  );
};

export default RootLayout;
