import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, InputText } from './styles';

function Input(props) {
  return (
    <Container>
      <Label>
        {props.label}
        <InputText {...props} />
      </Label>
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string,
};

export default Input;
