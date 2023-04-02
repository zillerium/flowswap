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

const addItemsToCart = (assetsToBuy, numberSharesToBuy = 1) => {
  console.log("add items =-- ", assetsToBuy);
  console.log("add items =ntiyy-- ", numberSharesToBuy);

  const {assetId, usdGbpRate, assetNumberSharesSold, 
	  sellerAddress,  dbKey, assetOwnerName, assetBlockchainAddress, assetAddress, assetValue, assetNumberShares } = assetsToBuy;
  const id = assetId;
  const existingAssetPurchase= cartProducts.find((asset) => asset.id === id);

  const pricePerShare = assetValue / assetNumberShares;
  const priceUsdPerShare = (assetValue*usdGbpRate) / assetNumberShares;

  if (existingAssetPurchase) {
    const updatedAssetPurchase = {
      ...existingAssetPurchase,
      numberSharesToBuy: existingAssetPurchase.numberSharesToBuy + numberSharesToBuy,
    };
    setCartProducts(cartProducts.map((asset) => (asset.id === id ? updatedAssetPurchase : asset)));
  } else {
	  const newAssetsToBuy = {...assetsToBuy, 
		  id: assetId, 
		  numberSharesToBuy: numberSharesToBuy, 
		  pricePerShare:pricePerShare,
		  priceUsdPerShare:priceUsdPerShare,
		  usdGbpRate: usdGbpRate,
		  assetNumberSharesSold: assetNumberSharesSold,
		  sellerAddress: sellerAddress,
		  assetBlockchainAddress: assetBlockchainAddress


	  };
	  console.log("new assets to buy --- ", newAssetsToBuy);
    setCartProducts([...cartProducts, newAssetsToBuy]);
  }
	console.log("art products ------", cartProducts);
	console.log("art products ------", cartProducts);
	console.log("art products ------", cartProducts);
	console.log("art products ------", cartProducts);
};



        const getProductQuantity = (id) => {
              const quantity = cartProducts.find(product=>product.id===id)?.numberSharesToBuy;

		console.log("ddxx11====");
		console.log(quantity);
		console.log("ddxx11====");
	      if (quantity === undefined) {
                   return 0;
	      }
		return quantity;
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

 const addOneToCart = (assetsToBuy) => {
 
	   const { dbKey, assetOwnerName, assetAddress, assetValue, assetNumberShares } = assetsToBuy;
  const id = dbKey;
  const existingAssetPurchase= cartProducts.find((asset) => asset.id === id);

  const pricePerShare = assetValue / assetNumberShares;

  const quantity = getProductQuantity(id);

  if (quantity > 0) {
    const updatedAssetPurchase = {
      ...existingAssetPurchase,
      numberSharesToBuy: existingAssetPurchase.numberSharesToBuy + 1,
    };
    setCartProducts(cartProducts.map((asset) => (asset.id === id ? updatedAssetPurchase : asset)));
  } else {
	  const newAssetsToBuy = {...assetsToBuy, id: dbKey, numberSharesToBuy: 1, pricePerShare:pricePerShare};
	  console.log("new assets to buy --- ", newAssetsToBuy);
    setCartProducts([...cartProducts, newAssetsToBuy]);
  }
	 
 
};

const removeOneFromCart = (assetsToBuy) => {
  	   const { dbKey, assetOwnerName, assetAddress, assetValue, assetNumberShares } = assetsToBuy;
  const id = dbKey;
  const existingAssetPurchase= cartProducts.find((asset) => asset.id === id);

  const pricePerShare = assetValue / assetNumberShares;

  const quantity = getProductQuantity(id);

  if (quantity === 1) {
    deleteFromCart(id);
  } else {
    const updatedAssetPurchase = {
      ...existingAssetPurchase,
      numberSharesToBuy: existingAssetPurchase.numberSharesToBuy - 1,
    };
    setCartProducts(cartProducts.map((asset) => (asset.id === id ? updatedAssetPurchase : asset)));  }
};


const getTotalCost=()=> {
   let totalCost = 0;
//	cartProducts.map((cartItem)=>{
 //               const productData = getProductData(cartItem.id);
//		totalCost+=(productData.partPrice*cartItem.quantity);
//	})
	cartProducts.map((cartItem)=> {
                      totalCost+=(cartItem.pricePerShare*cartItem.numberSharesToBuy);
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
