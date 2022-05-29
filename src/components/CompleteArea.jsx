import React from "react";

export const CompleteArea = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div style={completeArea}>
      <p style={title}>完了TODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <div style={listRow}>
                <p style={todoTitle}>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
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
