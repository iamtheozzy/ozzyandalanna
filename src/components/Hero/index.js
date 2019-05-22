import React, { Component } from 'react';
import cx from "classnames";
import Button from "../Button";
import styles from "./styles.module.scss";
import { isIOS } from "react-device-detect";

import FloralImg from "../../images/floral_hero.png"


class NewHero extends Component {
  

  addressClickHandler = () => {
    if (isIOS) {
      window.open("http://maps.apple.com/?address=the+brix+on+the+fox")
    } else {
      window.open("https://www.google.com/maps/search/?api=1&query=the+brix+on+the+fox")
    }
  }



  render() {
    return (
      <div>
        <section className={cx(styles.pageStyles)}>
          <div className={cx("container", styles.wrapper)}>
            <div className={cx( styles.mainStyles,"col-lg-12")}>
              <h1 className={cx(styles.titleText)}>ozzy & alanna</h1>
              <div className={cx("text-center", styles.subTitle)}>
              together with their families <br /> invite you to celebrate <br /> their marriage
              </div>
              <div className={cx(styles.dateBox, "mx-auto", "text-center")}>
                <img className={cx(styles.floral_positioning)} src={FloralImg} alt="floral element"/>
                <h2 className={cx(styles.dateBox__date)}>Sunday, July 14th | 3:30 pm</h2>
                <div className={cx(styles.dateBox__location)} onClick={this.addressClickHandler} >
                  <div className={cx(styles.venueName)}>The Brix on the Fox</div>
                  <div className={cx(styles.address)}>260 s washington st <br /> carpentersville, il 60619</div>
                </div>
              </div>
              <div className={cx("col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-sm-12 d-flex justify-content-around", styles.testing)}>
                <Button className="" href="https://ozzyandalanna.app.rsvpify.com" target="_blank" rel="noopener noreferrer">RSVP</Button>
                <Button href="#registry" rel="noopener noreferrer">Registry</Button>
              </div>
              <div className={cx("text-center mt-3 mb-5", styles.deadLine)}>Please RSVP no later than June 22nd</div>
            </div>
          </div>
        </section>
       </div> 
    );
  }
}

export default NewHero;
