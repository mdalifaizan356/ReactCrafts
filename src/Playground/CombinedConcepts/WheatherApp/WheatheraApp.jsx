import { useState, useEffect } from "react";
import React from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import axios from "axios";
import ProjectInfo from "../../../Components/ProjectInfo/ProjectInfo";
import "bootstrap/dist/css/bootstrap.min.css";

const WheatherApp = () => {
  const [search, setSearch] = useState("")


  const locationData = {
    India: {
      Maharashtra: ["Mumbai", "Pune", "Nagpur"],
      "Uttar Pradesh": ["Lucknow", "Varanasi", "Agra"],
    },
    USA: {
      California: ["Los Angeles", "San Francisco", "San Diego"],
      Texas: ["Houston", "Dallas", "Austin"],
    },
  };
  
  
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
  
    const handleCountryChange = (e) => {
      const country = e.target.value;
      setSelectedCountry(country);
      setSelectedState("");
      setStates(Object.keys(locationData[country] || {}));
      setCities([]);
    };
  
    const handleStateChange = (e) => {
      const state = e.target.value;
      setSelectedState(state);
      setCities(locationData[selectedCountry][state] || []);
    };

  return (
    <>
      <Container fluid>
        <Row>
            <Col>
                <ProjectInfo projectId="wheatherApp" />
            </Col>
        </Row>

        <Row className="mt-5">
          <Col xs={12} className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-5">
            <input type="search" placeholder="Enter City" className="form-control flex-grow-1" value={search} style={{ minWidth: "50px" }} readOnly />
          </Col>
        </Row>

        <Row>
          <Col>
          <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Location Selector</h2>

      {/* Country Select */}
      <div className="mb-4">
        <label className="block mb-1">Select Country:</label>
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          className="border p-2"
        >
          <option value="">-- Choose Country --</option>
          {Object.keys(locationData).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {/* State Select */}
      <div className="mb-4">
        <label className="block mb-1">Select State:</label>
        <select
          value={selectedState}
          onChange={handleStateChange}
          className="border p-2"
          disabled={!selectedCountry}
        >
          <option value="">-- Choose State --</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* City Select */}
      <div>
        <label className="block mb-1">Select City:</label>
        <select className="border p-2" disabled={!selectedState}>
          <option value="">-- Choose City --</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WheatherApp;