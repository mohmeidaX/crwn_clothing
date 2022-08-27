import './App.css';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.components';
import SignInPage from './pages/signIn/sign-in.components';
import React from 'react';
import { Routes , Route}  from 'react-router-dom';
import Header from './components/header/header.componenet';

function App() {
  return (
    <div>
    <Header />
      <Routes>
        <Route exact path ='/' element = {<HomePage/>}/>
        <Route path ='/shop' element = {<ShopPage/>} />
        <Route path ='/sign-in' element = {<SignInPage/>} />
      </Routes>
    </div>
  );
}

export default App;
