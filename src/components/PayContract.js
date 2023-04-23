import {useContext,  useEffect} from 'react'
import {  
          useContractWrite, usePrepareContractWrite} from "wagmi";
import {CartContext} from '../CartContext'
import {ContractContext} from './ContractContext'
import { BigNumber} from 'bignumber.js';

import {Button} from 'react-bootstrap';

import abi from './abi';

function PayContract(props) {

	 const  {
                approveContract, setApproveContract,
                payContract, setPayContract,
                approveEscrowContract, setApproveEscrowContract,
                erc20ContractAddress, setERC20ContractAddress,
                contractAddress, 
                contractDetails, setContractDetails,
                paySeller, setPaySeller,
                notary, setNotary,
                sellerAddress, setSellerAddress,
                contractAmount, setContractAmount,
                contractNumber, setContractNumber,
		 salesRelease, setSalesRelease,
		 disputeRelease, setDisputeRelease,
		 assetId, setAssetId,
		 assetNumberSharesSold, setAssetNumberSharesSold,
		 usdGbpRate, setUsdGbpRate,
		                                   ipfsHash, setIpfsHash,
                   ipfsHashBytes32, setIpfsHashBytes32

                } = useContext(ContractContext)


	const stableCoinAmount = contractAmount/ (10 ** 6);

        const usdGbpRateInt = usdGbpRate !== null ? Math.floor(usdGbpRate*100) : null;

        let argArr = [sellerAddress, props.address, notary.address, salesRelease, 
		disputeRelease, contractAmount, ipfsHashBytes32, assetNumberSharesSold, usdGbpRateInt  ];
         let argArr1 = [{
		 seller: sellerAddress, 
		 buyer: props.address, 
		 notary: notary.address, 
		 releaseTime: salesRelease, 
	 	 disputeRelease: disputeRelease, 
		 price: contractAmount, 
		 assetIpfs: ipfsHashBytes32, 
		 assetNumberSharesSold: assetNumberSharesSold, 
		 usdGbpRate: usdGbpRateInt
	         }  ];
  	    console.log("array ---- ", argArr, contractAddress);
            const {config, error} = usePrepareContractWrite({
                   address: contractAddress,
                   abi: abi,
                   functionName: 'approveAndTransferUSDC',
		   overrides: {
                      from: props.address
		   },
                  // args:[contractNumber],
                   args: argArr
            })
            console.log(config);
            const {data, isLoading, isSuccess, write} = useContractWrite(config)
            if (isLoading) {
                return <div>Loading ...</div>
            }
            console.log(data)

            if (isSuccess) {
                setPaySeller(true);
                setPayContract(false);
            }
    const payEscrow = async () => {
              console.log("------ pay now--");
	    try {
		    console.log("--write", write);
		    console.log("--config", config);
		    console.log("--data", data);
		    console.log("--error", error);
                const res = await write?.();
		    console.log("-- res", res);
	    } catch (err) {
                console.log("---- err");
	    }
    }



    return (
        <>
        <div><Button  variant="primary" onClick={payEscrow}>Pay to Escrow {stableCoinAmount}</Button></div>
            {error && (<div> error in formatting {error.message} </div>)}
        </>
    )

}



export default PayContract;

