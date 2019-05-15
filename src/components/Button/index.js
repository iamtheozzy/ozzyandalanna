import React from 'react';
import cx from "classnames";

import styles from "./styles.module.scss";

const Button = ({className, children, ...rest}) => {
  const classnames = `${styles.button} ${className}`
  return (
    <React.Fragment>
<<<<<<< HEAD
      <a className={cx(classnames)} {...rest} >{children}</a>
=======
      <a className={cx(classnames)} {...rest} target="_blank" rel="noopener noreferrer">{children}</a>
>>>>>>> 4ff0c8356a62e5cb6fdd9c0c3c524eb142d215bd
    </React.Fragment>
  );
}

export default Button;
