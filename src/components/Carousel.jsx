import { useEffect, useRef, useState } from 'react';
import styles from './carousel.module.css';
import shoe from '../assets/images/shoe.png';
import { LeftArrow, RightArrow } from '../assets/icon/Logo';
const Carousel = () => {
  const data = ['1data', '2data', '3data', '5data', '6da', '7da', '8da', '9da', 'xa', 'xb', '2data', '3data', '5data', '6da', '7da', '8da', '9da', 'xa', 'AKHIUR'];

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
      {/* <div className="">INDEKS ANGA {position}</div> */}
      {/*       <div className="">POSISI GESER {slideIndex} px</div>
      <div className="">LEBAR WINDOW {lebar}</div>
      <div className="">INDEKS ANGA {position}</div> */}
      {/* ````````````REF START HERE ```````````*/}
      <div id="cards" ref={containerSlideRef} className={styles.slider}>
        {/* BUTTON */}
        {position <= 0 ? null : (
          <div className={styles.slider__next} onClick={prevSlide}>
            <LeftArrow className={styles.next__button} />
          </div>
        )}
        <div className={styles.slider__cards} style={{ transform: `translateX(${slideIndex}px)` }} ref={innerSlideRef}>
          {data.map((item, index) => (
            <div ref={cardSlideRef} className={styles.slider__card} key={index}>
              {/*               <div ref={cardSlideRef} className={styles.slider__card} key={index}>
                {item}
              </div> */}
              <div className={styles.card__img} style={{ backgroundImage: `url(${shoe})` }}></div>
              <div className={styles.card__content}>
                <p className={styles.card__text}>NIKE AIR Lorem ipsum dolor sit amet consectetur adipisicing elit. Est.</p>
                <p className={styles.card__price}>Rp.3550.000</p>
                <div className={styles.card__tag}>
                  <p className={styles.card__disc}>Rp.1.000.000</p>
                  <p className={styles.card__chip}>99%</p>
                </div>
                <button className={styles.card__button}>Add to bag</button>
              </div>
            </div>
          ))}
        </div>
        {/* BUTTON */}
        {position >= 110 ? null : (
          <div className={styles.slider__prev} onClick={nextSlide}>
            <RightArrow className={styles.prev__button} />
          </div>
        )}
      </div>
      {/*       <section>
        <div className={styles.xx} onClick={() => console.log(innerSlideRef)}>
          INNER SLIDE WIDTH (udah bener) berupa lebar dari semua kotak : {innerSlide}
        </div>
        <div className="">card individual width = {cardSlide}</div>
        <div className="">EKSPERIMEn</div>
        {position >= 0 ? <div className="">PREVIOUS HILANG</div> : <div>PREVIOUS MUNCUL</div>}
        {position < data.length * -1 ? <div className="">NEXT HILANG</div> : <div>NEXT MUNCUl</div>}
      </section> */}
    </>
  );
};

export default Carousel;
