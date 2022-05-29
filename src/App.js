import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

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
        <button>追加</button>
      </div>
      <div style={incompleteArea}>
        <p style={title}>未完了TODO</p>
        <ul>
          {incompleteTodos.map(() => {
            return (
              <li>
                <div style={listRow}>
                  <p>TODO1</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div style={completeArea}>
        <p style={title}>完了TODO</p>
        <ul>
          {completeTodos.map(() => {
            return (
              <li>
                <div style={listRow}>
                  <p>TODO1</p>
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
  verticalAlign: "middle"
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
