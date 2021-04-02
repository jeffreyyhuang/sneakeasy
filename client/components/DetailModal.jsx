import React from 'react';
import styles from '../css_modules/DetailModal.module.css';

class DetailModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    if (!event.target.closest("#comparisonModal")) {
      this.props.hideModal();
      event.stopPropagation();
    }
  }

  render() {
    let showHide;
    if (!this.props.show) {
      showHide = null;
    } else {
      showHide =
      <div className={styles.displayBlock} onClick={this.handleClick}>
      <section id="comparisonModal" className={styles.modalMain}>
        <img className={styles.modalImage} src={this.props.sneaker.photo_url}></img>
        <div className={styles.productDisplayStoryModule}>
          <h2 className={styles.productStoryTitle}>Product Details</h2>
          <p className={styles.productStory}>{this.props.sneaker.product_details}</p>
        </div>
        <div className={styles.dividerDash}></div>
        <div className={styles.moduleSection}>
          <div className={styles.nutritionalFactsWrapper}>
            <a>
              <div className={styles.factWrapper}>
                <div className={styles.factDetails}>
                  <span className={styles.factLabel}>Brand</span>
                  <span className={styles.factValue}>{this.props.sneaker.brand}</span>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.nutritionalFactsWrapper}>
            <a>
              <div className={styles.factWrapper}>
                <div className={styles.factDetails}>
                  <span className={styles.factLabel}>Release Date</span>
                  <span className={styles.factValue}>{this.props.sneaker.release_date.substring(0,10)}</span>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.nutritionalFactsWrapper}>
            <a>
              <div className={styles.factWrapper}>
                <div className={styles.factDetails}>
                  <span className={styles.factLabel}>Price</span>
                  <span className={styles.factValue}>{this.props.sneaker.price}</span>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.nutritionalFactsWrapper}>
            <a>
              <div className={styles.factWrapper}>
                <div className={styles.factDetails}>
                  <span className={styles.factLabel}>SKU</span>
                  <span className={styles.factValue}>{this.props.sneaker.sku}</span>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.nutritionalFactsWrapper}>
            <a>
              <div className={styles.factWrapper}>
                <div className={styles.factDetails}>
                  <span className={styles.factLabel}>Main Color</span>
                  <span className={styles.factValue}>{this.props.sneaker.main_color}</span>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.nutritionalFactsWrapper}>
            <a>
              <div className={styles.factWrapper}>
                <div className={styles.factDetails}>
                  <span className={styles.factLabel}>Colorway</span>
                  <span className={styles.factValue}>{this.props.sneaker.colorway}</span>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.nutritionalFactsWrapper}>
            <a>
              <div className={styles.factWrapper}>
                <div className={styles.factDetails}>
                  <span className={styles.factLabel}>Designer</span>
                  <span className={styles.factValue}>{this.props.sneaker.designer}</span>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.nutritionalFactsWrapper}>
            <a>
              <div className={styles.factWrapper}>
                <div className={styles.factDetails}>
                  <span className={styles.factLabel}>Silhouette</span>
                  <span className={styles.factValue}>{this.props.sneaker.silhouette}</span>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.nutritionalFactsWrapper}>
            <a>
              <div className={styles.factWrapper}>
                <div className={styles.factDetails}>
                  <span className={styles.factLabel}>Technology</span>
                  <span className={styles.factValue}>{this.props.sneaker.technology}</span>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.nutritionalFactsWrapper}>
            <a>
              <div className={styles.factWrapper}>
                <div className={styles.factDetails}>
                  <span className={styles.factLabel}>Nickname</span>
                  <span className={styles.factValue}>{this.props.sneaker.nickname}</span>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.nutritionalFactsWrapper}>
            <a>
              <div className={styles.factWrapper}>
                <div className={styles.factDetails}>
                  <span className={styles.factLabel}>Category</span>
                  <span className={styles.factValue}>{this.props.sneaker.category}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
    }

    return (
      <div>
        {showHide}
      </div>
    )
  }
}

export default DetailModal;
