import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer/index.';

const Main = styled.main`
  background-color: var(--backgroundColor);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

function PageDefault({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

PageDefault.propTypes = {
  children: PropTypes.any,
};

export default PageDefault;
