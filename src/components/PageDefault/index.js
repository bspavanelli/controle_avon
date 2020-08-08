import React from "react";
import Header from "../Header";
import Footer from "../Footer/index.";
import styled from "styled-components";

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
      <Header></Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </>
  );
}

export default PageDefault;
