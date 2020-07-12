import React from "react";
import styles from './Option.module.css'

const Option = (props) => <option className={styles.option} {...props} />;

export default Option;
