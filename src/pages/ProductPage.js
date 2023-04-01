import { useParams } from "react-router-dom";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { ListGroup, Badge, Form, Container, Button, Row, Col } from "react-bootstrap";

import AssetCheckboxList from "../components/AssetCheckboxList";
import AssetFeatures from "../components/AssetFeatures";
import AssetFinancials from "../components/AssetFinancials";
import AssetImages from "../components/AssetImages";
import DataBox from "../components/DataBox";
import ManageInvestQty from "../components/ManageInvestQty";
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

  const onAddToCart = () => {
    cart.addItemsToCart(data.data[0], quantity);
  };


  const [quantity, setQuantity] = useState(1);
const [assetIncomeForQuantity, setAssetIncomeForQuantity] = useState(0);
  const [assetYieldForQuantity, setAssetYieldForQuantity] = useState(0);
  const [assetCostForQuantity, setAssetCostForQuantity] = useState(0);
  const [assetCostPerShare, setAssetCostPerShare] = useState(0);
  const [maxQuantity, setMaxQuantity] = useState(1);

  const onQuantityChange = (quantity) => {
    setQuantity(quantity);
  };

useEffect(()=> {
    if (data && data.data && data.data[0]) {
      setAssetIncomeForQuantity((data.data[0].assetIncome/data.data[0].assetNumberShares)*quantity);
      setAssetYieldForQuantity(((data.data[0].assetIncome/data.data[0].assetNumberShares)*quantity));
      setAssetCostForQuantity((data.data[0].assetValue/data.data[0].assetNumberShares)*quantity.toFixed(2));
      setAssetCostPerShare((data.data[0].assetValue/data.data[0].assetNumberShares));
	    setMaxQuantity((data.data[0].assetNumberShares));
    }

}, [data, quantity]);


  if (isError) {
    return <h1>Error</h1>;
  }

  if (isLoading) return <h1>Loading ..</h1>;


  console.log("data ---- ", data);

  return (
    <>
      <Container className="mt-4 no-gutters mx-auto" fluid>
        <Row className="my-4">
          <Col>
            <h1>{data.data[0].assetAddress}</h1>
          </Col>
        </Row>
        <Row >
          <Col xs={12} sm={12} md={5} lg={5} xl={5}>
            <AssetImages imageUrl={data.data[0].assetImageUrl} alt={data.data[0].assetAddress} />
          </Col>
          <Col >
             <Row >

             <Col>

                  <ManageInvestQty
              quantity={quantity}
              onQuantityChange={onQuantityChange}
              onAddToCart={onAddToCart}
              maxQuantity={maxQuantity}
            />


              </Col>
	  </Row>
	  <Row className="my-4"><Col><h4>For {quantity} Shares </h4></Col></Row>
      <Row className="my-4" >
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
          <DataBox
            title="Income"
            data={`${assetIncomeForQuantity.toFixed(2)} GBP`}
          />
	  </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
          <DataBox
            title="Cost"
            data={`${assetCostForQuantity.toFixed(2)} GBP`}
          />
	  </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
          <DataBox
            title="Cost Per Share"
            data={`${assetCostPerShare.toFixed(2)} GBP`}
          />
        </Col>
      </Row>


        <Row className="my-4">
           <Col>
            <AssetFinancials
              assetValue={data.data[0].assetValue}
              assetIncome={data.data[0].assetIncome}
              assetYield={data.data[0].assetYield}
              assetRiskRating={data.data[0].assetRiskRating}
              assetNumberShares={data.data[0].assetNumberShares}
            />
           </Col>
	  </Row>
	  <Row>
           <Col>
             <AssetCheckboxList checkboxes={[
               { label: "Tenant", checked: data.data[0].hasTenant },
               { label: "Garden", checked: data.data[0].hasGarden },
               { label: "Parking", checked: data.data[0].hasParking },
               { label: "Double Glazing", checked: data.data[0].hasDoubleGlazing },
             ]} />
           </Col>
        </Row>

        <Row className="my-4">
           <Col>
             <AssetFeatures
                     numBathrooms={data.data[0].assetNumberBathrooms}
                     numBedrooms={data.data[0].assetNumberBedrooms}
                      houseType={data.data[0].assetHouseType}
              />

            <hr />
            <p>Asset Owner Name: {data.data[0].assetOwnerName}</p>
           </Col>
        </Row>

	  </Col>
          </Row>
      </Container>
    </>
  );
};

export default ProductPage;
