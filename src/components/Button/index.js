import React from 'react';
import cx from "classnames";

import styles from "./styles.module.scss";

const Button = ({className, children, ...rest}) => {
  const classnames = `${styles.button} ${className}`
  return (
    <div>
      <a className={cx(classnames)} {...rest} >{children}</a>
    </div>
  );
}

export default Button;
