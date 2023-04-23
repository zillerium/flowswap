import React, {useState, useContext} from 'react';
import {useQuery, useMutation} from 'react-query';
import {Link, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {CartContext} from './CartContext';
import {Table, Card, Button, Form, Row, Col} from 'react-bootstrap';
import {AssetShowPage} from './pages/AssetShowPage';
import {ArrowRight,Search} from 'react-bootstrap-icons';

// import {productsArray} from '../productsStore';
//import ProductCard from '../components/ProductCard';
  //                    {productsArray.map((product, idx) => (
    //                       <ProductCard product={product} />

const Search1 =  () => {
    console.log("rendering");
       const [search,setSearch] = useState("");
       const [searchedData,setSearchedData] = useState([]);
       const cart=useContext(CartContext);

       const searchDB = async (searchVal) => {
          //const baseUrl = "https://peacioapi.com:3000/searchHouseDB/"+searchVal;
	  const baseUrl = process.env.REACT_APP_SERVER_URL + "/searchHouseDB/" + searchVal;
          let res = await axios.get(baseUrl);
	       console.log("res");
	       console.log(res.data);
	       setSearchedData(res.data.data[0]);
   	  return res;
       }

//	let res = await searchDB(props.query);
  //      console.log(res.data);
	return  ( 
	<div>
	  <div>
	    <input type="text" onChange={(e) => setSearch(e.target.value)}/>
            <Button onClick={()=>searchDB(search)} ><Search  /> </Button>


          </div>
                    <div>
					<div>
					<Table stripod="true"  bordered hover>
                                            <thead>
                                                 <tr>
                                                      <th>Asset ID</th>
                                                      <th>Asset Address</th>
                                                      <th>Valuation</th>
                                                      <th>Details</th>
                                                      <th>Shares</th>
                                                      <th>Income</th>
					         </tr>
					    </thead>
	                        	<tbody>
                        {searchedData.length>0 && searchedData.map((value, key) => {
                                return (
					<tr>
                                 <td>    {value.assetId}  </td>
                                 <td>    {value.assetAddress}  </td>
                                 <td>    {value.assetValue.toLocaleString()} {value.currency} </td>
					                     <td>            <Link to={{
                                             pathname:`/asset/${value.ipfsHash}`,
                                                           state:{productId: value.dbKey, productPrice: value.partSalePrice}
                                                           }}>{value.assetAddress}</Link>
                                                           </td>
                                 <td>    {value.assetNumberShares.toLocaleString()}  </td>
					<td> {value.assetIncome.toLocaleString()} {value.currency}
						</td>
					</tr>
				)
			})}
		                       </tbody>
                                         </Table>
					</div>
        </div> 						
        </div> 						
	)
}


export default Search1;


