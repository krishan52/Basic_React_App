import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoLIst() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let lowerCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toLowerCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let lowerCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toLowerCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
        prevTodos.map((todo) => {
          if (todo.id == id) {
            return {
              ...todo,
              isDone: true
            };
          } else {
            return todo;
          }
        })
      );
  };

  let markAllAsDone = (id) => {
    setTodos((prevTodos) =>
        prevTodos.map((todo) => {
            return {
                ...todo,
                isDone: true
              };
        })
      );
  };

  let unMark = (id) => {
    setTodos((prevTodos) =>
        prevTodos.map((todo) => {
          if (todo.id == id) {
            return {
              ...todo,
              isDone: false
            };
          } else {
            return todo;
          }
        })
      );
  };

  let unMarkAll = (id) => {
    setTodos((prevTodos) =>
        prevTodos.map((todo) => {
            return {
                ...todo,
                isDone: false
              };
        })
      );
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
        style={{ height: "40px", width: "300px", borderRadius: "5px", backgroundColor:"white",color:"black"}}
      />
      <br />
      <br />
      <button onClick={addNewTask} style={{backgroundColor:"green"}}>Add Tasks</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <hr />
      <h4>Tasks to do:</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? {textDecorationLine:"line-through"}: {textDecorationLine:"none"}}>{todo.task}</span>
            <br /><br />
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={() => lowerCaseOne(todo.id)}>LowerCase One</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={() => unMark(todo.id)}>Unmark</button>

            <br />
            <br />
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>UpperCase All</button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button onClick={lowerCaseAll}>LowerCase All</button> 
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button onClick={markAllAsDone}>Mark All As Done</button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button onClick={unMarkAll}>Unmark All</button>

    </div>
  );
}
