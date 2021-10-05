import * as React from "react";
import { TodoForm } from "../4/components/TodoApp/TodoForm";
import { TodoList } from "../4/components/TodoApp/TodoList";
import useLocalStorage from "use-local-storage";

// Components
/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 4
 */

// Style
/*
 * Use this less file to create your own styles.
 */
import "./index.less";

export interface TodoListProps {
  todoList: {
    title: string;
    id: string;
    done: boolean;
  }[];
  setTodoList: Function;
}

const Task6 = () => {
  interface ITodo {
    id: string;
    title: string;
    done: boolean;
  }

  const [todoList, setTodoList] = useLocalStorage<ITodo[]>("todoList", []);

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#d84315" }}>Todo App</h1>
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default Task6;
