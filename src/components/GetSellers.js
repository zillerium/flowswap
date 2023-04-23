import {useContext, useState, useEffect} from 'react'
import {CartContext} from '../CartContext'
import {ContractContext} from './ContractContext'
import bs58 from 'bs58';
import Web3 from 'web3';


function GetSellers() {

	 const web3 = new Web3();

    const  {
                sellerAddress, setSellerAddress,
                contractAmount, setContractAmount,
                contractNumber, setContractNumber,
		notary, setNotary,
                salesRelease, setSalesRelease,
                disputeRelease, setDisputeRelease,
	           assetId, setAssetId,
	           ipfsHash, setIpfsHash,
	           ipfsHashBytes32, setIpfsHashBytes32,
                 assetNumberSharesSold, setAssetNumberSharesSold,
                 usdGbpRate, setUsdGbpRate

                } = useContext(ContractContext)
    const cart = useContext(CartContext);
    const items = cart.items;
    console.log("----items --", items);
    const ipfsHashBytes32func = (ipfsHash) => {
        const bytes = bs58.decode(ipfsHash).slice(2);
        return web3.utils.bytesToHex(bytes);
    }

 useEffect(() => {	
  if (items) {
    let asset = items[0]; // assuming only one item in the array
    setAssetId(asset?.assetId);
    setAssetNumberSharesSold(asset?.numberSharesToBuy);
    setUsdGbpRate(asset?.usdGbpRate);

    const ipfsBytes32 = items[0]?.ipfsHash ? ipfsHashBytes32func(items[0]?.ipfsHash) : '0x';
    setIpfsHashBytes32(ipfsBytes32);
    setIpfsHash(items[0]?.ipfsHash);

    console.log("ipfs bytes 32 === ", ipfsBytes32);	  
    console.log("ipfs bytes 32 === ", ipfsBytes32);	  
    console.log("ipfs bytes 32 === ", ipfsBytes32);	  
    console.log("ipfs bytes 32 === ", ipfsBytes32);	  
    console.log("ipfs bytes 32 === ", ipfsBytes32);	  
    console.log("ipfs bytes 32 === ", ipfsBytes32);	  
    console.log("ipfs bytes 32 === ", ipfsBytes32);	  
    console.log("ipfs hash === ", ipfsHash);	  


    let sellers = items.reduce(
        (acc,item)=> {
            if (!acc[item.sellerAddress]) {
                acc[item.sellerAddress] = {
                    seller: item.sellerAddress,
                    totAmount: item.pricePerShare*item.numberSharesToBuy,
                }
            } else {
                acc[item.sellerAddress].totAmount += item.pricePerShare*item.numberSharesToBuy;
            }
            return acc;
        }, {});

    console.log("sellers -- ", sellers);
    let totAmount=0;
    let thisSellerAddr = {address:''};
    Object.entries(sellers).map(([sellerAddress, sellerDetails]) => {
         thisSellerAddr.address = sellerAddress;		
         totAmount = sellerDetails.totAmount;
    })
    setSellerAddress(thisSellerAddr.address);
    console.log("seller ---", thisSellerAddr.address);
    setContractAmount(Math.round(totAmount * (10 ** 6)));

    const notaries = [{address:'0x9f0BEA7dE67e8Fb333067ed83b468E5082280835'}];

    const maxint256 = 10000000000;
    const ranNumber = Math.floor(Math.random() * maxint256);
    console.log("---- ran number ---- ", ranNumber);
    setContractNumber(ranNumber);
    const _salesRelease = Math.floor(Date.now() / 1000);
    const _disputeRelease = _salesRelease + 100; // 100 secs for testing
    setSalesRelease(_salesRelease);
    setDisputeRelease(_disputeRelease);
    setNotary(notaries[0]);
  }
}, [items]);
	    

    return (
        <>
        </>
    )

}

export default GetSellers;

