import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


export default function FluidBackground() {
  return (
      <div className={styles.fluid}>
        <svg className={styles.ripple_image}viewBox="0 0 715 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 144V16.6851C83.1301 -37.2584 155.902 57.7703 225 58C342.597 58.3909 350 5.50006 454 5.50006C558 5.50006 625.521 69.694 715 5.5V82.0001V144H0Z" fill="#6E9CE1"/>
        </svg>
        <svg className={styles.ripple_image}viewBox="0 0 715 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 144V16.6851C83.1301 -37.2584 155.902 57.7703 225 58C342.597 58.3909 350 5.50006 454 5.50006C558 5.50006 625.521 69.694 715 5.5V82.0001V144H0Z" fill="#3670C7"/>
        </svg>
        <svg className={styles.ripple_image}viewBox="0 0 715 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 144V16.6851C83.1301 -37.2584 155.902 57.7703 225 58C342.597 58.3909 350 5.50006 454 5.50006C558 5.50006 625.521 69.694 715 5.5V82.0001V144H0Z" fill="#285394"/>
        </svg>
        <svg className={styles.ripple_image}viewBox="0 0 715 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 144V16.6851C83.1301 -37.2584 155.902 57.7703 225 58C342.597 58.3909 350 5.50006 454 5.50006C558 5.50006 625.521 69.694 715 5.5V82.0001V144H0Z" fill="#132847"/>
        </svg>
    </div>
  );
}
