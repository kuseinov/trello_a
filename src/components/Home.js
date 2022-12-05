import React, { useState } from "react";
import List from "./List";
import Form from "./Form";
import styled from "styled-components";

function Home() {
  const [isshow, setShow] = useState(false);

  return (
    <div className="App">
      <Box>
        <List />
        {isshow ? (
          <div>
            <Form setShow={setShow} />
          </div>
        ) : (
          <BtnClick>
            <button onClick={() => setShow(true)}> + добавить список</button>
          </BtnClick>
        )}
      </Box>
    </div>
  );
}
const Box = styled.div`
  display: flex;
  button {
    height: 30px;
  }
`;
const BtnClick = styled.div`
  margin-left: 20px;
  button {
    border: none;
    width: 200px;
    border-radius: 3px;
    background-color: #e5e5e5;
    &:hover,
    &:focus {
      background-color: #cccccc;
    }
  }
`;
export default Home;
