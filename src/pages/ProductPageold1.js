import {useParams, useLocation, useNavigate} from "react-router-dom";
import React, {useState, useContext} from 'react';
import axios from 'axios';
import {useQuery}  from 'react-query';
import {Container, Button, Row, Col, Image} from 'react-bootstrap';

import {CartContext} from '../CartContext';

const ProductPage = (props) => {
const [search, setSearch] = useState("");
const {productId}=useParams();
const cart=useContext(CartContext);
const baseUrl = "https://peacioapi.com:3000/getHouse/"+productId;

console.log(baseUrl);
      const {data, isLoading, isError, refetch}= useQuery(["cat"],() => {
               return   axios.get(baseUrl).then((res)=>res.data);
      });

if (isError) {
    return <h1>error</h1>
}

	if (isLoading) return <h1>Loading ..</h1>
console.log(data.data[0]);
	  const searchDB = async (searchVal) => {

          const baseUrl = "https://peacioapi.com:3000/getHouse/"+searchVal;
          let res = await axios.get(baseUrl);
               console.log("res");
               console.log(res.data);
          return res;
	  }
        console.log("productId = "+productId);
        console.log(cart);
      const imgurl =`${data.data[0].assetImageUrl}`;
console.log(imgurl);
        return (
          <>
 
        <div>
            <h1>{data.data[0].assetAddress} </h1>
        </div>
        <div>
            <Container>
                <Row>
                    <Col>
                        <img src={imgurl} className="img-fluid shadow-4" alt={data.data[0].assetAddress} />
                    </Col>
                    <Col>
                        <Row>
                            <Col>Asset Owner Name: {data.data[0].assetOwnerName}</Col>
                        </Row>
                        <Row>
                            <Col>Asset Address: {data.data[0].assetAddress}</Col>
                        </Row>
                        <Row>
                            <Col>Asset Value: {data.data[0].assetValue}</Col>
                        </Row>
                        <Row>
                            <Col>Asset Number of Shares: {data.data[0].assetNumberShares}</Col>
                        </Row>
                        <Row>
                            <Col>Has Tenant: {data.data[0].hasTenant ? "YES" : "NO"}</Col>
                        </Row>
                        <Row>
                            <Col>Has Garden: {data.data[0].hasGarden ? "YES" : "NO"}</Col>
                        </Row>
                        <Row>
                            <Col>Has Parking: {data.data[0].hasParking ? "YES" : "NO"}</Col>
                        </Row>
                        <Row>
                            <Col>Asset Image URL: {data.data[0].assetImageUrl}</Col>
                        </Row>
                        <Row>
                            <Col>Asset URL: {data.data[0].assetUrl}</Col>
                        </Row>
                        <Row>
                            <Col>Asset Income: {data.data[0].assetIncome}</Col>
                        </Row>
                        <Row>
                            <Col>Asset Yield: {data.data[0].assetYield}</Col>
                        </Row>
                        <Row>
                            <Col>Asset Number of Bathrooms: {data.data[0].assetNumberBathrooms}</Col>
                        </Row>
                        <Row>
                            <Col>Asset Number of Bedrooms: {data.data[0].assetNumberBedrooms}</Col>
                        </Row>
                        <Row>
                            <Col>Asset House Type: {data.data[0].assetHouseType}</Col>
                        </Row>
                        <Row>
                            <Col>Has Double Glazing: {data.data[0].hasDoubleGlazing ? "YES" : "NO"}</Col>
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
                        <Row>
                            <Col>
                                <Button sm="6" onClick={()=>cart.addOneToCart(data.data[0])} className="mx-2">Add to Cart</Button>
                            </Col>
                        </Row>
                    </Col> 
                </Row>
                <hr />
            </Container>
        </div>
    </>
)
 
}

export default ProductPage;

