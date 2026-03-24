import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';


const FeatureList = [
  {
    title: 'Easy to Use',
    image: require('@site/static/img/emoji.png').default,
    description: (
      <>
        Easy to use Hyprland configuration, so you can Focus on what matters.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    image: require('@site/static/img/squid.png').default,
    description: (
      <>
        Easy to install with a preconfigured Installer and out easy Tutorial in  <code>Docs</code> Tab.
      </>
    ),
  },
  {
    title: 'Powered by Arch Linux',
    Svg: require('@site/static/img/arch.svg').default,
    description: (
      <>
        Based on Arch Linux and powered by the Linux Kernel
      </>
    ),
  },
];

function Feature({Svg, image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* If Svg exists, render it as a component. Otherwise, use an img tag */}
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
