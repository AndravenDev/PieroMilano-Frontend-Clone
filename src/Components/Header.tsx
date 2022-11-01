import styles from "./Header.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>BMW Motorsport</div>
        <div className={styles.title}>Competition</div>
      </div>
      <div className={styles.login}>Login</div>
    </div>
  );
};
