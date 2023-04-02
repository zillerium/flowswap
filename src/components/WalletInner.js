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
import CheckAllowance from './CheckAllowance';
import ContractShow from './ContractShow';



function WalletInner(props) {
        const   [approveContract, setApproveContract] = useState(false);
        const   [approveAmount, setApproveAmount] = useState(1000000000000);
        const   [allowanceAmount, setAllowanceAmount] = useState(0);
        const   [payContract, setPayContract] = useState(false);
        const   [approveEscrowContract, setApproveEscrowContract] = useState(false);
        const   [paySeller, setPaySeller] = useState(false);
        const   [paymentAmount, setPaymentAmount] = useState();
        const   [erc20ContractAddress, setERC20ContractAddress] = useState('0x0FA8781a83E46826621b3BC094Ea2A0212e71B23');
        const   [contractAddress, setContractAddress] = useState(process.env.REACT_APP_CONTRACT_ADDR);
        const   [contractDetails, setContractDetails] = useState([{}]);
        const   [notary, setNotary]=useState({address: ''});
        const   [sellerAddress, setSellerAddress]=useState({address: ''});
        const   [contractAmount, setContractAmount]=useState(0);
        const   [contractNumber, setContractNumber]=useState(0);
        const   [salesRelease, setSalesRelease] = useState(0);
        const   [disputeRelease, setDisputeRelease] = useState(0);
        const   [assetId, setAssetId] = useState(0);
        const   [assetNumberSharesSold, setAssetNumberSharesSold] = useState(0);
        const   [usdGbpRate, setUsdGbpRate] = useState(0);
 
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
console.log("app amout ------", approveAmount);
return (
    <div className="container">

        <ContractContext.Provider value={{
                approveContract, setApproveContract,
                payContract, setPayContract,
                approveEscrowContract, setApproveEscrowContract,
                paySeller, setPaySeller,
                contractAmount, setContractAmount,
                paymentAmount, setPaymentAmount,
                erc20ContractAddress, setERC20ContractAddress,
                contractAddress, setContractAddress,
                contractDetails, setContractDetails,
                notary, setNotary,
                sellerAddress, setSellerAddress,
                salesRelease, setSalesRelease,
                disputeRelease, setDisputeRelease,
                contractNumber, setContractNumber,
                allowanceAmount, setAllowanceAmount,
              assetId, setAssetId,
                 assetNumberSharesSold, setAssetNumberSharesSold,
                 usdGbpRate, setUsdGbpRate

        }}>
        <div>
    	    <div className="row">
	       <ContractShow />
	    </div>
	</div>

        <div>
	   <div className="row">
  	       <div className="col-12 text-center">
	           <h2>Settle Contract</h2>
               </div>
   	   </div>

      <div className="row">
             <div className="col-6 ">
                 <CheckAllowance address={props.address} /> 
             </div>
             <div className="col-6 ">
	         <GetSellers />
             </div>
      </div>

	   <div className="row">
               <div className="col-12 text-center">
	{allowanceAmount>0 ? <PayContractMgr /> : <div>Approve Wallet First </div>}
	       </div>
           </div>
	</div>
        </ContractContext.Provider>
  </div>
);


}

export default WalletInner;


	





