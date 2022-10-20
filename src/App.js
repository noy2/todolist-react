import TodoList from "./TodoList";
import styled, { css, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: "SUIT";
  }
`;

const Background = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Background>
        <TodoList />
      </Background>
    </div>
  );
}
