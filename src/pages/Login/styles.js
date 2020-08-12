import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: var(--background);
`;

export const Form = styled.form`
  box-shadow: 0 3px 6px #00000029;
  padding: 30px 0;
  background: var(--grayMedium);
  margin: auto;
  max-width: 50%;
`;

export const ImageContainer = styled.div`
  width: 60%;
  margin: auto;
  padding-bottom: 18px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const H2 = styled.h2`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  margin: 0;
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
