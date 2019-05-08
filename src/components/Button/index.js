import React from 'react';
import cx from "classnames";

import styles from "./styles.module.scss";

const Button = ({props, children}) => {
  return (
    <React.Fragment>
      <a className={cx(styles.button)} href={props.url} target="_blank" rel="noopener noreferrer">{children}</a>
    </React.Fragment>
  );
}

export default Button;
