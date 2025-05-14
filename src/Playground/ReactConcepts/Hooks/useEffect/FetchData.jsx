import { useState, useEffect } from "react";
import React from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import axios from "axios";
import ProjectInfo from "../../../../Components/ProjectInfo/ProjectInfo";
import "bootstrap/dist/css/bootstrap.min.css";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");


  // 🟢 useEffect([]) → Run once on mount to fetch data
  useEffect(() => {
    const ProductAPI = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
      setFilteredData(res.data);
    };
    ProductAPI();
  }, []);

  // 🔵 useEffect([search]) → Run when search changes
  useEffect(() => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search]);

  useEffect(() => {
    console.log("🔁 Component rendered");
  });

  const viewHandler = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <ProjectInfo projectId="useEffectFetchData" />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col
            xs={12}
            className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-5"
          >
            <input
              type="search"
              placeholder="Search Product"
              className="form-control flex-grow-1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "25%" }}
            />
            <Button variant="outline-primary" className="bg-dark">Low Price</Button>
            <Button variant="outline-primary" className="bg-dark">High Price</Button>
            <Button variant="outline-primary" className="bg-dark">Low Rating</Button>
            <Button variant="outline-primary" className="bg-dark">High Rating</Button>
          </Col>
        </Row>
        <Row>
  <Col>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
      }}
    >
      {filteredData.length > 0 ? (
        filteredData.map((product) => (
          <Card
            key={product.id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Card.Img
              variant="top"
              src={product.image}
              style={{ height: "200px", objectFit: "contain" }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ fontSize: "1rem", flexGrow: 1 }}>
                {product.title}
              </Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <div className="mt-auto">
                <Button
                  variant="primary"
                  onClick={() => viewHandler(product)}
                  className="w-100"
                >
                  View Details
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </Col>
</Row>

      </Container>

      {/* Modal for product details */}
      {selectedProduct && (
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              style={{ width: "100%", marginBottom: "10px", objectFit: "contain" }}
            />
            <p>
              <strong>Price:</strong> ${selectedProduct.price}
            </p>
            <p>
              <strong>Description:</strong> {selectedProduct.description}
            </p>
            <p>
              <strong>Category:</strong> {selectedProduct.category}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default FetchData;
