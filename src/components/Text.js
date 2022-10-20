import styled, { css } from "styled-components";

const Text = styled.div`
  font-size: 16px;
  ${(props) =>
    props.checked &&
    css`
      color: #b4b4b4;
      text-decoration: line-through;
    `};
`;

export default Text;
