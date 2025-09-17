import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import "./Carouselscroll.css";
import  bosque1 from '../images/bosque1.jpg';
import  bosque2 from '../images/bosque2.jpg';
import  quadrak from '../images/quadrak.jpg';
import  solos from '../images/solos.jpg';
import  one from '../images/one.PNG';
import  Escritorio from '../images/Escritorio.PNG';
import  Ibis from '../images/Ibis.jpg';
import Borges from '../images/borges2233.jpeg';
import Ricaldone from '../images/ricaldone2291.jpeg';

const images = [
  bosque1,
  Borges,
  bosque2,
  Ricaldone,
  quadrak,
  solos,
  one,
  Escritorio,
  Ibis,
];

// const images = [
//   "./images/bosque1.jpg",
//   "./images/bosque2.jpg",
//   "./images/quadrak.jpg",
//   "./images/solos.jpg",
//   "./images/one.PNG",
//   "./images/Escritorio.PNG",
//   "./images/Ibis.jpg",
// ];

export default function Carouselscroll() {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  // Calcula o tamanho total do scroll
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <div className="carousel-container">
      <motion.div
        ref={carouselRef}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          animate={{ x: [0, -width, 0] }} // Animação infinita
          transition={{
            repeat: Infinity,
            duration: images.length * 2,
            ease: "linear",
          }}
        >
          {images.map((src, index) => (
            <motion.div className="item" key={index}>
              <img src={src} alt={`Slide ${index}`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}