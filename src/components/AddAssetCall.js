import {ContractContext} from './ContractContext'

import React, {useState, useContext} from 'react';

import {Button} from 'react-bootstrap';
import AddAsset from './AddAsset';

function AddAssetCall() {

     const  {
                 addAsset, assetId, assetValue, assetNumberShares, assetIncome, assetYield, assetRiskRating, currency
                } = useContext(ContractContext)
/*
const showAssetButton = !addAsset && assetId> 0 && assetValue > 0 && assetNumberShares > 0 && assetIncome > 0 &&
                    assetYield > 0 && assetRiskRating > 0 && currency !='';

	    {showAssetButton ? <AddAsset /> : <div><Button  variant="primary" disabled >Add Asset {assetId} </Button>
            </div> }
*/
return ( 
      <>
	{	!addAsset && assetId> 0 && assetValue > 0 && assetNumberShares > 0 && assetIncome > 0 &&
                    assetYield > 0 && assetRiskRating > 0 && currency !='' && <AddAsset  />}
 

        </>
    )

}

export default AddAssetCall;

