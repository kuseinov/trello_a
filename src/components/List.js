import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Title from "./Title";

function List() {
  const todo = useSelector((state) => state.addToDo.todo);

  return (
    <ListStyled>
      {todo.map((item) => {
        return (
          <Title
            key={item.id}
            value={item.value}
            todoId={item.id}
            subtasks={item.subtasks}
         
          />
        );
      })}
    </ListStyled>
  );
}

export default List;

const ListStyled = styled.div`
  & {
    gap: 20px;
    display: flex;
    margin-top: 30px;
  }
`;
