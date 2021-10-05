import * as React from "react";

type TodoItem = {
  todo: {
    title: string;
    id: string;
    done: boolean;
  };
  todoList: {
    title: string;
    id: string;
    done: boolean;
  }[];
  setTodoList: Function;
};

export const TodoItem = ({ todo, setTodoList, todoList }: TodoItem) => {
  const onDelete = () => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== todo.id));
  };

  const toggleStatus = () => {
    setTodoList(
      todoList.map((todoItem) => {
        if (todoItem.id === todo.id) {
          return {
            ...todoItem,
            done: !todoItem.done,
          };
        }
        return todoItem;
      })
    );
  };
  return (
    <div style={{ marginBottom: "35px" }}>
      <p className='title'>{todo.title}</p>
      <div className='buttons-div'>
        <button className='delete' onClick={() => onDelete()}>
          Delete
        </button>
        <button
          className={`${todo.done === false ? "pending" : "completed"}`}
          onClick={() => toggleStatus()}
        >
          {todo.done === false ? "Pending" : "Completed"}
        </button>
      </div>
    </div>
  );
};
