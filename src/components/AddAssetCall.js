import {ContractContext} from './ContractContext'

import React, {useState, useContext} from 'react';

import {Button} from 'react-bootstrap';
import AddAsset from './AddAsset';
import {IpfsContext} from './IpfsContext';


function AddAssetCall() {

     const  {
                 addAsset, assetId, assetValue, assetNumberShares, assetIncome, assetYield, assetRiskRating, currency
                } = useContext(ContractContext)
      const {ipfsHash, setIpfsHash, ipfsImageHash, setIpfsImageHash } = useContext(IpfsContext);

const showAssetButton = !addAsset && ipfsHash != '0x' && assetId> 0 && assetValue > 0 && assetNumberShares > 0 && assetIncome > 0 &&
                    assetYield > 0 && assetRiskRating > 0 && currency !='';

	    {showAssetButton ? <AddAsset /> : <div><Button  variant="primary" disabled >Add Asset {ipfsHash} </Button>
            </div> }

return ( 
      <>
	{showAssetButton} 
	    {showAssetButton ? <AddAsset /> : <div><Button  variant="primary" disabled >Add Asset {ipfsHash} </Button>
            </div> }

        </>
    )

}

export default AddAssetCall;

