import React from "react";
import { IState as IProps } from "../App";

// interface IProps {
//   people: {
//     name: string;
//     age: number;
//     url: string;
//     note?: string;
//   }[];
// }

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List" key={people.indexOf(person)}>
          <div className="List-header">
            <img src={person.url} className="List-img" alt="face" />
            <h2>{person.name}</h2>
          </div>

          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
