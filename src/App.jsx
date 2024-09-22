import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "../src/Components/Header/Header"
import Navbar from "../src/Components/Navbar/Navbar"
import Counter from "../src/Pages/Counter/Counter"
import ItemList from "../src/Pages/ItemList/ItemList"
import ShowInput from "../src/Pages/ShowInput/ShowInput"
import ToggleSwitch from "../src/Pages/ToggleSwitch/ToggleSwitch"
import ExpenceTraker from "../src/Pages/ExpenceTraker/ExpenceTraker"

function App() {

  return(
    <>
      <BrowserRouter>
      {/* <Header /> */}
      <div className='container-fluid containerSCss'>
        <div className='row'>
          <div className='col-2 colSCss'>
            <Navbar/>
          </div>
          <div className='col-10 colSCss'>
          <Routes>
          <Route path='/counter' element = {<Counter/>} />
          <Route path='/itemlist' element = {<ItemList/>} />
          <Route path='/showinput' element = {<ShowInput/>} />
          <Route path='/toggleswitch' element = {<ToggleSwitch/>} />
          <Route path='/expencetraker' element = {<ExpenceTraker/>} />
        </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
