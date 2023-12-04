"use client";

import styles from "./page.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./utils/useMousePosition";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "blackOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Random text asoihfiosdnfklsdflkjsdfiosnifognsdilfilskjli Lollll
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          I am a <span>selectively skilled</span> product designer with strong
          focus on producing high quality & impactful digital experience
        </p>
      </div>
    </main>
  );
}
