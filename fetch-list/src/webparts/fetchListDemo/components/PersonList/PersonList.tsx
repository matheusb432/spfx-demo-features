import * as React from "react";
import { Person } from "../../../../util";
import PersonItem from "../PersonItem/PersonItem";
import styles from "./style.module.scss";

interface PersonListProps {
  people: Person[];
}

const PersonList = ({ people }: PersonListProps) => {
  return (
    <>
      <header className={styles.header}>Person List</header>
      <ul className={styles.list}>
        <li className={styles["list-header"]}>
          <span>ID</span>
          <span>Name</span>
          <span>Age</span>
        </li>
        {people.map((person) => (
          <PersonItem
            key={person.id}
            id={person.id}
            name={person.name}
            age={person.age}
          />
        ))}
      </ul>
    </>
  );
};

export { PersonList };
