import React from 'react';
import styles from '../css_modules/SneakerCard.module.css';

const SneakerCard = (props) => {
  console.log('props.sneaker: ', props.sneaker);


  let dateParser = function(date) {

  }

  return (
    <div className={styles.gridCellWrapper}>
      <div className={styles.gridCellContent}>
        <a>
          <div>
            <div className={styles.productTemplateGridCell}>
              <div className={styles.gridCellUpperDataRowWrapper}>
                <div className={styles.releaseDateLabel}>
                  <span className={styles.releaseDateText}>{props.sneaker.release_date.substring(0,10)}</span>
                </div>
              </div>
              <img className={styles.gridCellImage} src={props.sneaker.photo_url}></img>
              <div className={styles.gridCellLowerDataRowWrapper}>
                <h2 className={styles.gridCellBaseText}>{props.sneaker.product_name}</h2>
                <div className={styles.priceDisplayWrapper}>
                  <p className={styles.priceLabel}>
                    <span className={styles.priceText}>${props.sneaker.price}</span>
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