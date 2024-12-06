import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/Components/Header/Header';
// import Navbar from '../src/Components/Navbar/Navbar';
import Counter from '../src/Pages/Counter/Counter';
import ShowInput from '../src/Pages/ShowInput/ShowInput';
import ToggleSwitch from '../src/Pages/ToggleSwitch/ToggleSwitch';
import ColorChanger from './Pages/ColorChanger/ColorChanger';
import Home from './Pages/Home/Home';
import FetchData from './Pages/FetchData/FetchData';

function App() { 
  return (
    <BrowserRouter>
      <Header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }} />
      <Container fluid>
        <Row>
          <Col className="p-2">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/showinput" element={<ShowInput />} />
                <Route path="/toggleswitch" element={<ToggleSwitch />} />
                <Route path="/colorchanger" element={<ColorChanger />} />
                <Route path="/fetchdata" element={<FetchData />} />
              </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
