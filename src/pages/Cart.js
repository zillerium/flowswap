import React, { useState, useContext } from "react";
import { Container, Button, Row, Col, Image, Table } from "react-bootstrap";
import { CartContext } from "../CartContext";
import CartTotal from "../components/CartTotal";
import CartRow from "../components/CartRow";
import { useParams, Link } from "react-router-dom";

const Cart = (props) => {
  const [search, setSearch] = useState("");
  const { productId } = useParams();
  const cart = useContext(CartContext);

const formatCurrency = (value) => {
  return value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
};




console.log("cart items mmmmmmmmmmmm= ", cart.items);
  return (
    <>
      <div>
        <h1>Investments </h1>
      </div>
      <div>
        <div>
          <div>
            <Table stripod="true" bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Asset</th>
                  <th>Seller</th>
                  <th>Share Price</th>
                  <th>No. Shares</th>
                  <th>Total </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

{cart.items.length > 0 &&
  cart.items.map((item, key) => (
	  <React.Fragment key={key}> 
    <CartRow
      key={key}
      item={item}
	  currency="GBP"
	  cartPrice = {item.assetValue/item.assetNumberShares}
      formatCurrency={formatCurrency}
      onAddOneToCart={cart.addOneToCart}
      onRemoveOneFromCart={cart.removeOneFromCart}
    />
    <CartRow
      key={key}
      item={item}
	  cartPrice = {item.assetValue*item.usdGbpRate/item.assetNumberShares}
	  currency="USD"
      formatCurrency={formatCurrency}
      onAddOneToCart={cart.addOneToCart}
      onRemoveOneFromCart={cart.removeOneFromCart}
    />
</React.Fragment>
  ))
}


              </tbody>
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{cart.getTotalCost().toFixed(2)} USD</td>
                <td>
                  <Link to="/invest">
                    <Button disabled={cart.items.length === 0}>Invest</Button>
                  </Link>
                </td>
              </tr>
	<tr>
             <td colSpan="7">All investments are made in USD at a 12 month fixed exchange rate to the asset currency</td>
	</tr>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
