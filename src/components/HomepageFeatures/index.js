import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';


const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Easy to install with a preconfigured Installer and out easy Tutorial in  <code>Tutorial</code> Tab.
      </>
    ),
  },
  {
    title: 'Powered by Arch Linux',
    Scg: require('@site/static/img/arch.svg').default,
    description: (
      <>
        Based on Arch Linux powered by the Linux Kernel
      </>
    ),
  },
];

function Feature({Svg, image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* If it's an SVG, render the component. If it's a PNG/JPG, render an img tag */}
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={image} className={styles.featureSvg} alt={title} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
