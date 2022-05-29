import React from "react";

export const InputArea = (props) => {
  const { todoText, onChangeTodoText, onClickAdd, disabled } = props;
  return (
    <div style={inputArea}>
      <input
        value={todoText}
        onChange={onChangeTodoText}
        placeholder="TODOを入力"
        style={inputTodo}
        disabled={disabled}
      />
      <button disabled={disabled} onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
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
