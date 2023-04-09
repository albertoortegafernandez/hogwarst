import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./app/pages/Home";
import ButtonEffect from './app/pages/ButtonEffect';
import Users from './app/pages/Users';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={<Home />}></Route>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/home' exact element={<Home/>}></Route>
        <Route path='/users' exact element={<Users/>}></Route>
        <Route path='/button' exact element={<ButtonEffect />}></Route>
      </Routes>
    </>
  )
}
export default App;
