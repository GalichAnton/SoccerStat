import React, { FC } from "react";

import styles from "./error.module.css";
const Error: FC = ({ children }) => {
  return <h1 className={styles.error}>{children}</h1>;
};

export default Error;
