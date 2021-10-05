import * as React from "react";
import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { TodoListProps } from "../../../6/index";

export const TodoList: React.FC<TodoListProps> = ({
  todoList,
  setTodoList,
}: TodoListProps) => {
  const [filter, setFilter] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <form style={{ marginTop: "30px" }}>
        <input
          id='filter'
          name='filter'
          className='filter-input'
          type='text'
          placeholder='Search Todos...'
          value={filter}
          onChange={onChange}
        />
      </form>
      <div
        className={`${todoList.length !== 0 ? "form-container" : "form-hide"}`}
      >
        <div className='pending-container'>
          <h3 style={{ color: "#ffee58" }}>Pending:</h3>
          {todoList &&
            todoList
              .filter(
                (todoItem) => todoItem.title.includes(filter) || filter === ""
              )
              .map(
                (todoItem) =>
                  todoItem.done === false && (
                    <TodoItem
                      key={todoItem.id}
                      todo={todoItem}
                      todoList={todoList}
                      setTodoList={setTodoList}
                    />
                  )
              )}
        </div>
        <div className='completed-container'>
          <h3 style={{ color: "#39db80" }}>Completed:</h3>{" "}
          {todoList &&
            todoList
              .filter(
                (todoItem) => todoItem.title.includes(filter) || filter === ""
              )
              .map(
                (todoItem) =>
                  todoItem.done === true && (
                    <TodoItem
                      key={todoItem.id}
                      todo={todoItem}
                      todoList={todoList}
                      setTodoList={setTodoList}
                    />
                  )
              )}
        </div>
      </div>
    </div>
  );
};
