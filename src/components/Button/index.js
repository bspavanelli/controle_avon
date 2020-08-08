import React from "react";
import {ButtonField} from './styles';

function Button(props) {
  return (
    <div>
      <ButtonField {...props}>
        {props.children}
      </ButtonField>
    </div>
  );
}

export default Button;
