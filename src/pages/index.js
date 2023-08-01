import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import anime from "animejs/lib/anime.es.js";
import Typed from "typed.js";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Grid from "@site/src/components/grid";
import Translate, { translate } from "@docusaurus/Translate";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Joi is a friend",
        "Joi is a teacher",
        "Joi is anything you want",
      ],
      // fadeOut: true,
      smartBackspace: true,
      typeSpeed: 30,
      backSpeed: 0,
      // showCursor: false,
      cursorChar: "_",
      loop: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <h1 className={styles.title}>{siteConfig.title}</h1>
      <div className={styles.typeBox}>
        <p className={styles.subTitle} ref={el} />
      </div>

      <div
        className={styles.buttonContainer}
        onMouseEnter={() =>
          anime({
            targets: "#button-wrapper",
            width: 240,
            height: 120,
            duration: 400,
            easing: "easeInOutQuad",
          })
        }
        onMouseLeave={() =>
          anime({
            targets: "#button-wrapper",
            width: 200,
            height: 80,
            duration: 400,
            easing: "easeInOutQuad",
          })
        }
      >
        <div className={styles.buttonWrapper} id="button-wrapper" />
        <div className={styles.centerButton}>
          <Link className={styles.link} to="/docs/intro">
            <Translate>Joi turtor</Translate>
          </Link>
        </div>
      </div>
      <Grid />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}
