import {useEffect, useState, useContext } from 'react'; 
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';
import {CartContext} from '../CartContext';
import {ContractContext} from './ContractContext';
import ApproveEscrowContract from './ApproveEscrowContract';
import PayContract from './PayContract';
import GetSellers from './GetSellers';
import ApproveContract from './ApproveContract';
import PaySeller from './PaySeller';
import PayContractMgr from './PayContractMgr';
import AddAssetMgr from './AddAssetMgr';
import GetAssetList from './GetAssetList';
import AssetListBytes32 from './AssetListBytes32';



function ListAssetInner(props) {
        const   [contractNftAddress, setContractNftAddress] = useState(process.env.REACT_APP_NFT_CONTRACT_ADDR);
        const   [assetList, setAssetList] = useState([]);
        const   [assetDetails, setAssetDetails] = useState([{}]);

	const isConnectedWallet = props.isConnected;
        const payer = props.address;
        const cart = useContext(CartContext);
console.log("yyyyyy - ", process.env.REACT_APP_NFT_CONTRACT_ADDR);
console.log("yyyyyy jj - ", process.env);
	//setApproveAmount(1000000000000);
return (
    <div className="container">

       <ContractContext.Provider value={{
  	    contractNftAddress, assetList, setAssetList, assetDetails, setAssetDetails,
        }}>
        <div>
	   <div className="row">
  	       <div className="col-12 text-center">
               </div>
   	   </div>


	   <div className="row">
               <div className="col-12 text-center">
	           { <GetAssetList  isConnected={props.isConnected} address={props.address}  /> }
	       </div>
           </div>
	    <div className="row">
                <div className="col-12 ">
                     <h1>Asset Details</h1>
                      {assetList.length>0 && <AssetListBytes32 address={props.address} assets={assetList}/> }
                </div>

             </div>
	</div>
        </ContractContext.Provider>
  </div>
);


}

export default ListAssetInner;

	





