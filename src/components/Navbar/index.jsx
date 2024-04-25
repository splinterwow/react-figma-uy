import PixerFoto from "../../../public/assets/pixer-logo.svg";
import styles from "../Navbar/index.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navLogo}>
        <a href="#">
          <img src={PixerFoto} alt="Pixer Logo" />
        </a>
      </div>
      <div className={styles.navigate}>
        <ul>
          <li>
            <a href="#">Bosh sahifa</a>
          </li>
          <li>
            <a href="#">Xizmatlar</a>
          </li>
          <li>
            <a href="#">Jamoa</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Kontaktlar</a>
          </li>
        </ul>
      </div>
      <a href="tel:+998909213711">
        <button className={styles.btn}>+998 90 921 37 11</button>
      </a>
    </div>
  );
}

export default Navbar;
