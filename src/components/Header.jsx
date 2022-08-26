import { Blibli } from '../assets/icon/Logo';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Blibli className={`${styles.header__icon} wrap`} />
    </div>
  );
};

export default Header;
