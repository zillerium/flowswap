import React from "react";
import { Col, Row } from "react-bootstrap";

const AssetFinancials = ({
  assetValue,
  assetIncome,
  assetYield,
  assetRiskRating,
  assetNumberShares,
}) => {
  return (
    <div className="border border-dark p-3">
      <Row className="my-4">
        <Col md={6} className="text-left">
          <div className="font-weight-bold mb-1">Asset Value</div>
        </Col>
        <Col md={6} className="text-left">
          <div className="mb-1">{assetValue.toLocaleString()} GBP</div>
        </Col>
      </Row>
      <div className="border-bottom"></div>
      <Row className="my-4">
        <Col md={6} className="text-left">
          <div className="font-weight-bold mb-1">Income</div>
        </Col>
        <Col md={6} className="text-left">
          <div className="mb-1">{assetIncome.toLocaleString()} GBP</div>
        </Col>
      </Row>
      <div className="border-bottom"></div>
      <Row className="my-4">
        <Col md={6} className="text-left">
          <div className="font-weight-bold mb-1">Yield</div>
        </Col>
        <Col md={6} className="text-left">
          <div className="mb-1">{assetYield}%</div>
        </Col>
      </Row>
      <div className="border-bottom"></div>
      <Row className="my-4">
        <Col md={6} className="text-left">
          <div className="font-weight-bold mb-1">Risk</div>
        </Col>
        <Col md={6} className="text-left">
          <div className="mb-1">{assetRiskRating}</div>
        </Col>
      </Row>
      <div className="border-bottom"></div>
      <Row className="my-4">
        <Col md={6} className="text-left">
          <div className="font-weight-bold mb-1">Number shares</div>
        </Col>
        <Col md={6} className="text-left">
          <div className="mb-1">{assetNumberShares.toLocaleString()}</div>
        </Col>
      </Row>
    </div>
  );
};

export default AssetFinancials;
