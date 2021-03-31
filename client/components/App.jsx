import axios from 'axios';
import React from 'react';
import styles from '../css_modules/HomePage.module.css';
import ReleaseGrid from './ReleaseGrid.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      releases: []
    }
  }

  componentDidMount() {
    this.getReleaseData();
  }

  getReleaseData() {
    axios.get('/sneakers')
      .then((response) => {
        this.setState({releases: response.data})
      })
      .catch((error) => {
        console.log('error with axios.get request: ', error);
      })
  }

  render() {
    console.log('this.state.releases: ', this.state.releases);
    return (
      <div className={styles.pageLayoutWrapper}>
        <div>Hello World</div>
        <div>
            <div>
              <div>
                <div>
                  {/* <img className={styles.mainImage} alt="Air Jordna 5 Retro Stealth 2.0" src="https://cms-cdn.goat.com/750/387013a345f7-2eca-be11-97f8-0ea80d50.jpg"></img> */}
                  <img className={styles.mainImage} alt=" - Air Jordan 5 Retro 'Stealth 2.0'" src="https://cms-cdn.goat.com/750/387013a345f7-2eca-be11-97f8-0ea80d50.jpg" sizes="(max-width: 640px) 200vw, (max-width: 1100px) 150vw, 100vw" class="sc-htpNat ipJcZu HomeHeroSection__Image-slbioc-4 gjdAmw" srcset="https://cms-cdn.goat.com/75/387013a345f7-2eca-be11-97f8-0ea80d50.jpg 75w, https://cms-cdn.goat.com/120/387013a345f7-2eca-be11-97f8-0ea80d50.jpg 120w, https://cms-cdn.goat.com/150/387013a345f7-2eca-be11-97f8-0ea80d50.jpg 150w, https://cms-cdn.goat.com/240/387013a345f7-2eca-be11-97f8-0ea80d50.jpg 240w, https://cms-cdn.goat.com/375/387013a345f7-2eca-be11-97f8-0ea80d50.jpg 375w, https://cms-cdn.goat.com/500/387013a345f7-2eca-be11-97f8-0ea80d50.jpg 500w, https://cms-cdn.goat.com/750/387013a345f7-2eca-be11-97f8-0ea80d50.jpg 750w, https://cms-cdn.goat.com/1000/387013a345f7-2eca-be11-97f8-0ea80d50.jpg 1000w, https://cms-cdn.goat.com/1250/387013a345f7-2eca-be11-97f8-0ea80d50.jpg 1250w, https://cms-cdn.goat.com/1500/387013a345f7-2eca-be11-97f8-0ea80d50.jpg 1500w, https://cms-cdn.goat.com/1800/387013a345f7-2eca-be11-97f8-0ea80d50.jpg 1800w, https://cms-cdn.goat.com/2200/387013a345f7-2eca-be11-97f8-0ea80d50.jpg 2200w, https://cms-cdn.goat.com/2600/387013a345f7-2eca-be11-97f8-0ea80d50.jpg 2600w, https://cms-cdn.goat.com/3000/387013a345f7-2eca-be11-97f8-0ea80d50.jpg 3000w, https://cms-cdn.goat.com/3500/387013a345f7-2eca-be11-97f8-0ea80d50.jpg 3500w"></img>
                </div>
              </div>
            </div>
        </div>
        <div alt="Brand Container">

        </div>
        <ReleaseGrid/>
      </div>
    )
  }
}

export default App;

