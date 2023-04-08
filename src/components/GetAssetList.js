import { useEffect, useState, useContext } from 'react';
import { useContractRead } from 'wagmi';
import { ContractContext } from './ContractContext';
import ContractDetails from './ContractDetails';
import abinft from './abinft';

function GetAssetList(props) {
  const { contractNftAddress, assetList, setAssetList, 
  } = useContext(ContractContext);

  const config = {
    address: contractNftAddress,
    abi: abinft,
    overrides: { from: props.address },
    //functionName: 'getBuyerContractsByAddress',
    functionName: 'getAssetsByOwner',
	  args:[props.address]
  };

	console.log("config --------------", config);
  const { data, isLoading, isSuccess } = useContractRead(config);
  console.log("read adat ---------------------------", data);

  useEffect(() => {
    if (isSuccess) {
      if (data) {
	      console.log("len=",data.length);
	      console.log("len=",data[0]);
	      console.log("len=",data[1]);
	      setAssetList(data);
	     // const myArray = Array.from(data.map((contract) => contract));
      }
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading contracts...</div>;
  }

  return (
    <div>
    </div>
  );
}

export default GetAssetList;
