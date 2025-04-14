import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/Components/Header/Header';
import Home from './Playground/Home/Home';
import Counter from './Playground/ReactConcepts/Hooks/useState/Counter';
import ShowInput from './Playground/ReactConcepts/Hooks/useState/ShowInput';
import ToggleSwitch from './Playground/ReactConcepts/Hooks/useState/ToggleSwitch';
import ColorChanger from './Playground/ReactConcepts/Hooks/useState/ColorChanger';
import ToDoList from './Playground/ReactConcepts/Hooks/useState/ToDoList';
import FetchData from './Playground/ReactConcepts/Hooks/useEffect/FetchData';
import ProfileCard from './Playground/ReactConcepts/JSX/ProfileCard';
import PropsImplimentation from './Playground/ReactConcepts/Props/PropsImplimentation';
import WheartherApp from './Playground/ReactConcepts/Hooks/useEffect/WheatheraApp';


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
                <Route path="/todolist" element={<ToDoList />} />
                <Route path="/fetchdata" element={<FetchData />} />
                <Route path="/profilecard" element={<ProfileCard />} />
                <Route path="/propsimplimentation" element={<PropsImplimentation />} />
                <Route path="/wheartherapp" element={<WheartherApp />} />

              </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
