import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Container, Button, Row, Col } from "react-bootstrap";

import AssetCheckboxList from "../components/AssetCheckboxList";
import AssetFeatures from "../components/AssetFeatures";
import AssetFinancials from "../components/AssetFinancials";
import AssetImages from "../components/AssetImages";
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
console.log("data ---- ", data);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>{data.data[0].assetAddress}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button sm="6" onClick={onAddToCart} className="mx-2">
              Add to Cart
            </Button>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <AssetImages imageUrl={data.data[0].assetImageUrl} alt={data.data[0].assetAddress} />
          </Col>
          <Col>
            <AssetCheckboxList checkboxes={[
              { label: "Has Tenant", checked: data.data[0].hasTenant },
              { label: "Has Garden", checked: data.data[0].hasGarden },
              { label: "Has Parking", checked: data.data[0].hasParking },
              { label: "Has Double Glazing", checked: data.data[0].hasDoubleGlazing },
            ]} />
            <AssetFinancials
              assetValue={data.data[0].assetValue}
              assetIncome={data.data[0].assetIncome}
              assetYield={data.data[0].assetYield}
              assetRiskRating={data.data[0].assetRiskRating}
              assetNumberShares={data.data[0].assetNumberShares}
            />
	       <AssetFeatures
              features={{numBathrooms:data.data[0].assetNumberBathrooms,
              numBedrooms:data.data[0].assetNumberBedrooms,
              houseType:data.data[0].assetHouseType
	      }}
            />
            <p>Asset Owner Name: {data.data[0].assetOwnerName}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
