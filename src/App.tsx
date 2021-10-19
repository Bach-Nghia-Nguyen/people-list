import { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import Header from "./components/Header";
import List from "./components/List";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 36,
      note: "Allegeric to staying on the same team",
    },
  ]);

  return (
    <div className="App">
      <Header title="People Invited to my Party" color="#1C4685" />
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
