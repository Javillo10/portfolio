import React, { useRef, useState, useEffect } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import "./BotonInicio.css";

const TARGET_TEXT = "CONOCE MÁS";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 80;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const BotonInicio = () => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(TARGET_TEXT);

  // Limpieza al desmontar el componente
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const scramble = () => {
    let pos = 0;

    // Limpiamos cualquier intervalo previo antes de empezar uno nuevo
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          // Si ya pasamos esta posición, dejamos la letra real
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          // Si no, ponemos un carácter aleatorio
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          return CHARS[randomCharIndex];
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="encrypt-btn"
    >
      <div className="btn-content">
        <FiLock />
        <span>{text}</span>
      </div>
      
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="scan-line"
      />
    </motion.button>
  );
};

export default BotonInicio;