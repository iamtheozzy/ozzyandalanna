import React from 'react';
import cx from "classnames";
import Button from "../Button";
import styles from "./styles.module.scss";


const Hero = () => {
  return (
    <section className={cx(styles.pageStyles)}>
      <div className={cx("container", styles.wrapper)}>
        <div className={cx( styles.mainStyles,"col-lg-12")}>
          <h1 className={cx(styles.titleText)}>ozzy & alanna</h1>
          <div className={cx("text-center", styles.subTitle)}>
          together with their families <br /> invite you to celebrate <br /> their marriage
          </div>
          <div className={cx(styles.dateBox, "mx-auto", "text-center")}>
            <h2 className={cx(styles.dateBox__date)}>Sunday, July 14th | 3:30 pm</h2>
            <div className={cx(styles.dateBox__location)}>
              <div className={cx(styles.venueName)}>The Brix on the Fox</div>
              <div className={cx(styles.address)}>260 s washington st <br /> carpentersville, il 60619</div>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-2 mb-4 text-center">
            <Button className="mr-3" href="https://ozzyandalanna.app.rsvpify.com">RSVP</Button>
            <Button href="#" rel="noopener noreferrer">Registry</Button>
          </div>
          <div className={cx("text-center mb-5", styles.deadLine)}>Please RSVP no later than June 22nd</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
