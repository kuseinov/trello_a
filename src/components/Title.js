import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addSubTask } from "../Slice/AddToDoSlice";
import { BiX } from "react-icons/bi";

function Title({ value, todoId, subtasks }) {
  const [cardList, setCardList] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    if (text.trim().length) {
      dispatch(
        addSubTask({
          todoId,
          subtask: { title: text, id: Math.random().toString() },
        })
      );
    }
    setText("");
  }
  return (
    <StyledGlav>
      <Card>
        <H1>{value}</H1>
      </Card>
      <>
        {subtasks.map((subtask) => {
          return (
            <StyledCard key={subtask.todoId}>
              <Textarea defaultValue={subtask.title} id="" cols="30" rows="5" />
            </StyledCard>
          );
        })}
      </>
      {cardList ? (
        <StyledContainer>
          <InputCard
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ввести заголовок для этой карточки"
          />
          <Btn>
            <Add onClick={handleClick}>Добавить карточку</Add>
            <Span onClick={() => setCardList(false)}>
              <BiX />
            </Span>
          </Btn>
        </StyledContainer>
      ) : (
        <div>
          <Davavit onClick={() => setCardList(true)}>Добавить Карточку</Davavit>
        </div>
      )}
    </StyledGlav>
  );
}

export default Title;
const Span = styled.span`
  width: 30px;
  height: 4px;
  text-align: center;
  margin-top: 3px;
`;
const Add = styled.button`
  background-color: #0079bf;
  border: none;
  color: wheat;
  border-radius: 4px;
  width: 150px;
`;

const Davavit = styled.button`
  margin-top: 20px;
  width: 200px;
  color: #696969;
  border: none;
  width: 200px;
  margin-left: 20px;
  border-radius: 3px;
  background-color: #e5e5e5;
  &:hover,
  &:focus {
    background-color: #cccccc;
  }
`;
const Btn = styled.div`
  display: flex;
  gap: 10px;
`;
const InputCard = styled.input`
  width: 267px;
  height: 40px;
  border: none;
  border-radius: 4px;
  outline: none;
`;
const StyledGlav = styled.div`
  width: 300px;
  padding: 10px;
  background: #f5f5f5;
  flex-direction: column;
  align-items: center;
`;
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledContainer = styled.div`
  width: 200px;
  display: grid;
  margin-top: 10px;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 10px;
`;
const Card = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Textarea = styled.textarea`
  background-color: #ffffff;
  padding-left: 10px;
  border: none;
  width: 260px;
  height: 23px;
  border-radius: 3px;
  border-radius: 5px;
  margin-top: 6px;
  resize: none;
`;
const H1 = styled.h1`
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
  font-size: 20px;
  padding-right: 140px;
`;
