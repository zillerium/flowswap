import React, { useState, useEffect, useContext } from 'react';
import { useContractRead } from 'wagmi';
import abinft from './abinft';
import { ContractContext } from './ContractContext';
import bs58 from 'bs58';
import multihash from 'multihashes';
import {create} from 'ipfs-http-client';

function ShowAssetDetails(props) {
  const { contractNftAddress, assetDetails, setAssetDetails } = useContext(ContractContext);

	    console.log("----contract number show adata --------------", props.assetNum);
	const walletaddr = props.address;
	console.log("wallet addr ", walletaddr);
  const config = {
    address: contractNftAddress,
    abi: abinft,
    overrides: { from: props.address },
//    overrides: { walletaddr },
    functionName: 'ipfsassets',
   args: [props.assetNum],
  };
	console.log("config o == ", config);
	console.log("config o == ", config);

	const ipfs = create();
	    console.log("----config show adata --------------", config);
  const { data, isLoading, isSuccess } = useContractRead(config);

const bytes32Hash = props.assetNum;
//const bytes = Uint8Array.from(Buffer.from(bytes32.slice(2), 'hex'));
//const bytes = Buffer.from(bytes32.slice(2), 'hex');
  useEffect(() => {
	    //console.log("----show adata 7777 type --------------", typeof(JSON.stringify(data)));
          // const hashBytes = bytes.slice(1);
          // const ipfsAddr = bs58.encode(hashBytes);
         if ((isSuccess)  && (data) ) {

             const decodedHex = Buffer.from(bytes32Hash.slice(2), 'hex');
             const encodedIPFS = bs58.encode(Buffer.concat([Buffer.from([0x12, 0x20]), decodedHex]));

             console.log("ipfs =========",encodedIPFS); // This will output the original IPFS address
	     console.log("----show adata 7777 state --------------", data);
             setAssetDetails({...data, ipfsAddr:encodedIPFS});
         };
  }, [setAssetDetails]);

  if (isLoading) {
    return <div>Loading contract details...</div>;
  }
	if (isSuccess) {
	
	    console.log("----show adata 8888--------------", data);
	    console.log("----show adata 8888--------------", data);

	}

	 // {contractDetails && <ShowContractDetails /> }
  return (
    <div>
    </div>
  );
}

export default ShowAssetDetails;
