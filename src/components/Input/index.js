import React from "react";
import { Container, Label, InputText } from "./styles";

function Input(props) {
  return (
    <Container>
      <Label>
        {props.label}
        <InputText {...props}></InputText>
      </Label>
    </Container>
  );
}

export default Input;
