import {useParams, useLocation, useNavigate} from "react-router-dom";
import React, {useState, useContext} from 'react';
import axios from 'axios';
import {useQuery}  from 'react-query';
import {Container, Button, Row, Col, Image} from 'react-bootstrap';

import {CartContext} from '../CartContext';


//      let res = await searchDB(props.query);
  //      console.log(res.data);


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
          //     setSearchedData(res.data.data[0]);
          return res;
	  }
//        const {menu, setMenu, userName, setUserName} = useContext(MenuContext);
//      const prodId = useLocation().state.prodId;
//      const [location, setLocation]=useState();
//      console.log("state = "+JSON.stringify(location));
//      console.log("use params = "+JSON.stringify(useParams));
        console.log("productId = "+productId);
        console.log(cart);
//      console.log("prodId = "+prodId);
      //const imgurl =`http://peaciotest.com:3000/images/${data.data[0].partImgUrl}`;
      const imgurl =`/images/${data.data[0].partImgUrl}`;
console.log(imgurl);
        return (
          <>
	  <div>
          <h1>{data.data[0].partShortDesc} </h1>
          </div>
		<div>
                    <Container>
                       <Row>
                           <Col><img src={imgurl} className="img-fluid shadow-4" 
			   alt={data.data[0].partDesc} /></Col>
                           <Col>
		               <Row><Col>{data.data[0].partDesc}</Col></Row>
                          <Row> <Col>Part: {data.data[0].partNumber}</Col></Row>
                          <Row> <Col>Brand Part: {data.data[0].manPartNumber}</Col></Row>
                          <Row> <Col>Part Option: {data.data[0].partOption}</Col></Row>
                          <Row> <Col>Merchant: {data.data[0].merchantName}</Col></Row>
                          <Row> <Col>Price: $ {data.data[0].partSalePrice.toFixed(2)}</Col></Row>

                   	<Row> <Col>	<Button sm="6" onClick={()=>cart.addOneToCart(data.data[0])  } 
		className="mx-2">Add to Cart</Button></Col></Row>

		           </Col> 
		       </Row>
<hr />
		    </Container>

		</div>
		</>
  )
}

    houseId: 0,
    dbKey: 'sheriff street hartlepool',
    assetOwnerName: 'trevor',
    assetAddress: 'sheriff street hartlepool',
    assetValue: 40000,
    assetNumberShares: 1000,
    hasTenant: true,
    hasGarden: true,
    hasParking: false,
    assetImageUrl: 'tba',
    assetUrl: 'tba',
    assetIncome: 3150,
    assetYield: 7.8,
    assetNumberBathrooms: 1,
    assetNumberBedrooms: 2,
    assetHouseType: 'terraced',
    hasDoubleGlazing: true,
    assetRiskRating: 1,
    assetPreferredNotary: '0x0D1D5933dA6283D635D6ae65c356FBe01Dc1797C',
    currency: 'GBP',



export default ProductPage;

