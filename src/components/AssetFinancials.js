import React from "react";
import { Col, Row } from "react-bootstrap";

const AssetFinancials = ({
  assetValue,
  assetIncome,
  assetYield,
  assetRiskRating,
  assetNumberShares,
	usdGbpRate
}) => {
  return (
    <div className="border border-dark p-3">
 
<Row className="my-4">
  <Col md={6} className="text-left">
    <div className="font-weight-bold mb-1">Asset Value</div>
  </Col>
  <Col md={3} className="text-left">
    <div className="mb-1">{assetValue?.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} GBP</div>
  </Col>
  <Col md={3} className="text-left">
    <div className="mb-1">{(assetValue * usdGbpRate)?.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} USD</div>
  </Col>
</Row>



      <div className="border-bottom"></div>
 <Row className="my-4">
  <Col md={6} className="text-left">
    <div className="font-weight-bold mb-1">Income</div>
  </Col>
  <Col md={3} className="text-left">
    <div className="mb-1">{assetIncome?.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} GBP</div>
  </Col>
  <Col md={3} className="text-left">
    <div className="mb-1">{(assetIncome * usdGbpRate)?.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} USD</div>
  </Col>
</Row>

      <div className="border-bottom"></div>
      <Row className="my-4">
        <Col md={6} className="text-left">
          <div className="font-weight-bold mb-1">Yield</div>
        </Col>
        <Col md={6} className="text-left">
          <div className="mb-1">{(assetYield / 100)?.toFixed(2)}%</div>
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
          <div className="mb-1">{assetNumberShares?.toLocaleString(2)}</div>
        </Col>
      </Row>
    </div>
  );
};

export default AssetFinancials;
