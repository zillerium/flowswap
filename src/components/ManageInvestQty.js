import React, { useState } from "react";
import { Form, Col, Button, Alert } from "react-bootstrap";

const ManageInvestQty = ({ quantity, onQuantityChange, onAddToCart, maxQuantity }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > maxQuantity) {
      setShowAlert(true);
    } else {
      onQuantityChange(newQuantity);
      setShowAlert(false);
    }
  };

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      onAddToCart();
    }}>
      <Form.Group controlId="quantity" className="d-flex align-items-center">
        <Form.Label column sm="5">Number Shares to Buy:</Form.Label>
        <Col sm="7" className="d-flex align-items-center">
          <Button variant="outline-primary" size="sm" style={{ height: "100%" }} onClick={handleDecrease}>-</Button>
          <Form.Control
            type="number"
            min="1"
            max={maxQuantity}
            value={quantity}
            onChange={handleQuantityChange}
            style={{ width: "80px", margin: "0px 5px", textAlign: "center", height: "100%" }}
          />
          <Button variant="outline-primary" size="sm" style={{ height: "100%" }} onClick={handleIncrease} disabled={quantity >= maxQuantity}>+</Button>
          <Button type="submit" variant="success" style={{ marginLeft: "10px", height: "100%" }}>
            Invest
          </Button>
        </Col>
      </Form.Group>
      {showAlert && (
        <Alert variant="danger">
          Maximum quantity allowed is {maxQuantity}.
        </Alert>
      )}
    </Form>
  );
};

export default ManageInvestQty;
