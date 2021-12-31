import './App.css';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.components';
import React from 'react';
import { Routes  , Route}  from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path ='/' element = {<HomePage/>}/>
        <Route path ='/shop' element = {<ShopPage/>} />
      </Routes>
    </div>
  );
}

export default App;
