import { UpArrow } from '../assets/icon/Logo';
import styles from './footer.module.css';
const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className="wrap">
        <p className={styles.footer__text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores vitae alias, earum porro reprehenderit tempore eius fugiat placeat voluptates atque maxime, dolorem vero sit veritatis hic culpa ratione consequuntur iste
          tempora obcaecati maiores rem accusantium quisquam? Et ratione rerum, a ad placeat suscipit consequuntur, sunt quibusdam provident doloremque iste dolore numquam ut possimus nemo eveniet sapiente ex. Animi obcaecati quia dolore
          atque, unde veritatis deserunt error vitae qui harum culpa sint fuga rem doloribus quis rerum saepe sunt. Tempore perspiciatis, vitae, quis nemo autem maxime, deserunt reiciendis laborum unde ea asperiores quos inventore nostrum
          et animi odio voluptate eaque.
        </p>
        <button className={styles.footer__button}>
          <div className={styles.footer__flex}>
            <p>Collapse all</p>
            <UpArrow />
          </div>
        </button>
        <p className={styles.footer__brand}>c 2022 PT Global Digital Niaga</p>
      </div>
    </section>
  );
};

export default Footer;
