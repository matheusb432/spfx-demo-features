import * as React from "react";
import styles from "./style.module.scss";

interface PersonItemProps {
  id: number;
  name: string;
  age: number;
}

const PersonItem = ({ id, name, age }: PersonItemProps) => {
  return (
    <li style={styles.item}>
      <span>{id}</span>
      <span>{name}</span>
      <span>{age}</span>
    </li>
  );
};

export default PersonItem;
export type { PersonItemProps };
