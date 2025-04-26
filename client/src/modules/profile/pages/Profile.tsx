import styles from "../styles/Profile.module.css";
import tilesIcon from "../../../assets/images/tilesIcon.svg";
import devicesIcon from "../../../assets/images/devicesIcon.svg";
import settingsIcon from "../../../assets/images/settingsIcon.svg";
import userLogo from "../../../assets/images/userLogo.svg";
import phoneIcon from "../../../assets/images/phoneIcon.svg";
import addIcon from "../../../assets/images/addIcon.svg";
import userIcon from "../../../assets/images/userIcon.svg";
import rightArrow from "../../../assets/images/rightArrow.svg";
import IconButton from "../../../components/form/IconButton";

const Profile = () => {
  const sidebarData = [
    { name: "Membership", icon: tilesIcon },
    { name: "Devices", icon: devicesIcon },
    { name: "Settings", icon: settingsIcon },
    { name: "Profile", icon: userLogo },
  ];
  return (
    <div className={styles.main_container}>
      <p className={styles.profile_path}>Account</p>
      <div className={styles.profile_wrapper}>
        <section className={styles.profile__left_section}>
          {sidebarData.map((data, idx) => (
            <div className={styles.left_section__item} key={idx}>
              <span>
                <img src={data.icon} alt={data.name} />
              </span>
              <p>{data.name}</p>
            </div>
          ))}
        </section>
        <section className={styles.profile__right_section}>
          <div className={styles.right_section__log_contact}>
            <span className={styles.log_contact__phone_icon}>
              <img src={phoneIcon} alt="phone" />
            </span>
            <div className={styles.log_contact__details}>
              <p>Logged with</p>
              <p>8699780274</p>
            </div>
          </div>
          <div className={styles.right_section__manage_profiles}>
            <div className={`${styles.manage_profiles__header} `}>
              <p>Manage Profiles</p>
              <IconButton
                iconUrl={addIcon}
                value="Add New Profile"
                className="secondary_btn"
              />
              <div className={`${styles.manage_profiles__header_icon}`}>
                <IconButton iconUrl={addIcon} className="secondary_btn" />
              </div>
            </div>
            <div className={styles.manage_profiles__main}>
              <div className={styles.main__item}>
                <div className={styles.item__left}>
                  <span className={styles.left__user}>
                    <img src={userIcon} alt="user" />
                  </span>
                  <p>Profile Name</p>
                </div>
                <div className={styles.item__right}>
                  <span className={styles.right__your_profile}>
                    Your Profile
                  </span>
                  <span className={styles.right__arrow}>
                    <img src={rightArrow} alt="rightArrow" />
                  </span>
                </div>
              </div>
              <div className={styles.main__item}>
                <div className={styles.item__left}>
                  <span className={styles.left__user}>
                    <img src={userIcon} alt="user" />
                  </span>
                  <p>Profile Name</p>
                </div>
                <div className={styles.item__right}>
                  <span className={styles.right__arrow}>
                    <img src={rightArrow} alt="rightArrow" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
