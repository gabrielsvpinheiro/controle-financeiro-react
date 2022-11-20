import React from 'react'
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Resume from './components/Resume';
import Form from './components/Form';

const App = () => {
  return (
    <>
        <Header />
        <Resume />
        <Form />
        <GlobalStyle />
    </>
  );
};

export default App