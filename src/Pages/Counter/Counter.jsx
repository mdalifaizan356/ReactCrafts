// import { useState } from 'react';
// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const [continueIncreement, setIncreement] = useState(true);
//   const [continueDecreement, setDecreement] = useState(true);
//   // const [negative, setNegative] = useState(true);


//   function increment() {
//     if(continueIncreement==true){
//       setCount(count + 1);
//     }
//   }

//   function decrement() {
//     if(continueDecreement==true && count>0){
//       setCount(count - 1);
//     }
//     // if(negative==true){
//     //   if(count>0){
//     //     setCount(count - 1);
//     //   }
//     // }
//   }

//   function reset() { 
//     setCount(0);
//   }

// function increementFlow(){
//   setIncreement(continueIncreement === true ? false : true);
// }

// function decreementFlow(){
//   setDecreement(continueDecreement === true ? false : true);
// }

// // function stopNegative(){
// //     setNegative(negative === true ? false : true);
// // }

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col xs={12} md={8} className="bg-dark text-white text-center p-3">
//           <h1>{count}</h1>
//           <Button variant="outline-primary" className="m-2" onClick={increment}>Increment</Button>
//           <Button variant="outline-primary" className="m-2" onClick={decrement}>Decrement</Button>
//           <Button variant="outline-primary" className="m-2" onClick={reset}>Reset</Button><br/>
//           <Button variant="outline-primary" className="m-2" onClick={increementFlow}>{continueIncreement === true ? "Stop Increement" : "Continue Increement"}</Button><br/>
//           <Button variant="outline-primary" className="m-2" onClick={decreementFlow}>{continueDecreement === true ? "Stop Decreement" : "Continue Decreement"}</Button><br/>
//           {/* <Button variant="outline-primary" className="m-2" onClick={stopNegative}>Stop Negative</Button> */}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Counter;







import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Home/Home';
// import Navbar from '../src/Components/Navbar/Navbar';
// // import Counter from '../src/Pages/Counter/Counter';
// import ShowInput from '../src/Pages/ShowInput/ShowInput';
// import ToggleSwitch from '../src/Pages/ToggleSwitch/ToggleSwitch';
// import ColorChanger from './Pages/ColorChanger/ColorChanger';
// import Home from './Pages/Home/Home';

function Counter() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col md={8} className="p-2">
            <Container fluid style={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                {/* <Route path="/showinput" element={<ShowInput />} />
                <Route path="/toggleswitch" element={<ToggleSwitch />} />
                <Route path="/colorchanger" element={<ColorChanger />} /> */}
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

export default Counter;
