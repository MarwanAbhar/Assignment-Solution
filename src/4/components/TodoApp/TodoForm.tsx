import * as React from "react";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoListProps } from "../../../6/index";

export const TodoForm: React.FC<TodoListProps> = ({
  todoList,
  setTodoList,
}: TodoListProps) => {
  const [text, setText] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text !== "") {
      setTodoList([
        ...todoList,
        {
          title: text,
          done: false,
          id: uuidv4(),
        },
      ]);
    }
    setText("");
  };

  return (
    <div>
      <form className='add-form' onSubmit={onSubmit}>
        <label>
          <input
            type='text'
            className='add-input'
            placeholder='Enter a new todo'
            name='text'
            value={text}
            onChange={onChange}
          />
        </label>
      </form>
    </div>
  );
};
