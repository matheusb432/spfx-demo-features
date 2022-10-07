import * as React from "react";
import { Person } from "../../../../util";
import { PersonItem } from "../PersonItem";
import styles from "./style.module.scss";

interface PersonListProps {
  people: Person[];
}

const PersonList = ({ people }: PersonListProps) => {
  return (
    <>
      <header>Person List</header>
      <ul>
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
