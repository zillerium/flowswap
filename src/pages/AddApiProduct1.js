import React, {useState} from 'react';
import {useQuery, useMutation} from 'react-query';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Button} from 'react-bootstrap';
import CartProvider from '../CartContext.js'

const AddApiProduct = () => {

      const maxint256 = 10000000000000;
        const ranNumber = Math.floor(Math.random() * maxint256);
	const [password, setPassword]=useState("");
	const [correct, setCorrect]=useState(false);
 const [assetId, setAssetId] = useState(ranNumber);
const [dbKey, setDbKey] = useState(null);
const [assetOwnerName, setAssetOwnerName] = useState(null);
const [assetAddress, setAssetAddress] = useState(null);
const [assetValue, setAssetValue] = useState(null);
const [assetNumberShares, setAssetNumberShares] = useState(null);
const [hasTenant, setHasTenant] = useState(false);
const [hasGarden, setHasGarden] = useState(false);
const [hasParking, setHasParking] = useState(false);
const [assetImageUrl, setAssetImageUrl] = useState(null);
const [currency, setCurrency] = useState('GBP');
const [assetUrl, setAssetUrl] = useState(null);
const [assetIncome, setAssetIncome] = useState(null);
const [assetYield, setAssetYield] = useState(null);
const [assetNumberBathrooms, setAssetNumberBathrooms] = useState(null);
const [assetNumberBedrooms, setAssetNumberBedrooms] = useState(null);
const [assetHouseType, setAssetHouseType] = useState(null);
const [hasDoubleGlazing, setHasDoubleGlazing] = useState(false);
const [assetRiskRating, setAssetRiskRating] = useState(null);
const [assetPreferredNotary, setAssetPreferredNotary] = useState(null);
	const [usdGbpRate, setUsdGbpRate] = useState(null);
  const [assetNumberSharesSold, setAssetNumberSharesSold] = useState(null);
  const [sellerAddress, setSellerAddress] = useState(null);





 
	const [search,setSearch] = useState("");
	const {isLoading, error, data, isFetching, refetch} = useQuery('dogs',
		() => axios ('https://random.dog/woof.json'),
		{
			enabled: false,
		}
		
		);
const checkPassword = () => {
 if (password == "tiger12") setCorrect(true); else setCorrect(false);
}

const PostData = async  (part) => {
	console.log("part");
	console.log(part);
//	let x = {keyword: user.firstName};
	const response = await axios.post("https://peacioapi.com:3000/addHouseAPI", part);
//	console.log(x);
//	const response = await fetch("https://peacioapi.com:3000/getDBData", {
  //         method: 'POST',
//	   body: x,
//	headers: {
  //         'Content-type': 'application/json; charset-UTF-8'
//	}
//	})
	return response;


}


const {mutate,  isError} = useMutation(PostData, {
	onSuccess: (successData) => {
		console.log("post was done");

           console.log(successData);
	}
})
const ImageDisplay = () => {
return ( data ? <img src={data.data.url}/> : <p></p>);
}
 console.log("render");
 console.log(error);
 console.log(data);
	if (error) return <h1>{error.message}</h1>
	if (isLoading) return <h1>Loading</h1>
		//console.log(data);




   return (
  <div>
    <CartProvider>
      <Container>
        <div></div>
      </Container>
    </CartProvider>
    <header>
      <h1>Add Property to DB</h1>
      <p></p>
      <div>
        <input placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={checkPassword}>Enable Page</Button>
      </div>
      <div></div>
      <div></div>
      <div>
        <input type="text" placeholder="Asset Owner Name" value={assetOwnerName} 
onChange={(e) => setAssetOwnerName(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Asset Address" value={assetAddress} 
onChange={(e) => setAssetAddress(e.target.value)} />
      </div>
      <div>
        <input type="number" placeholder="Asset Value" value={assetValue} 
onChange={(e) => setAssetValue(e.target.value)} />
      </div>
      <div>
        <input type="currency" placeholder="Asset Value" value={currency} 
onChange={(e) => setCurrency(e.target.value)} />
      </div>
      <div>
        <input type="number" placeholder="Asset Number of Shares" value={assetNumberShares} 
onChange={(e) => setAssetNumberShares(e.target.value)} />
      </div>
      <div>
        <input type="checkbox" id="hasTenant" checked={hasTenant} 
onChange={(e) => setHasTenant(e.target.checked)} />
        <label htmlFor="hasTenant">Has Tenant</label>
      </div>
      <div>
        <input type="checkbox" id="hasGarden" checked={hasGarden} 
onChange={(e) => setHasGarden(e.target.checked)} />
        <label htmlFor="hasGarden">Has Garden</label>
      </div>
      <div>
        <input type="checkbox" id="hasParking" checked={hasParking}
onChange={(e) => setHasParking(e.target.checked)} />
        <label htmlFor="hasParking">Has Parking</label>
      </div>
      <div>
        <input type="text" placeholder="Asset Image URL" value={assetImageUrl}
onChange={(e) => setAssetImageUrl(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Asset URL" value={assetUrl} 
onChange={(e) => setAssetUrl(e.target.value)} />
      </div>
      <div>
        <input type="number" placeholder="Asset Income" value={assetIncome} 
onChange={(e) => setAssetIncome(e.target.value)} />
      </div>
      <div>
        <input type="number" placeholder="Asset Yield" value={assetYield} 
onChange={(e) => setAssetYield(e.target.value)} />
      </div>
      <div>
        <input type="number" placeholder="Asset Number of Bathrooms" value={assetNumberBathrooms} 
onChange={(e) => setAssetNumberBathrooms(e.target.value)} />
      </div>
      <div>
        <input type="number" placeholder="Asset Number of Bedrooms" value={assetNumberBedrooms} 
onChange={(e) => setAssetNumberBedrooms(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Asset House Type" value={assetHouseType} 
onChange={(e) => setAssetHouseType(e.target.value)} />
      </div>
      
  
	  
	    
	 
      <div>
        <input type="checkbox" id="hasDoubleGlazing" checked={hasDoubleGlazing} 
onChange={(e) => setHasDoubleGlazing(e.target.checked)} />
        <label htmlFor="hasDoubleGlazing">Has Double Glazing</label>
      </div>
      <div>
        <input type="number" placeholder="Asset Risk Rating" value={assetRiskRating} 
onChange={(e) => setAssetRiskRating(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Asset Preferred Notary" value={assetPreferredNotary} 
onChange={(e) => setAssetPreferredNotary(e.target.value)} />
      </div>
	   {assetPreferredNotary}
	   {currency}

<div>
        <input
          type="number"
          placeholder="USD-GBP Rate"
          value={usdGbpRate}
          onChange={(e) => setUsdGbpRate(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Number of Shares Sold"
          value={assetNumberSharesSold}
          onChange={(e) => setAssetNumberSharesSold(e.target.value)}
        />
      </div>
 <div>
        <input
          type="text"
          placeholder="Seller Address"
          value={sellerAddress}
          onChange={(e) => setSellerAddress(e.target.value)}
        />
      </div>

      <div>
        <Button disabled={!correct} onClick={() => mutate({
          assetId: assetId,
          dbKey: dbKey,
          assetOwnerName: assetOwnerName,
          assetAddress: assetAddress,
          assetValue: assetValue,
          assetNumberShares: assetNumberShares,
          hasTenant: hasTenant,
          hasGarden: hasGarden,
          hasParking: hasParking,
          assetImageUrl: assetImageUrl,
          assetUrl: assetUrl,
          assetIncome: assetIncome,
          assetYield: assetYield,
          assetNumberBathrooms: assetNumberBathrooms,
          assetNumberBedrooms: assetNumberBedrooms,
          assetHouseType: assetHouseType,
          hasDoubleGlazing: hasDoubleGlazing,
          assetRiskRating: assetRiskRating,
          assetPreferredNotary: assetPreferredNotary,
          currency: currency,
		              usdGbpRate: usdGbpRate,
              assetNumberSharesSold: assetNumberSharesSold,
              sellerAddress: sellerAddress,
        })}>
          Add Property
        </Button>
      </div>
    </header>
  </div>
);
}
 

export default AddApiProduct;
