import React from 'react';
import { Provider } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { Route, Routes, Navigate } from 'react-router-dom';

import { createAppStore } from './redux/stores/AppStore';
import { Header } from './components/layout/header';
import { Home } from './components/pages/home';
import { Page1 } from './components/pages/page1';

export const App = () => (
    <Provider store={createAppStore()}>
      <Header />
      <Container className="pt-3">
        <Routes>        
          <Route path='/' element={<Home />} exact={true} />
          <Route path='/page1' element={<Page1 />} exact={true} />
          <Route path="/" element={<Navigate replace to="/home" />} />         
        </Routes>
      </Container>
    </Provider>
);

export default App;
