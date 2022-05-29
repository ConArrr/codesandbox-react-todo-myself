import React from "react";

export const IncompleteArea = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div style={incompleteArea}>
      <p style={title}>未完了TODO</p>
      <ul>
        {todos.map((todo, index) => {
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

const title = {
  textAlign: "center",
  color: "#666"
};
