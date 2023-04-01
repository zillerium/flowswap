import React from "react";
import { Card } from "react-bootstrap";

const DataBox = ({ title, data }) => {
  return (
    <Card className="text-center border-1">
      <Card.Body>
        <Card.Title className="h6">{title}</Card.Title>
        <Card.Text className="small">{data}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DataBox;
