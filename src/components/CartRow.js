import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

const CartRow = ({
  cartPrice,
  currency,
  item,
  formatCurrency,
  onAddOneToCart,
  onRemoveOneFromCart
}) => {
  const { assetId, sellerAddress, assetAddress, pricePerShare, usdGbpRate, numberSharesToBuy } = item;

  const [hovering, setHovering] = useState(false);
  const [showFullRow, setShowFullRow] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
    setShowFullRow(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setShowFullRow(false);
  };

  const truncatedAddress = sellerAddress.substring(0, 6) + "...";
  return (
    <>
      <tr
      >
        <td>
          <Link to={`/asset/${assetId}`}>{assetId}</Link>
        </td>
        <td>
          <Link to={`/asset/${assetId}`}>{assetAddress}</Link>
        </td>
        <td

        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "default" }}
	  >{hovering ? truncatedAddress : truncatedAddress}</td>
        <td>
          {formatCurrency(cartPrice)} {currency}
        </td>
        <td>{numberSharesToBuy}</td>
        <td>
          {formatCurrency(numberSharesToBuy * cartPrice)} {currency}
        </td>
        <td>
          <Button
            sm="6"
            onClick={() => onAddOneToCart({ assetId: assetId })}
            className="mx-2"
          >
            +
          </Button>
          <Button
            sm="6"
            onClick={() => onRemoveOneFromCart({ assetId: assetId })}
            className="mx-2"
          >
            -
          </Button>
        </td>
      </tr>
      {showFullRow && (
        <tr><td colspan="7">
	      <table><tbody><tr>
                  <td>{sellerAddress}</td>
	      </tr></tbody></table>
	      </td>
        </tr>
      )}
    </>
  );
};

export default CartRow;
