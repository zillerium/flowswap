import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FlowswapSlider from './FlowswapSlider.js';
const Welcome = () => {

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center">Welcome to Flowswap</h1>
          <p className="lead text-center">
            Tokenization of Assets
          </p>
	  <FlowswapSlider />
          <div className="d-flex justify-content-center mt-5">
            <ul className="list-group">
              <li className="list-group-item">Search</li>
              <li className="list-group-item">Trade</li>
              <li className="list-group-item">Settle</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
