// import './App.css';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className={`${styles.container} wrap`}>
        {/* BOX SECTION */}
        <div className={styles.box4}>4</div>
        <div className={styles.box3}>3</div>
        <div className={styles.carousel}>
          <Carousel />
        </div>
        <div className={styles.box1}>1</div>
        <div className={styles.box2}>2</div>
        {/* BOX SECTION */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
