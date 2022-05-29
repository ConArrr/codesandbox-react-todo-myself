import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // state
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // 関数
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    const newIncompleteTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newIncompleteTodos);

    setTodoText("");
  };

  const onClickDelete = (index) => {
    deleteIncompleteTodo(index);
  };

  const onClickComplete = (index) => {
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
    deleteIncompleteTodo(index);
  };

  const deleteIncompleteTodo = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <h1>Todoアプリ</h1>
      <div style={inputArea}>
        <input
          value={todoText}
          onChange={onChangeTodoText}
          placeholder="TODOを入力"
          style={inputTodo}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div style={incompleteArea}>
        <p style={title}>未完了TODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={index}>
                <div style={listRow}>
                  <p style={todoTitle}>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div style={completeArea}>
        <p style={title}>完了TODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={index}>
                <div style={listRow}>
                  <p>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const listRow = {
  display: "flex",
  height: "25px",
  verticalAlign: "middle",
  margin: "8px 0px"
};

const todoTitle = {
  marginRight: "5px"
};

const inputArea = {
  padding: "8px",
  backgroundColor: "#dff",
  border: "none"
};

const inputTodo = {
  borderRadius: "16px",
  padding: "5px 16px",
  border: "none"
};

const todoArea = {
  minHeight: "150px"
};

const incompleteArea = {
  ...todoArea,
  margin: "5px",
  padding: "8px",
  backgroundColor: "#fdf",
  border: "none"
};

const completeArea = {
  ...todoArea,
  margin: "5px",
  padding: "8px",
  backgroundColor: "#ffd",
  border: "none"
};

const title = {
  textAlign: "center",
  color: "#666"
};
