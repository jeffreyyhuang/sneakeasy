import React from 'react';
import styles from '../css_modules/HomePage.module.css';
import SneakerCard from './SneakerCard.jsx'

const ProductGrid = (props) => {
  return (
    <div className={styles.desktopGridWrapper}>
      <div className={styles.resultsGrid}>
        <div className={styles.infiniteHitsWrapper}>
          <ul className={styles.infiniteHitsList}>
            <div className={styles.gridWrapper}>
              {props.releases.map((sneaker) => <SneakerCard sneaker={sneaker} addToWishlist={props.addToWishlist}/>)}
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductGrid;