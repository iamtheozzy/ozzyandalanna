import React from 'react';
import cx from "classnames";

import styles from "./styles.module.scss";

const Button = ({className, children, ...rest}) => {
  const classnames = `${styles.button} ${className}`
  return (
    <React.Fragment>
      <a className={cx(classnames)} {...rest} >{children}</a>
    </React.Fragment>
  );
}

export default Button;
