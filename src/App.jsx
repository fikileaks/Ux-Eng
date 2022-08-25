// import './App.css';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './App.module.css';

function App() {
  const data = ['1data', '2data', '3data', '5data', '6da', '7da', '8da', '9da', 'xa', 'xb'];
  // const data = ['6da', '7da', '8da', '9da', 'xa', 'asd'];

  /* 
 ? Array = data bisa 10, 20, 30, 40, 50, 60
 ! per width = 100px
 ! per totalWidthPure = 10 x 100px
 ! per totalWidthWithGap = (10 x 100px) + (9 x 3px)
 gap : 3
 length -1 
 ! also calculate gap = 3 x 9 = 27px
 pembulatan angka

 klik kanan 1x
 transformX misal 25px

 * index = (0state +  25px/100px ).floor //dibulatin ke bawahhhhhh

 *kalo 0 hidden yang button left
 *kalo === state.length , button rigth hidden
  */

  /* 
 SUPAYA DAPET ANGKA 10, APA YANG HARUS DILAKUKAN???
 GESER/WIDTH

 CARI BERAPA KALI KLIK SAMPE DAPET ANGKA 10
 ! per 1 geser -> 30px
 ! komponen width random -> 1000,2000
 ! lebar card -> 140px, 180px
 * 1 index = berapa kali geser ?
 * 1 index = 30px / 140px = misal 0.1234 %  
 * kalo 0.1234 === 0 {
 * hide tombol yang kiri
 * }
 * kalo 0.1234 === arrayData.length {
 * hide tombol yang kiri
 * }

 TODO : PARAMETERNYA ITU HARUS 100% atau lebih agar fullfiled the term condition
 TODO : geser 30px ituuu berapa persen dari 100% ??? 
 TODO : si box luar - si box inner = 100% state !!! 
 */

  /* -------COBA PAKE USEREF----- */
  // const referensi = useRef(null);
  // const referensibaru = useRef(0);
  const [lebar, setLebar] = useState(window.innerWidth);

  const checkSize = () => {
    setLebar(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    // console.log('WIDTH', lebar);
    // console.log('REFDERENSI BUAR ', referensibaru, 'CuRERENT', referensibaru.current.offsetWidth);
  });

  /*   const boxwidth = document.querySelector('.slider__cards').clientWidth;
  console.log(boxwidth); */

  /* --------- REFERENSI YANG BENER DARI SINI ------- */
  const [slideIndex, setSlideIndex] = useState(0);
  const [position, setPosition] = useState(0);
  // sebagai cards
  // const innerSlideRef = useRef(null);
  const containerSlideRef = useRef(null);
  const innerSlideRef = useRef(null);
  // sebagai card aja
  const cardSlideRef = useRef(null);
  const [containerSlide, setContainerSlide] = useState(0);
  const [innerSlide, setInnerSlide] = useState(0);
  const [cardSlide, setCardSlide] = useState(0);
  const updateInner = () => {
    setInnerSlide(innerSlideRef.current.offsetWidth);
    setCardSlide(cardSlideRef.current.offsetWidth);
    setContainerSlide(containerSlideRef.current.offsetWidth);
  };
  useEffect(() => {
    // window.addEventListener('resize', updateInner);
    window.addEventListener('load', updateInner);
    console.log(innerSlideRef.current.offsetWidth, 'lebar semua kartu adalah | innerSlide');
    setInnerSlide(innerSlideRef.current.offsetWidth);
    console.log(cardSlideRef.current.offsetWidth, 'lebar per kartu adalah | cardSlide');
    setCardSlide(cardSlideRef.current.offsetWidth);
    console.log(containerSlideRef.current.offsetWidth, 'lebar kontainer adalah | containerSlide');
    setContainerSlide(containerSlideRef.current.offsetWidth);

    /* ADD INNER BOX WIDTH */
    let innerBox = document.getElementById('cards').offsetWidth;
    console.log(innerBox, 'lebar kontainer overflow hidden adalah | innerBox');
  });

  const geser = 30;
  // const width = 100;
  const gap = 12;
  const percentage = (geser * 100) / (innerSlide - containerSlide - gap * (data.length - 1));
  const nextSlide = () => {
    setSlideIndex(slideIndex - geser);
    setPosition(position + percentage);
    console.log({ position, geser, percentage });
  };
  const prevSlide = () => {
    setSlideIndex(slideIndex + geser);
    setPosition(position - percentage);
    console.log({ position, geser });
  };
  /* --------- REFERENSI YANG BENER DARI SINI ------- */

  return (
    <>
      <div className="">POSISI GESER {slideIndex} px</div>
      <div className="">LEBAR WINDOW {lebar}</div>
      <div className="">INDEKS ANGA {position}</div>
      {/* ````````````REF START HERE ```````````*/}
      <div id="cards" ref={containerSlideRef} className={styles.slider}>
        <div className={styles.slider__next} onClick={prevSlide}>
          PREV
        </div>
        <div className={styles.slider__cards} style={{ transform: `translateX(${slideIndex}px)` }} ref={innerSlideRef}>
          {data.map((item, index) => (
            <div ref={cardSlideRef} className={styles.slider__card} key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.slider__prev} onClick={nextSlide}>
          NEXT
        </div>
      </div>
      <section>
        <div className={styles.xx} onClick={() => console.log(innerSlideRef)}>
          INNER SLIDE WIDTH (udah bener) berupa lebar dari semua kotak : {innerSlide}
        </div>
        <div className="">card individual width = {cardSlide}</div>
        {/* EKSPERIMEN DIV */}
        <div className="">EKSPERIMEn</div>
        {position >= 0 ? <div className="">PREVIOUS HILANG</div> : <div>PREVIOUS MUNCUL</div>}
        {position < data.length * -1 ? <div className="">NEXT HILANG</div> : <div>NEXT MUNCUl</div>}
      </section>
    </>
  );
}

export default App;
