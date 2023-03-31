import React, { useState, useContext } from "react";
import { Container, Button, Row, Col, Image, Table } from "react-bootstrap";
import { CartContext } from "../CartContext";
import CartTotal from "../components/CartTotal";
import { useParams, Link } from "react-router-dom";

const Cart = (props) => {
  const [search, setSearch] = useState("");
  const { productId } = useParams();
  const cart = useContext(CartContext);

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
                  <th>Asset</th>
                  <th>Price</th>
                  <th>Number of Shares</th>
                  <th>SubTot</th>
                  <th>Cart</th>
                </tr>
              </thead>
              <tbody>
                {cart.items.length > 0 &&
                  cart.items.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <Link
                            to={{
                              pathname: `/product/${value.id}`,
                              state: { productId: value.id, productPrice: value.price },
                            }}
                          >
                            {value.assetAddress}
                          </Link>
                        </td>
                        <td>{value.pricePerShare?.toFixed(2)}</td>
                        <td>{value.numberSharesToBuy}</td>
                        <td>
                          {(value.pricePerShare * value.numberSharesToBuy).toFixed(2)}
                        </td>
                        <td>
                          <Button
                            sm="6"
                            onClick={() =>
                              cart.addOneToCart({
                                dbKey: value.id,
                                merchantName: value.assetOwnerName,
                                partSalePrice: value.pricePerShare,
                                partShortDesc: value.assetAddress,
                              })
                            }
                            className="mx-2"
                          >
                            +
                          </Button>
                          <Button
                            sm="6"
                            onClick={() =>
                              cart.removeOneFromCart({
                                dbKey: value.id,
                                partSalePrice: value.pricePerShare,
                                partShortDesc: value.assetAddress,
                              })
                            }
                            className="mx-2"
                          >
                            -
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>{cart.getTotalCost().toFixed(2)}</td>
                <td>
                  <Link to="/pay">
                    <Button disabled={cart.items.length === 0}>Invest</Button>
                  </Link>
                </td>
              </tr>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
