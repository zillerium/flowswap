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
const [dbKey, setDbKey] = useState('');
const [assetOwnerName, setAssetOwnerName] = useState('');
const [assetAddress, setAssetAddress] = useState('');
const [assetValue, setAssetValue] = useState(0);
const [assetNumberShares, setAssetNumberShares] = useState(10000);
const [hasTenant, setHasTenant] = useState(false);
const [hasGarden, setHasGarden] = useState(false);
const [hasParking, setHasParking] = useState(false);
const [assetImageUrl, setAssetImageUrl] = useState('https://i.pinimg.com/originals/c7/69/91/c7699158f7213d6b38a7c55b81c1af07.jpg');
const [currency, setCurrency] = useState('GBP');
const [assetUrl, setAssetUrl] = useState('tba');
const [assetIncome, setAssetIncome] = useState(0);
const [assetYield, setAssetYield] = useState(780);
const [assetNumberBathrooms, setAssetNumberBathrooms] = useState(1);
const [assetNumberBedrooms, setAssetNumberBedrooms] = useState(2);
const [assetHouseType, setAssetHouseType] = useState('Terraced');
const [hasDoubleGlazing, setHasDoubleGlazing] = useState(false);
const [assetRiskRating, setAssetRiskRating] = useState(1);
const [assetPreferredNotary, setAssetPreferredNotary] = useState('0x846799Ed461091F982d52FB2f7812913c8E90B01');
	const [usdGbpRate, setUsdGbpRate] = useState(1.23);
  const [assetNumberSharesSold, setAssetNumberSharesSold] = useState(0);
  const [sellerAddress, setSellerAddress] = useState('0x846799Ed461091F982d52FB2f7812913c8E90B01');
  const [addAsset, setAddAsset] = useState(false);

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
    sellerAddress, setSellerAddress,
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


	





