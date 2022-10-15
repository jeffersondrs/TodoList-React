import { useState } from "react";
import "./App.css";

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleListTodo = () => {
    if (inputValue === "") return;
    setListTodo([inputValue, ...listTodo]);
    setInputValue("");
  };

  const handleInput = (event) => {
    event.preventDefault();
    const task = event.target.value;
    setInputValue(task);
  };
  return (
    <div className="App w-full h-screen flex flex-col items-center text-white font-bold p-5">
      <h1>Hello MotherFucker</h1>
      <input className="bg-black text-white" onChange={handleInput} />
      <button onClick={handleListTodo}>Adicionar</button>

      {listTodo.map((task, i) => {
        return (
          <div
            className="flex flex-row bg-blue-600 w-64 justify-between text-white p-2"
            key={i}
          >
            <p
              onClick={(event) => {
                event.target.classList.toggle("done");
              }}
              className="flex  justify-between cursor-pointer"
            >
              {task}
            </p>
            <button
              className="bg-black"
              onClick={() => {
                listTodo.splice(i, 1);
                setInputValue([...listTodo]);
              }}
            >
              Clique
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
