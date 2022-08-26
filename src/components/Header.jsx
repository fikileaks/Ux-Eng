import { Blibli } from '../assets/icon/Logo';
import styles from './header.module.css';

const Header = ({ forwardRef }) => {
  return (
    <header ref={forwardRef} className={styles.header}>
      <Blibli className={`${styles.header__icon} wrap`} />
    </header>
  );
};

export default Header;
