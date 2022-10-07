import * as React from "react";
import PeopleRepo from "../../../../data/people-repository";
import { mockPeople } from "../../../../util/mock-data";
import { PersonList } from "../PersonList/PersonList";
import styles from "./style.module.scss";

interface FetchListDemoProps {
  description: string;
}

const peopleRepo = PeopleRepo.instance;

const FetchListDemo = ({}: FetchListDemoProps) => {
  // TODO remove mock data
  const [people, setPeople] = React.useState(mockPeople);

  const handleFetchData = async () => {
    const people = await peopleRepo.getPeople();

    setPeople(people);
  };

  return (
    <div className={styles.fetchListDemo}>
      <div className={styles.container}>
        <div className={styles.column}>
          <span className={styles.title}>Fetch List Demo</span>
          <p className={styles.subTitle}>
            Press the 'Fetch' button to get data from sharepoint
          </p>
          <button
            className={styles.button}
            type="button"
            onClick={handleFetchData}
          >
            Fetch
          </button>
          <PersonList people={people} />
        </div>
      </div>
    </div>
  );
};

export default FetchListDemo;
export { FetchListDemoProps };
