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



function AssetWalletInner(props) {
        const   [erc20ContractAddress, setERC20ContractAddress] = useState('0x0FA8781a83E46826621b3BC094Ea2A0212e71B23');
        const   [contractAddress, setContractAddress] = useState(process.env.REACT_APP_CONTRACT_ADDR);
        const   [contractDetails, setContractDetails] = useState([{}]);
        const   [notary, setNotary]=useState({address: ''});
        const   [contractNumber, setContractNumber]=useState(0);



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
  const [addAsset, setAddAsset] = useState(null);

	const isConnectedWallet = props.isConnected;
        const payer = props.address;
        const cart = useContext(CartContext);
console.log("yyyyyy - ", process.env.REACT_APP_CONTRACT_ADDR);
console.log("yyyyyy jj - ", process.env);
	//setApproveAmount(1000000000000);
//useEffect(() => {
//		setERC20ContractAddress('0x0FA8781a83E46826621b3BC094Ea2A0212e71B23');
//	setContractAddress(process.env.REACT_APP_CONTRACT_ADDR);
//	setApproveAmount(1000000000000);
//	setApproveContract(true);
//	setApproveEscrowContract(true);
	//setPayContract(false);
//}, [])
return (
    <div className="container">

 <ContractContext.Provider value={{
	 addAsset, setAddAsset,
    erc20ContractAddress, setERC20ContractAddress,
    contractAddress, setContractAddress,
    contractDetails, setContractDetails,
    notary, setNotary,
    contractNumber, setContractNumber,
    assetNumberSharesSold, setAssetNumberSharesSold,
    usdGbpRate, setUsdGbpRate,
    password, setPassword,
    correct, setCorrect,
    assetId, setAssetId,
    dbKey, setDbKey,
    assetOwnerName, setAssetOwnerName,
    assetAddress, setAssetAddress,
    assetValue, setAssetValue,
    assetNumberShares, setAssetNumberShares,
    hasTenant, setHasTenant,
    hasGarden, setHasGarden,
    hasParking, setHasParking,
    assetImageUrl, setAssetImageUrl,
    currency, setCurrency,
    assetUrl, setAssetUrl,
    assetIncome, setAssetIncome,
    assetYield, setAssetYield,
    assetNumberBathrooms, setAssetNumberBathrooms,
    assetNumberBedrooms, setAssetNumberBedrooms,
    assetHouseType, setAssetHouseType,
    hasDoubleGlazing, setHasDoubleGlazing,
    assetRiskRating, setAssetRiskRating,
    assetPreferredNotary, setAssetPreferredNotary,
}}>



        <div>
	   <div className="row">
  	       <div className="col-12 text-center">
               </div>
   	   </div>


	   <div className="row">
               <div className="col-12 text-center">
	{ <AddAssetMgr /> }
	       </div>
           </div>
	</div>
        </ContractContext.Provider>
  </div>
);


}

export default AssetWalletInner;


	





