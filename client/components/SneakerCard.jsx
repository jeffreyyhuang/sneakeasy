import React from 'react';
import styles from '../css_modules/SneakerCard.module.css';
import DetailModal from './DetailModal.jsx';

class SneakerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }

  render() {
    return (
      <div className={styles.gridCellWrapper} onClick={this.showModal}>
        <DetailModal hideModal={this.hideModal} show={this.state.show} sneaker={this.props.sneaker}/>
        <div className={styles.gridCellContent}>
          <a className={styles.searchGridCell}>
            <div>
              <div className={styles.productTemplateGridCell}>
                <div className={styles.gridCellUpperDataRowWrapper}>
                  <div className={styles.releaseDateLabel}>
                    <span className={styles.releaseDateText}>{this.props.sneaker.release_date.substring(0,10)}</span>
                  </div>
                </div>
                <img className={styles.gridCellImage} src={this.props.sneaker.photo_url}></img>
                <div className={styles.gridCellLowerDataRowWrapper}>
                  <h2 className={styles.gridCellBaseText}>{this.props.sneaker.product_name}</h2>
                  <div className={styles.priceDisplayWrapper}>
                    <p className={styles.priceLabel}>
                      <span className={styles.priceText}>${this.props.sneaker.price}</span>
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
}

export default SneakerCard;