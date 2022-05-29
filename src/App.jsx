import React, { useState } from "react";
import "./styles.css";
import { InputArea } from "./components/InputArea";
import { IncompleteArea } from "./components/IncompleteArea";
import { CompleteArea } from "./components/CompleteArea";

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

  const onClickBack = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <h1>Todoアプリ</h1>
      <InputArea
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={limitText}>TODOが上限だよ。いったん消化してみよかー</p>
      )}
      <IncompleteArea
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteArea todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};

const limitText = {
  padding: "5px",
  color: "red"
};
