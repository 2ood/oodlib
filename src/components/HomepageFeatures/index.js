import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import FluidBackground from '../FluidBackground';

const section_row_classes = `${styles.section} ${styles.row} ${styles.catch_phrase}`;

export default function HomepageFeatures() {
  return (
    <section className={styles.container}>
      <span className={section_row_classes}>
        Write Down to <br/>Keep Things on Track.
      </span>
      <FluidBackground />
    </section>
  );
}
