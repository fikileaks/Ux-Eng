import { useRef } from 'react';
import styles from './App.module.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const toTopRef = useRef(null);
  const scrollTo = (x) => {
    window.scrollTo({
      top: x.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <Header forwardRef={toTopRef} />
      <section className={`${styles.container} wrap`}>
        <div className={styles.box4}>4</div>
        <div className={styles.box3}>3</div>
        <div className={styles.carousel}>
          <Carousel />
        </div>
        <div className={styles.box1}>1</div>
        <div className={styles.box2}>2</div>
      </section>
      <Footer scrollTo={scrollTo} forwardRef={toTopRef} />
    </div>
  );
}

export default App;
