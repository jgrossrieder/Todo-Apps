import React from "react";
import TodoItem from "../todo-item/todo-item";

class TodoList extends React.Component {
  state = {
    todos: [],
    todo_input: {
      btn_disabled: true,
      input_text: "",
    },
  };

  render() {
    const todoList = this.props.todos.map((todo, i) => {
      return (
        <TodoItem
          key={i}
          value={todo}
          deleteTodo={() => this.props.delete(i)}
        />
      );
    });
    return todoList;
  }
}
export default TodoList;
