import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";

import { CartContext } from "../CartContext";

const ProductPage = () => {
  const { productId } = useParams();
  const cart = useContext(CartContext);
  const baseUrl = `https://peacioapi.com:3000/getHouse/${productId}`;

  const { data, isLoading, isError, refetch } = useQuery(
    ["cat"],
    () => axios.get(baseUrl).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  if (isError) {
    return <h1>Error</h1>;
  }

  if (isLoading) return <h1>Loading ..</h1>;

  const onAddToCart = () => {
    cart.addOneToCart(data.data[0]);
  };

  const isYes = (value) => (value ? "YES" : "NO");

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Image
              src={`${data.data[0].assetImageUrl}`}
              className="img-fluid shadow-4"
              alt={data.data[0].assetAddress}
            />
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Row>
              <Col>
                <h1>{data.data[0].assetAddress}</h1>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Form.Check
                  type="checkbox"
                  label="Has Tenant"
                  checked={data.data[0].hasTenant}
                  readOnly
                />
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="Has Garden"
                  checked={data.data[0].hasGarden}
                  readOnly
                />
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="Has Parking"
                  checked={data.data[0].hasParking}
                  readOnly
                />
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="Has Double Glazing"
                  checked={data.data[0].hasDoubleGlazing}
                  readOnly
                />
              </Col>
            </Row>
            <hr />
            <Row className="mt-4">
              <Col>
                <h5>Asset Value: {data.data[0].assetValue}</h5>
              </Col>
              <Col>
                <h5>Asset Income: {data.data[0].assetIncome}</h5>
              </Col>
              <Col>
                <h5>Asset Yield: {data.data[0].assetYield}</h5>
              </Col>
              <Col>
                <h5>Asset Risk Rating: {data.data[0].assetRiskRating}</h5>
              </Col>
            </Row>
            <hr />
            <Row className="mt-4">
              <Col>
                <h5>Asset Owner Name:</h5>
                <p>{data.data[0].assetOwnerName}</p>
              </Col>
            </Row>
            <Row>
                
		
		                        <Col>Number of Shares: {data.data[0].assetNumberShares}</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="hasTenant">
                                <Form.Check type="checkbox" checked={data.data[0].hasTenant} readOnly label="Has Tenant" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="hasGarden">
                                <Form.Check type="checkbox" checked={data.data[0].hasGarden} readOnly label="Has Garden" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="hasParking">
                                <Form.Check type="checkbox" checked={data.data[0].hasParking} readOnly label="Has Parking" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Asset Image URL: {data.data[0].assetImageUrl}</Col>
                    </Row>
                    <Row>
                        <Col>Asset URL: {data.data[0].assetUrl}</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="hasDoubleGlazing">
                                <Form.Check type="checkbox" checked={data.data[0].hasDoubleGlazing} readOnly label="Has Double Glazing" />
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>Asset Risk Rating: {data.data[0].assetRiskRating}</Col>
                    </Row>
                    <Row>
                        <Col>Asset Preferred Notary: {data.data[0].assetPreferredNotary}</Col>
                    </Row>
                    <Row>
                        <Col>Currency: {data.data[0].currency}</Col>
                    </Row>
                </Col> 
            </Row>
            <hr />
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <h2>Asset Summary</h2>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col>Asset Value: {data.data[0].assetValue}</Col>
                            </Row>
                            <Row>
                                <Col>Asset Income: {data.data[0].assetIncome}</Col>
                            </Row>
                            <Row>
                                <Col>Asset Yield: {data.data[0].assetYield}</Col>
                            </Row>
                            <Row>
                                <Col>Asset Risk Rating: {data.data[0].assetRiskRating}</Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <Button sm="6" onClick={()=>cart.addOneToCart(data.data[0])} className="mx-2">Add to Cart</Button>
                                </Col>
                            </Row>
                    
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
</>
);

}

export default ProductPage;
