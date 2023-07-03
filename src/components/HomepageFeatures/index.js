import React from "react";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";

import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <Translate>Joi ai is easy to use</Translate>,
  },
  {
    title: "Customization",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <Translate>Easy to custom</Translate>,
  },
  {
    title: "Multi provider",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <Translate>Joi ai support many cloud provider</Translate>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{translate({ message: title, description: "" })}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
