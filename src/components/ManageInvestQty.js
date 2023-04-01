// ManageInvestQty.js
import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const ManageInvestQty = ({ quantity, onQuantityChange, onAddToCart }) => {
  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      onAddToCart();
    }}>
      <Form.Group controlId="quantity" className="d-flex align-items-center">
        <Form.Label column sm="5">Number Shares to Buy:</Form.Label>
        <Col sm="5">
          <Form.Control
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => onQuantityChange(parseInt(e.target.value))}
          />
        </Col>
        <Col sm="2">
          <Button type="submit" variant="success">
            Invest
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default ManageInvestQty;
