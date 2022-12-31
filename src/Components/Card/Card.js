import React, { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";

const CardBox = ({ burger }) => {

    const [varients,setVarients] = useState('small');
    const [quantity,setQuantity] = useState(1);
    const [modalShow, setModalShow] = useState(false);
    const price = burger.prices[0][varients]*quantity;

  return (
    <div style={{ marginTop: "20px" }}>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          style={{ height: "200px", cursor:"pointer" }}
          src={burger.image}
          fluid
         onClick={() => setModalShow(true)}
        />
        <Card.Body>
          <Card.Title>{burger.name}</Card.Title>
          <Card.Text>
            <Row className="mt-3">
              <Col md={6}>
                <h6>Varient</h6>
                <div >
                <select style={{borderRadius:"5px"}} value={varients} onChange={e => setVarients(e.target.value)}>
                    {
                        burger.varients.map(varients =>( <option >{varients}</option>))
                    }
                </select>

                </div>
                
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select style={{borderRadius:"5px"}} value={quantity} onChange={e => setQuantity(e.target.value)}>
                    {
                        [...Array(10).keys()].map((v,i) => (<option value={i + 1}>{i + 1}</option>))
                    }
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row className="mt-3">
            <Col md={6}>Price: {price} $</Col>
            <Col md={6}><Button  onClick={() => setModalShow(true)} variant="warning">Add Cart</Button></Col>
          </Row>
          
        </Card.Body>
      </Card>

      
      <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {burger.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
      <img  fluid  style={{ height: "200px" }} src={burger.image} alt="product" />
        <p>
        {burger.details}
        </p>
        <p>Total Price: {price} $</p>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger"onClick={() => setModalShow(false)}>Close</Button>
        <Button variant="warning">Confirm to Order</Button>
      </Modal.Footer>
    </Modal>
     
    </div>
  );
};

export default CardBox;
