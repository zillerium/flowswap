import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext';
import {useContext} from 'react';

const CartProduct=(props)=> {

	console.log("props ==========================", props);
	console.log("props ==========================", props);
	console.log("props ==========================", props);
	console.log("props ==========================", props);
          const cart = useContext(CartContext);
//	const productData = getProductData(id);

	return (
		<tr>
			<td>{props.assetAddress}</td>
			<td>{props.assetOwnerName}</td>
			<td>{props.numberShares}</td>
			<td>
				{props.pricePerShare.toLocaleString('en-US', {
					style: 'currency',
					currency: 'GBP'
				})} ({(props.pricePerShare*props.usdGbpRate).toLocaleString('en-US', {
					style: 'currency',
					currency: 'USD'
				})})
			</td>
			<td>
				{(props.pricePerShare*props.numberShares).toLocaleString('en-US', {
					style: 'currency',
					currency: 'GBP'
				})} ({(props.pricePerShare*props.numberShares*props.usdGbpRate).toLocaleString('en-US', {
					style: 'currency',
					currency: 'USD'
				})})
			</td>
			<td>
				<Button size="sm" onClick={() => cart.deleteFromCart(props.assetAddress)}>X</Button>
			</td>
		</tr>
	)
}

export default CartProduct;
