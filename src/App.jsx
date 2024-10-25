import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/Components/Header/Header';
import Navbar from '../src/Components/Navbar/Navbar';
import Counter from '../src/Pages/Counter/Counter';
import ItemList from '../src/Pages/ItemList/ItemList';
import ShowInput from '../src/Pages/ShowInput/ShowInput';
import ToggleSwitch from '../src/Pages/ToggleSwitch/ToggleSwitch';
import ColorChanger from './Pages/ColorChanger/ColorChanger';

function App() {
  return (
    <BrowserRouter>
      <Header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }} />
      <Container fluid>
        <Row>
          <Col md={2} className="bg-light">
            <Navbar />
          </Col>
          <Col md={10} className="p-4">
            <Container fluid className="bg-danger" style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Routes>
                <Route path="/" element={<Counter />} />
                <Route path="/counter" element={<Counter />} />
                {/* <Route path="/itemlist" element={<ItemList />} /> */}
                <Route path="/showinput" element={<ShowInput />} />
                <Route path="/toggleswitch" element={<ToggleSwitch />} />
                <Route path="/colorchanger" element={<ColorChanger />} />
              </Routes>
            </Container>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
