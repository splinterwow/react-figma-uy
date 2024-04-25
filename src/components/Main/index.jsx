import YouTubeImg from "../../../public/assets/youtube-embed.svg";
import cardImg1 from "../../../public/assets/website-illustration.svg";
import styles from "../Main/index.module.css";

function Main() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainText}>
          <h2>
            Biznesingizni keyingi bosqichga <br />
            olib chiqing
          </h2>
          <p>
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.{" "}
            <br /> Nam facilisis lacinia ex, eget sollicitudin massa
            pellentesque <br /> in. Vivamus mattis eros at sem pulvinar
          </p>

          <button className={styles.btn2}>Xizmatlar bilan tanishish</button>
        </div>
        <div className={styles.mainImg}>
          <img src={YouTubeImg} alt="" />
        </div>
        <div className={styles.hero}>
          <h3>Xizmatlar</h3>
          <p>
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget <br /> sollicitudin massa pellentesque
            in. Vivamus mattis eros at sem pulvinar
          </p>
        </div>
        <div className={styles.mainCard}>
          <div className={styles.card1}>
            <img src={cardImg1} alt="" />
            <h3>Vebsayt tuzish</h3>
            <p>lorem ipsum</p>
          </div>
          <div className={styles.card2}></div>
          <div className={styles.card3}></div>
          <div className={styles.card4}></div>
          <div className={styles.card5}></div>
        </div>
      </div>
    </>
  );
}

export default Main;
