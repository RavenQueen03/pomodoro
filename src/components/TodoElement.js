import React from "react";

function TodoElement({ setTodos, todos, todo, text }) {
  return (
    <div>
      <li className="mr-[30%] mt-[15px] w-[51.5%] h-[58px] bg-white rounded-lg ">
        {text}
      </li>
    </div>
  );
}

export default TodoElement;
