import React from 'react';
import styles from '../css_modules/HomePage.module.css';

const SneakerCard = (props) => {
  return (
    <div className={styles.gridCellWrapper}>
      <div className={styles.gridCellContent}>
        <a>
          <div>
            <div className={styles.productTemplateGridCell}>
              <div className={styles.gridCellUpperDataRowWrapper}>
                <div className={styles.releaseDateLabel}>
                  <span className={styles.releaseDateText}></span>
                </div>
              </div>
              <img className={styles.gridCellImage}></img>
              <div className={styles.gridCellLowerDataRowWrapper}>
                <h2 className={styles.gridCellBaseText}></h2>
                <div className={styles.priceDisplayWrapper}>
                  <p className={styles.priceLabel}>
                    <span className={styles.priceText}></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default SneakerCard;