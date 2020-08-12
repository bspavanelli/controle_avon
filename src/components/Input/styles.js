import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding-top: 13px;
`;

export const Label = styled.label`
  pointer-events: none;
  position: absolute;
  top: calc(50% - 8px);
  left: 15px;
  transition: all 0.2s linear;
  background: var(--grayMedium);
  padding: 5px;
  box-sizing: border-box;
`;

export const InputText = styled.input`
  background: var(--grayMedium);
  border: 2px solid darkgray;
  border-radius: 5px;
  outline: none;
  min-width: 250px;
  padding: 15px 20px;
  font-size: 1em;
  transition: all 0.1s linear;

  &:focus {
    border: 2px solid #3951b2;
  }

  &::placeholder {
    color: transparent;
  }

  &:focus + label {
    font-size: 13px;
    top: 0;
    color: #3951b2;
  }

  &:not(:placeholder-shown) + label {
    font-size: 13px;
    top: 0;
    color: #3951b2;
  }
`;
