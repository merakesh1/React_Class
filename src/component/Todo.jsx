import React from "react";

export default function Todo() {
  const [todos, setTodos] = React.useState(["item 1", "item 2", "item 3"]);
  return (
    <>
      <TodoCount size={todos}/>
      <TodoList todo={todos}/>
      <AddTodo setTodo={setTodos} todo={todos}/>
    </>
  );
}

const TodoCount=(props)=> {
  return <div>Total Todos:{props.size.length} </div>;
}

function TodoList(props) {
  return (
    <ul>
      {props.todo.map((todo,index) => (
        <li key={todo+index}>{todo}</li>
      ))}
    </ul>
  );
}

function AddTodo(props) {
  const handleSubmit=(event)=> {
    event.preventDefault();
    const todoNew=document.getElementById("todo").value;
    props.setTodo([...props.todo, todoNew]);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
} 