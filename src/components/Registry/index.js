import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

// Registry Image componets
import Amazon from "../image-components/AmazonLogo";
import BedBathBeyond from "../image-components/BBBLogo";
import Target from "../image-components/TargetLogo";

const RegistryPage = () => {
  return (
    <div id="registry" className={cx("container",styles.wrapper)}>
      <h1 className="text-center">REGISTRY</h1>
      <p className="text-center col-lg-8 offset-lg-2">Your love, laughter and company on our wedding day is the greatest gift of all. However, should you wish to help us celebrate with a gift, we are registered at the retailers below.</p>
      <div className={cx("col-lg-10 offset-lg-1", "col-12",styles.imageContainer)}>
        <a href="https://www.amazon.com/wedding/alanna-musci-ozzy-cardenas-chicago-july-2019/registry/30QV82R8ZXMRU" target="__blank" rel="noopener"><Amazon /></a>
        <a href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/547368787" target="__blank" rel="noopener"><BedBathBeyond /></a>
        <a href="https://www.target.com/gift-registry/giftgiver?registryId=9fd3139498d94e12b9a938be7182f37c&type=WEDDING" target="__blank" rel="noopener"><Target /></a>
      </div>
    </div>
  );
};

export default RegistryPage;