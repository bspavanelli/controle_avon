import React from 'react';
import PropTypes from 'prop-types';
import { ButtonField } from './styles';

function Button(props) {
  return (
    <div>
      <ButtonField {...props}>{props.children}</ButtonField>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
