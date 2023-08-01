import React, { useEffect, useState } from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import clsx from "clsx";
import anime from "animejs/lib/anime.es.js";
import styles from "./styles.module.css";

export default function Grid() {
  const size = 60; // 50 width + 2 * 5 margin
  const menuHeight = 60;
  const isBrowser = useIsBrowser();
  const [wCount, setWCount] = useState(
    isBrowser ? Math.floor(window.innerWidth / size) : 0
  );
  const [hCount, setHCount] = useState(
    isBrowser ? Math.floor((window.innerHeight - menuHeight) / size) : 0
  );

  const divArray = Array.from(
    { length: wCount * hCount },
    (_, index) => index + 1
  );

  useEffect(() => {
    if (isBrowser) {
      const caculateCount = () => {
        setWCount(Math.floor((window.innerWidth - 10) / size));
        setHCount(Math.floor((window.innerHeight - menuHeight) / size));
      };

      window.addEventListener("resize", caculateCount);

      return () => {
        window.removeEventListener("resize", caculateCount);
      };
    }
  }, []);

  return (
    <div className={styles.grid}>
      {divArray.map((num) => (
        <div
          onClick={() => {
            anime({
              targets: ".square",
              scale: [
                { value: 0.1, easing: "easeOutSine", duration: 300 },
                { value: 1, easing: "easeInOutQuad", duration: 800 },
              ],
              delay: anime.stagger(200, {
                grid: [wCount, hCount],
                from: num - 1,
              }),
            });
          }}
        >
          <div key={num} className={clsx(styles.square, "square")} />
        </div>
      ))}
    </div>
  );
}
