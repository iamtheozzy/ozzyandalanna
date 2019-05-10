import React from "react";
// import { Link } from "gatsby";
// import cx from "classnames";

import Layout from "../components/layout";
import styles from "./styles.module.css";
import image1 from "../images/1.png";
import Plant from "../components/image-components/eucalyptus";
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className={cx(styles.wrapper, "container")}>
      <div className="">
        <div className={cx(styles.mainText, "text-center")}>Hold your horses. The wedding website will be up soon.</div>
        {/* <img className={cx(styles.image, "mx-auto")} src={image1}/> */}
        <div className={cx(styles.image, "mx-auto")}>
          <Plant />
        </div>
        <div className={cx(styles.subText,"text-center")}>Ozzy and Alanna</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
