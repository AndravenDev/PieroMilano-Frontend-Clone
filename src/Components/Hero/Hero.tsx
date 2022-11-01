import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.heroTitle}>WE INNOVATE</div>
        <hr />
        <div className={styles.heroText}>Thrilling Luxury</div>
      </div>
      <div className={styles.image}>
        <div className={styles.foreground}>
          <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb" />
        </div>
        <div className={styles.background}></div>
      </div>
    </div>
  );
};
