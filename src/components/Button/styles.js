import styled from 'styled-components';

export const ButtonField = styled.button`
  box-shadow: inset 0px 1px 0px 0px #89bff5;
  background: linear-gradient(to bottom, #0b96e0 5%, #0061a7 100%);
  border-radius: 5px;
  border: 1px solid #124d77;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 9px 36px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #154682;

  &:hover {
    background: linear-gradient(to bottom, #0061a7 5%, #0b96e0 100%);
    background-color: #0061a7;
  }
  &:active {
    position: relative;
    top: 1px;
  }

  &:disabled {
    background: linear-gradient(to bottom, #999999 5%, #555555 100%);
    box-shadow: inset 0px 1px 0px 0px #aaaaaa;
    border: 1px solid #888888;
  }
`;
