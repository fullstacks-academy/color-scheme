import React from "react";
import styles from './Logo.module.css'

const Logo = (props) => (
  <svg className={styles.logo} viewBox="0 0 54 73" {...props}>
    <path d="M27.327 0L.654 46.26l26.673 26.483L54 46.261 27.327 0zm0 58.714L13.295 44.553 27.327 20.28l13.905 24.272-13.905 14.16z" />
  </svg>
);

export default Logo;
