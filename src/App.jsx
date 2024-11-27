import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/Components/Header/Header';
import Navbar from '../src/Components/Navbar/Navbar';
import Counter from '../src/Pages/Counter/Counter';
import ShowInput from '../src/Pages/ShowInput/ShowInput';
import ToggleSwitch from '../src/Pages/ToggleSwitch/ToggleSwitch';
import ColorChanger from './Pages/ColorChanger/ColorChanger';

function App() {
  return (
    <BrowserRouter>
      <Header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }} />
      <Container fluid>
        <Row>
          <Col md={8} className="p-2">
            <Container fluid className="bg-warning" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Routes>
                <Route path="/" element={<Counter />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/showinput" element={<ShowInput />} />
                <Route path="/toggleswitch" element={<ToggleSwitch />} />
                <Route path="/colorchanger" element={<ColorChanger />} />
              </Routes>
            </Container>
          </Col>
          <Col md={1}>
            <h1>Description</h1>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
