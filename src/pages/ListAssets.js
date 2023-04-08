import {useEffect,  useContext} from 'react';
import {CartContext} from '../CartContext';
import ListAsset from '../components/ListAsset';

function ListAssets() {

const cart = useContext(CartContext);
useEffect(()=>{
	cart.closeModal();
}, [cart])
	console.log("**********************************************cart");
	console.log(cart);
  return (
    <div >
<ListAsset />
    </div>
  );
}

export default ListAssets;

