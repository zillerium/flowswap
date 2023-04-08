import {Button, Container, Navbar, Table, Modal} from 'react-bootstrap';
import {useState, useContext } from 'react';
import axios  from 'axios';
import {CartContext} from '../CartContext';
import CartProduct from './CartProduct';
import CartTotal from './CartTotal';
import {Link, useMatch, useResolvedPath} from "react-router-dom"

const NavbarComponent=()=>{

    const cart = useContext(CartContext);
    const [show, setShow]=useState(false);
    const handleClose = () => {setShow(false); cart.closeModal(); }
    const handleShow = () => {setShow(true);  }

	const checkout = async () => {

   const response = await axios.post("https://peacioapi.com:3000/checkouthouse", cart.items);
		console.log(response);
		const url=response.data.data.url;
		console.log(response.data.data.url);
		window.location.assign(url);

	}

    const productsCount = cart.items.reduce((sum,product)=> sum+product.numberSharesToBuy, 0);

	console.log("carttttttttttttttttttttttttttttttttttttttttttttttttttt");
	console.log(cart);
	console.log("totallllllllllllllllllllllllllllllllllllllllllll");
	console.log(cart.getTotalCost());

return (
	<>
        <Navbar expand="sm">
           <Navbar.Toggle />
           <Navbar.Collapse className="justify-content-end">
                <Button onClick={handleShow}>Trades ({productsCount} shares)</Button>
	    </Navbar.Collapse>
        </Navbar>
	<Modal size="lg" show={show} onHide={handleClose} >
          <Modal.Header closeButton>
              <Modal.Title>Trades</Modal.Title>
	  </Modal.Header>
	           <Modal.Body>
                                  <Table stripod="true"  bordered hover>
                                            <thead>
                                                 <tr>
                                                      <th>Asset</th>
                                                      <th>Seller</th>
                                                      <th>No. Shares</th>
                                                      <th>Share Price GBP (USD)</th>
                                                      <th>Total GBP (USD)</th>
                                                      <th>Action</th>
                                                 </tr>
                                            </thead>
                	{productsCount > 0 ?

                                        <tbody>
					      {cart.items.map((currentProduct, idx) => (
						      <CartProduct key={idx}
                                                      assetAddress= {currentProduct.assetAddress} 
                                                      assetOwnerName= {currentProduct.assetOwnerName} 
                                                      numberShares = {currentProduct.numberSharesToBuy} 
                                                      pricePerShare = {currentProduct.pricePerShare} 
                                                      usdGbpRate = {currentProduct.usdGbpRate} 
						      />
						        ))}


                                       </tbody>



		        : <tbody>
				</tbody>
	                
			}

<tr>
	<td>Total</td>
	<td></td>
	<td></td>
	<td></td>
	<td> {(cart.getTotalCost()).toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD'})}
  </td>
	<td>	<Link to="/invest">
		               <Button disabled={(cart.items.length==0) ? true : false} 
		               onClick={()=>handleClose()}>Settle</Button>
	</Link></td></tr>


                                         </Table>
	           </Modal.Body> 

	</Modal>
	</>

)
}

export default NavbarComponent;
