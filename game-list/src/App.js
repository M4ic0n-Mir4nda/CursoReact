import { useState } from "react";
import Form from "./components/Form";
import Itens from "./components/Item/Itens";
import Table from "./components/Table";


function App() {

    const[games, setGames] = useState([])

    const gamesSubmit = (game) => {
      //debugger
      setGames([...games, game])
    }

  return (
    <div className="App">
      <Form submitData={envio => gamesSubmit(envio)} />
      <Table />
      {games.map((item, index) => <Itens key={index} games={item} />)}
    </div>
  );
}

export default App;
