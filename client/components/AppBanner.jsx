import React from 'react';
import styles from '../css_modules/AppBanner.module.css';

const AppBanner = (props) => {
  let handleDiscoverClick = function() {
    props.switchPage('discover');
  }

  let handleWishlistClick = function() {
    props.switchPage('wishlist');
  }

  return (
    <nav className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerStyled}>
          <div>
            <div className={styles.hamburgerMenu}>
              <span className={styles.hamburgerSlice}></span>
              <span className={styles.hamburgerSlice}></span>
              <span className={styles.hamburgerSliceFinal}></span>
            </div>
          </div>
        </div>
        <a className={styles.appLogo}>
        Sneakeasy
        </a>
        <a className={styles.headerDiscover} onClick={handleDiscoverClick}>Discover</a>
        <a className={styles.headerWishlist} onClick={handleWishlistClick}>Wishlist</a>
        <a className={styles.headerCollection}>Collection</a>
        <a className={styles.headerStyles}>Styles</a>
        <svg className={styles.searchIcon} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15 15" xmlSpace="preserve" data-qa="search_icon" class="SearchIcon__TheSearchIcon-sc-1nqz99z-0 kRnXFq" aria-label="search">
          <g>
            <g id="HOMEPAGE-HERO-WITH-PLACEHOLDER-FOR-VISUAL---MOBILE-Copy-2" transform="translate(-331.000000, -51.000000)">
              <g id="Group" transform="translate(338.522463, 58.619673) rotate(-45.000000) translate(-338.522463, -58.619673) translate(330.022463, 48.619673)"><g id="Group-3"><path id="Path-4" d="M8.6,12.9v7" fill="none" stroke-width="1.5"></path><g id="search" transform="translate(8.532978, 8.188775) rotate(-315.000000) translate(-8.532978, -8.188775) translate(3.032978, 2.688775)"><path id="Stroke-4" fill="none" stroke-width="1.5" stroke-linejoin="round" d="M5.2,10.3C2.3,10.3,0,8,0,5.2S2.3,0,5.2,0s5.2,2.3,5.2,5.2S8,10.3,5.2,10.3z"></path></g></g></g>
            </g>
          </g>
        </svg>
      </div>
    </nav>
  )
}

export default AppBanner;