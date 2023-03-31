import {createContext, useState} from 'react';
import { getProductData} from './productsStore';
export const CartContext = createContext({
	items: [],
	getProductQuantity: () => {},
	addOneToCart: () => {},
	addItemsToCart: () => {},
	removeOneFromCart: () => {},
	deleteFromCart: () => {},
	getTotalCost: () => {},
	createClient: () => {},
	signClient: {},
	createWeb3Modal: () => {},
	handleConnect: () => {},
	handleDisconnect: () => {},
	closeModal: () => {},
	web3Modal: {},
	accounts: {},
	sessions: {},
	walletStatus: {},
	show: {},
})

export const CartProvider = ({children}) => {
console.log("carttttttttttttttttttttttcart" );
console.log("carttttttttttttttttttttttcart" );
console.log("carttttttttttttttttttttttcart" );
	console.log(children);
	const [cartProducts, setCartProducts] = useState([]);
        const   [signClient, setSignClient] = useState(null);
        const   [show, setShow] = useState({});
        const   [web3Modal, setWeb3Modal] = useState({});
        const	[sessions, setSessions] = useState({});
        const	[walletStatus, setWalletStatus] = useState(false);
        const	[accounts, setAccounts] = useState([]);
        const	[txhash, setTxhash] = useState([]);

//{id:1, quantity: 2
//
//

const closeModal=() =>{
	console.log("set show-------");
	console.log(show);
 setShow(false);
}

const handleDisconnect=async()=>{
}

const reset=()=> {
  setAccounts([]);
  setSessions([]);
}



const createWeb3Modal =  () => {
	console.log("111111");

}

const handleConnect = async()=> {
}

const onSessionConnect=async(session) => {


}

const subscribeToEvents = async (client) => {

}



const createClient = async () => {
}

const addItemsToCart = (item, quantity = 1) => {
	console.log("add items =-- ", item);
	console.log("add items =ntiyy-- ",  quantity);
  const { id } = item;
  const existingItem = cartProducts.find((product) => product.id === id);
  if (existingItem) {
    const updatedItem = {
      ...existingItem,
      quantity: existingItem.quantity + quantity,
    };
    setCartProducts(
      cartProducts.map((product) =>
        product.id === id ? updatedItem : product
      )
    );
  } else {
    const newItem = {
      ...item,
      quantity,
    };
	  let c=[...cartProducts, newItem];
	  console.log("c------", c);
    setCartProducts([...cartProducts, newItem]);
  }
};




        const getProductQuantity = (id) => {
              const quantity = cartProducts.find(product=>product.id===id)?.quantity;

		console.log("ddxx11====");
		console.log(quantity);
		console.log("ddxx11====");
	      if (quantity === undefined) {
                   return 0;
	      }
		return quantity;
	}

        const addOneToCart = (props) => {
		const id = props.dbKey;
		const price = props.assetValue/props.assetNumberShares;
		const title = props.assetAddress;
		const merchantName = props.assetOwner;

		console.log("props  xx====");
		console.log(props);
		console.log(id);
		console.log("xx====");
              const quantity = getProductQuantity(id);
		console.log("ddxx====");
		console.log(quantity);
		console.log("ddxx====");

		if (quantity === 0) {
                     setCartProducts([...cartProducts, {id:id, seller: merchantName, title: title, quantity:1, price: price}])
		} else {
                     setCartProducts(
                           cartProducts.map(product=>
                                  product.id === id ? {...product, quantity:product.quantity +1 } 
				   : product
			   )
		     )
		}
		console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb====");
		console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb====");
		console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb====");
		console.log(cartProducts);
		console.log("====");
	}

const deleteFromCart=(id)=> {
	console.log("cartProducts99999999999999999999999999999999999990000000000000000000000000000000000000000000000000000000000");
	console.log(id);
    const cartProducts1 = cartProducts.filter(currentProduct=> currentProduct.id != id)


	setCartProducts(cartProducts1);
	console.log("cartProducts0000000000000000000000000000000000000000000000000000000000");
	console.log(cartProducts1);
	console.log(id);
	console.log(cartProducts);

}

const removeOneFromCart=(props)=> {
	const id = props.dbKey;
    const quantity = getProductQuantity(id);

	if (quantity == 1) {
		deleteFromCart(id);
	} else {
             
                     setCartProducts(
                           cartProducts.map(product=>
                                  product.id === id ? {...product, quantity:product.quantity -1 } 
				   : product
			   )
		     )
	}
}

const getTotalCost=()=> {
   let totalCost = 0;
//	cartProducts.map((cartItem)=>{
 //               const productData = getProductData(cartItem.id);
//		totalCost+=(productData.partPrice*cartItem.quantity);
//	})
	cartProducts.map((cartItem)=> {
                      totalCost+=(cartItem.price*cartItem.quantity);
	})
	return totalCost;
}


const contextValue = {
            items: cartProducts,
		getProductQuantity,
  	  addOneToCart,
  	  addItemsToCart,
	  removeOneFromCart,
	  deleteFromCart,
	  getTotalCost,
	  createClient,
	  signClient: signClient,
	  createWeb3Modal,
	  handleConnect,
	  handleDisconnect,
	  closeModal,
   	  web3Modal: web3Modal,
   	  accounts: accounts,
	  sessions: sessions,
	  show: show,
}
		return (
                     <CartContext.Provider value={contextValue}>
                         {children}
		     </CartContext.Provider>
		)

}

export default CartProvider;
