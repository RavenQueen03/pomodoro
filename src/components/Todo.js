import { react, useState } from "react";
import Add from "./images/plus-circle-white.png";
import TodoElement from "./TodoElement.js";

function Todo({ bgcolor }) {
  const [showNew, setshowNew] = useState(true);
  const [showForm, setshowform] = useState(false);
  const [showList, setshowList] = useState(true);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    //   alert("hello")
    setshowform(true);
    setshowList(true);
    setshowNew(false);
  };

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
    setshowList(true);
    setshowNew(true);
    setshowform(false);
  };
  return (
    <div className={`h-screen ${bgcolor}`}>
      <ul className=" ml-[31.95%] mt-[-60px] ">
        {todos.map((todo) => (
          <TodoElement
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>

      {showForm ? (
        <div className=" ml-[31.95%] mr-[30%]  mt-[15px] w-[35%] h-[258px] bg-white rounded-lg pt-[30px]">
          <div className=" pl-[20px] ">
            <input
              type="text"
              placeholder="What are you working on ?"
              className="outline-none placeholder:italic  placeholder:text-[25px] placeholder:font-semibold  placeholder:opacity-[.35] w-[100%]  h-[40px] py-[15px] font-semibold  text-[25px]"
              onChange={inputTextHandler}
              required
            />
          </div>
          <div className=" flex  w-[100%] h-[60px]  bg-slate-200 mt-[27.3%] rounded-b-lg py-[12px] pl-[67%] ">
            <button className="font-semibold  text-gray-500">Cancel</button>
            <button
              onClick={submitTodoHandler}
              type="submit"
              className="bg-black shadow-md  border-solid border rounded-[4px] text-white w-[73px] h-[39px] opacity-[.85]  hover:opacity-100 ml-[17px]"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {showNew ? (
        <button
          onClick={handleAdd}
          className=" border-dashed border-stone-100  rounded-lg border-opacity-[0.5] border-2 flex items-center ml-[31.95%] mr-[30%]  mt-[15px] w-[35%] h-[68px] bg-black opacity-[.85] bg-opacity-[.15] hover:opacity-100  pl-[14.2%] "
        >
          <img src={Add} alt="add" className="w-[19px] " />
          <p className="text-white ml-[7px] font-semibold">Add Task</p>
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Todo;
