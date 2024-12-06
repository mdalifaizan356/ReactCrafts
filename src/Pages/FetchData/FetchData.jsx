import { useState, useEffect, React } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import axios from 'axios';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState()
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const ProductAPI = async () => {
    const ProductAPIResult = await axios.get('https://fakestoreapi.com/products');
    setData(ProductAPIResult.data);
  };

  useEffect(() => {
    ProductAPI();
  }, []);

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
    <input type='search' placeholder='Search Product' className='mb-5'/>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {data.length > 0 ? (
          data.map((product) => (
            <Card style={{ width: '18rem', marginBottom: '10px' }} key={product.id}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary" onClick={() => viewHandler(product)}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {selectedProduct && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              style={{ width: '100%', marginBottom: '10px' }}
            />
            <p><strong>Price:</strong> ${selectedProduct.price}</p>
            <p><strong>Description:</strong> {selectedProduct.description}</p>
            <p><strong>Category:</strong> {selectedProduct.category}</p>
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


//new componet bana kar data props k threw send kar k
// jaha api call ho rhi he use me api data  set kar k usi component me individual data ko show karwa kar 
// Model ka use kar k
//compare fxn
//filter
//lazy-loading