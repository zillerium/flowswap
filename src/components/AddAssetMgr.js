import {ContractContext} from './ContractContext'

import React, {useState, useContext} from 'react';
import {useQuery, useMutation} from 'react-query';
import axios from 'axios';


import AddAsset from './AddAsset'
import AssetOwner from './AssetOwner';
import AssetCheckBoxes from './AssetCheckBoxes';
import AssetDetails from './AssetDetails';
import AssetLinks from './AssetLinks';
import AssetRates from './AssetRates';
import AssetRisk from './AssetRisk';
import AddAssetCall from './AddAssetCall';
import AddPdf from './AddPdf';
import LoadIpfs from './LoadIpfs';
import LoadImageIpfs from './LoadImageIpfs';

import {Button} from 'react-bootstrap';
import {IpfsContext} from './IpfsContext';

function AddAssetMgr() {

     const  {
                 password, setPassword, correct, setCorrect, assetId, dbKey, assetOwnerName, assetAddress, assetValue,
                 assetNumberShares, hasTenant, hasGarden, hasParking, assetImageUrl, assetUrl,
                 assetIncome, assetYield, assetNumberBathrooms, assetNumberBedrooms, assetHouseType, hasDoubleGlazing,
                 assetRiskRating, assetPreferredNotary, currency, usdGbpRate, assetNumberSharesSold,
                sellerAddress, setSellerAddress,
                paySeller, setPaySeller,
                } = useContext(ContractContext)

console.log("seller address = llllllllllllllllllllllll", sellerAddress);


const [ipfsHash,setIpfsHash] = useState("0x");
const [ipfsImageHash,setIpfsImageHash] = useState("0x");
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
	return response;
}


const {mutate,isSuccess,  isError} = useMutation(PostData, {
	onSuccess: (successData) => {
		console.log("post was done");

           console.log(successData);
	}
})
const ImageDisplay = () => {
//return ( data ? <img src={data.data.url}/> : <p></p>);
}
const IpfsImageDisplay = () => {
return ( data ? <img src='http://ipfs.io/ipfs/QmSj5Yd6p377rYJWSoGnq29wehFFKkLZGS7PynxKzaLQSB'/> : <p></p>);
}
 console.log("render");
 console.log(error);
 console.log(data);
	if (error) return <h1>{error.message}</h1>
	if (isLoading) return <h1>Loading</h1>
		//console.log(data);
    return (
        <>
  <header>
      <h1>Add Asset</h1>
      <p></p>

       <AssetOwner />
       <AssetCheckBoxes />
       <AssetDetails />
       <AssetLinks />
       <AssetRates />
       <AssetRisk />
       <IpfsContext.Provider value={{ipfsHash, setIpfsHash, ipfsImageHash, setIpfsImageHash }} >
	  
	   
            

<div style={{ border: "2px solid lightgrey", borderRadius: "10px", padding: "10px" }}>
  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <div style={{ borderRadius: "10px", border: "1px solid lightgrey", padding: "10px" }}>
      <AddPdf />
    </div>
    <div style={{ borderRadius: "10px", border: "1px solid lightgrey", padding: "10px" }}>
      <LoadImageIpfs />
    </div>
    <div style={{ borderRadius: "10px", border: "1px solid lightgrey", padding: "10px" }}>
      <LoadIpfs />
    </div>
    <div style={{ borderRadius: "10px", border: "1px solid lightgrey", padding: "10px" }}>
      {isSuccess && <p>Database record added </p>}
      {isError && <p>Database record error </p>}
      <Button disabled={ipfsHash==='0x'} onClick={() => mutate({
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
          assetYield: assetYield*100,
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
              ipfsHash: ipfsHash,
              ipfsImageHash: ipfsImageHash,
      })}>
        Add DB Asset
      </Button> 
    </div>
    <div style={{ borderRadius: "10px", border: "1px solid lightgrey", padding: "10px" }}>
      <p>Create NFT for Investment Prospectus</p>
	    <AddAssetCall />
    </div>
  </div>
</div>



	    </IpfsContext.Provider>
    </header>

        </>
    )

}

export default AddAssetMgr;

