import { useEffect, useState, useContext } from 'react';
import { useContractRead } from 'wagmi';
import { ContractContext } from './ContractContext';
import ShowAssetDetails from './ShowAssetDetails';
import abinft from './abinft';
import {BigNumber} from 'bignumber.js';
import {  Button, ListGroup, Table } from 'react-bootstrap';
import {Link, Routes, Route, useNavigate } from 'react-router-dom';


function AssetListBytes32(props) {
  const { contractNftAddress, assetList, assetDetails, setAssetDetails } = useContext(ContractContext);
	const [selAsset, setSelAsset]=useState();
console.log("jjjjjjjjjjjjjjj", assetList);
//           <ContractDetails contractNum={contractNum} />
          //{contractDetails && <ShowContractDetails /> }
  const showAssetDetailsFunc=(c) => {
	  console.log("c=====", c);
	  setSelAsset(c);
	  console.log("ccontarct=====", selAsset);
  }

 /* {selContract && (
           <ContractDetails contractNum={selContract} />
  )}
          {contractDetails && <ShowContractDetails /> }
*/
	//  {contractDetails}
  const dateFormat = {
     dateStyle: 'long',
	  timeStyle: 'short',
	  hour12: true
  }
/*console.log("asset details ==============", assetDetails);
//console.log("asset details 0 kkk ==============", assetDetails.assetNft.value._hex.toString());
console.log("asset details 0 ==============", assetDetails.assetNft.toString());
console.log("asset details 0 ==============", assetDetails.assetIncome.toString());
console.log("asset details 0 ==============", assetDetails.assetNumberShares.toString());
console.log("asset details 0 ==============", assetDetails.assetValue.toString());
console.log("asset details 0 ==============", assetDetails.assetYield.toString());
console.log("asset details 0 ==============", assetDetails.assetRiskRating.toString());
console.log("asset details 0 ==============", assetDetails.currency);
*/

        const assetValueLocale2 =new Number(assetDetails?.assetValue?.toString()).toLocaleString('en-US', 
	undefined,
        {minimumFractionDigits: 2, maximumFractionDigits: 2});

	let currency= assetDetails?.currency;
	if (!currency){ currency='USD'};

	console.log("currency ================= ", currency);
	console.log("currency ================= ", currency);
	console.log("currency ================= ", currency);

        const num1 = assetDetails?.assetValue?.toString();
	console.log("num1 asset =============== ", assetDetails);
	console.log("num1 asset len =============== ", assetDetails?.length);
	console.log("num1 =============== ", num1);
	console.log("num1 =============== ", num1);
	console.log("num1 =============== ", num1);

        const assetValueLocale = new Number(assetDetails?.assetValue?.toString()).toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: currency
        });

        const assetIncomeLocale = new Number(assetDetails?.assetIncome?.toString()).toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: currency
        });

        const assetNumberShares = new Number(assetDetails?.assetNumberShares?.toString()).toLocaleString(2);


   return (
    <div>
	   <div className="row">
       <div className="col-6">
      <h3>List of Assets:</h3>
      <ListGroup
	   > 
        {props.assets && props.assets.map((assetNum) => (
          <ListGroup.Item key={assetNum}>
            <Button variant="light" onClick={() => showAssetDetailsFunc(assetNum)}>
              {assetNum}
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
     </div>

      {selAsset && <ShowAssetDetails address={props.address} assetNum={selAsset} />}

       <div className="col-6">
      {selAsset && assetDetails?.assetIncome && JSON.stringify(assetDetails) !== JSON.stringify([{}]) && (
        <div> 

          <h3>Asset Details:  </h3>
	      <Table bordered striped>
            <tbody>
              <tr>
                <td><strong>Bytes32:</strong></td>
                <td>{selAsset?.slice(0,4)}</td>
              </tr>
              <tr>
                <td><strong>Addr:</strong></td>
                <td><a target="_blank" href={`https://ipfs.io/ipfs/${assetDetails?.ipfsAddr}`}>{assetDetails?.ipfsAddr}</a></td>
              </tr>
              <tr>
                <td><strong>Link:</strong></td>
                <td><Link to={{
			pathname:`/asset/${assetDetails?.ipfsAddr}`, state:{productId: null}
		}}>Offer Page</Link>
</td>
              </tr>
              <tr>
                <td><strong>Nft:</strong></td>
                <td>{assetDetails?.assetNft?.toString()}</td>
              </tr>
              <tr>
                <td><strong>Value:</strong></td>
                <td>{assetValueLocale}</td>
              </tr>
              <tr>
                <td><strong>Number Shares:</strong></td>
                <td>{assetNumberShares}</td>
              </tr>
              <tr>
                <td><strong>Income:</strong></td>
                <td>{assetIncomeLocale}</td>
              </tr>
              <tr>
                <td><strong>Yield:</strong></td>
	        <td>{ (assetDetails?.assetYield / 100)?.toFixed(2)}%</td>
              </tr>
              <tr>
                <td><strong>Risk:</strong></td>
                <td>{assetDetails?.assetRiskRating?.toString()}</td>
              </tr>
              <tr>
                <td><strong>Currency:</strong></td>
                <td>{assetDetails?.currency}</td>
              </tr>
            </tbody>
          </Table>

        </div>
      )}
     </div>
    </div>
    </div>
  );
}

export default AssetListBytes32;
