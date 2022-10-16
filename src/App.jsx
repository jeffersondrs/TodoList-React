import { useState } from "react";
import "./App.css";
import { BiTrash } from "react-icons/bi";

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const clearInput = () => {
    document.getElementById("form").reset();
  };

  const handleListTodo = (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    setListTodo([inputValue, ...listTodo]);
    setInputValue("");
    clearInput();
  };

  const handleInput = (event) => {
    event.preventDefault();
    const task = event.target.value;
    setInputValue(task);
  };
  return (
    <div className="App">
      <div className="w-full h-screen flex flex-col items-center text-white font-bold p-1">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full p-2 my-1 title">
            <h1 className="title-h1 text-center text-2xl">
              What's plan for today?
            </h1>
          </div>
          <form id="form" onSubmit={handleListTodo}>
            <input
              className="bg-white/20 text-white p-2 w-64 text-center border-b-2 border-t-0 border-r-0 border-l-0 m-0 outline-none"
              onChange={handleInput}
            />
            <button type="submit"></button>
          </form>
        </div>
        <div className="flex flex-row flex-wrap p-2">
          {listTodo.map((task, i) => {
            return (
              <>
                <div
                  className="hover:bg-blue-700 flex flex-col bg-blue-600 max-w-xs justify-evenly items-center text-white p-1 rounded-md m-1"
                  key={i}
                >
                  <div
                    onClick={(event) => {
                      event.preventDefault();
                      event.target.classList.toggle("line-through");
                    }}
                    className="box-border w-full flex flex-col items-center justify-center h-full cursor-pointer"
                  >
                    <p className="w-full h-full text-center	break-words uppercase p-1">
                      {task}
                    </p>
                  </div>
                  <div className="w-full flex justify-end flex-row">
                    <BiTrash
                      className="cursor-pointer"
                      onClick={() => {
                        listTodo.splice(i, 1);
                        setInputValue([...listTodo]);
                      }}
                    >
                      {" "}
                    </BiTrash>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
