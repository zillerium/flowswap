import {useEffect,  useContext} from 'react';
import {CartContext} from '../CartContext';
import AssetWallet from '../components/AssetWallet';

function AddApiProduct() {

const cart = useContext(CartContext);
useEffect(()=>{
	cart.closeModal();
}, [cart])
	console.log("**********************************************cart");
	console.log(cart);
  return (
    <div >
<AssetWallet />
    </div>
  );
}

export default AddApiProduct;

