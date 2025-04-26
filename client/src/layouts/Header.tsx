import styles from "./styles/Header.module.css";
import logo from "../assets/images/signupLogo.svg";
import searchIcon from "../assets/images/searchIcon.svg";
import menuIcon from "../assets/images/menuIcon.svg";
import micIcon from "../assets/images/micIcon.svg";
import notificationIcon from "../assets/images/notificationIcon.svg";
import userIcon from "../assets/images/userIcon.svg";

const Header = () => {
  const navData = [
    { name: "Home" },
    { name: "Movies" },
    { name: "TV Shows" },
    { name: "News/Upcoming" },
    { name: "My List" },
    { name: "Browse by language" },
    { name: "Speedo Tube" },
  ];
  return (
    <header className={styles.main_container}>
      <div className={styles.main_container__border}></div>
      <section className={styles.left_section}>
        <div className={styles.left_section__logo}>
          <img src={logo} alt="signup" loading="lazy" decoding="async" />
        </div>
        <div className={styles.left_section__nav_items}>
          {navData.map((data) => {
            return <span>{data.name}</span>;
          })}
        </div>
      </section>
      <section className={styles.right_section}>
        <span className={styles.search}>
          <img src={searchIcon} alt="search" />
        </span>
        <span className={styles.menu__vertical_line}>
          <img src={menuIcon} alt="menu" />
        </span>
        <span className={styles.mic}>
          <img src={micIcon} alt="mic" />
        </span>
        <span className={styles.notification}>
          <img src={notificationIcon} alt="notification" />
        </span>
        <div className={styles.right_section__user_icon}>
          <span>
            <img src={userIcon} alt="user" />
          </span>
          <span>▼</span>
        </div>
      </section>
    </header>
  );
};

export default Header;
