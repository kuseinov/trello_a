import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../Slice/AddToDoSlice";
import { BiX } from "react-icons/bi";

import styled from "styled-components";

function Form({ setShow }) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const cumitHandler = (e) => {
    if (value.trim().length) {
      e.preventDefault();
      dispatch(
        addToDo({ value: value, id: Math.random().toString(), subtasks: [] })
      );
      setValue("");
    } else alert("sdf");
  };
  return (
    <div>
      <Forma onSubmit={cumitHandler}>
        <Input
          placeholder="Ввести заголовок списка"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Box2>
          <Button type="submit" onClick={cumitHandler}>
            Добавить список
          </Button>
          <Close onClick={() => setShow(false)}>
            <BiX />
          </Close>
        </Box2>
      </Forma>
    </div>
  );
}

const Forma = styled.form`
  width: 250px;
  height: 70px;
  background-color: #ffffff3d;
  margin-left: 10px;
  border-radius: 4px;
  margin-top: 30px;
`;

const Input = styled.input`
  outline: none;
  border: 2px solid #0079bf;
  width: 200px;
  padding: 5px 20px;
  border-radius: 4px;
  margin-left: 3px;
`;

const Box2 = styled.div`
  margin-left: 3px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Button = styled.button`
  width: 150px;
  padding: 7px 0;
  margin-top: 7px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #0079bf;
`;

const Close = styled.div`
  font-size: 25px;
  margin-left: 10px;
  width: 30px;
  height: 30px;
  text-align: center;
  margin-top: 3px;

  &:hover {
    cursor: pointer;
    background-color: grey;
    border-radius: 4px;
  }
`;

export default Form;
