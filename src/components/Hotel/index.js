import React from "react";
import cx from "classnames";

import styles from "./styles.module.scss";


const HotelInfo = () => {
  return (
    <div className={cx(styles.background__color)}>
      <div className={cx("container")}>
        <div className={cx(styles.wrapper, "text-center")}>
          <h1 className={cx(styles.title__text)}>Hotel Accommodations</h1>
          <div className={cx(styles.hotelinfo, "mb-4")}>
            <div>Courtyard West Dundee</div>
            <div>2175 Marriott Drive</div>
            <div>West Dundee, Illinois 60118</div>
            <div>(847)-429-0300</div>
          </div>
          <div className={cx("col-lg-8 offset-lg-2 col-sm-12", styles.rooms)}>A block of rooms has been reserved for our guests at a discounted rate. Please reference the Musci - Cardenas wedding when making your reservations by phone or you can book online <a href="https://www.marriott.com/events/start.mi?id=1550237426039&key=GRP" target="__blank" rel="noopener noreferrer">here</a>. Kindly reserve your room by June 22</div>
        </div>
      </div>
    </div>  
  );
}

export default HotelInfo;
