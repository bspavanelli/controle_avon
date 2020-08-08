import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--grayMedium);
`;

export const Form = styled.form`
  box-shadow: 0 3px 6px #00000029;
  min-height: 20vh;
  padding: 30px;
`;

export const ImageContainer = styled.div`
  width: 65%;
  margin: auto;
  padding: 0 0 2vh 0;
`;

export const Image = styled.img`
  width: 100%;
`;

export const H2 = styled.h2`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  margin: 0;
  padding: 0 0 3vh 0;
`;

export const FieldsContainer = styled.div`
  padding-top: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  padding-top: 16px;
`;
