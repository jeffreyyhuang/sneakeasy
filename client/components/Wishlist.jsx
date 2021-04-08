import React from 'react';
import styles from '../css_modules/Wishlist.module.css';
import ProductGrid from './ProductGrid.jsx';

const Wishlist = (props) => {
  return (
    <div className={styles.pageAlignment}>
      <div className={styles.wishlistGridContainer}>
        <div className={styles.pageHeaderBox}>
          <h1 className={styles.pageHeaderTitle}>Wishlist</h1>
        </div>
        <div className={styles.wishlistGrid}>

        </div>
      </div>
    </div>
  )
}

export default Wishlist;