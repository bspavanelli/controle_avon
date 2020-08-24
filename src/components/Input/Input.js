import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, InputText } from './styles';

function Input({ label, ...props }) {
  return (
    <Container>
      <InputText placeholder={label} {...props} />
      <Label>{label}</Label>
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string,
};

export default Input;
