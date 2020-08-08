import React from 'react';
import logo from '../../assets/logo.svg';
import { App, AppHeader, AppLogo, AppLink } from './styles';
import PageDefault from '../../components/PageDefault';

function Home() {
  return (
    <PageDefault>
      <App>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>
        </AppHeader>
      </App>
    </PageDefault>
  );
}

export default Home;
