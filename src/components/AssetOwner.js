import React, { useContext } from 'react';
import { ContractContext } from './ContractContext';

function AssetOwner() {
  const {
    assetOwnerName, setAssetOwnerName,
    assetAddress, setAssetAddress,
    sellerAddress, setSellerAddress,
    assetPreferredNotary, setAssetPreferredNotary,
  } = useContext(ContractContext);

  return (
    <div style={{ border: "2px solid lightgrey", borderRadius: "10px", padding: "10px" }}>
      <h3 style={{ textAlign: "center" }}>Asset Owner Details</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1", marginRight: "5px" }}>
            <input type="text" placeholder="Asset Owner Name" value={assetOwnerName} 
              onChange={(e) => setAssetOwnerName(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} 
              title={'Asset Owner Name'} />
          </div>
          <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1", marginLeft: "5px" }}>
            <input type="text" placeholder="Asset Address" value={assetAddress} 
              onChange={(e) => setAssetAddress(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} 
              title={'Asset Street Address'} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1", marginRight: "5px" }}>
            <input type="text" placeholder="Asset Preferred Notary" value={assetPreferredNotary}
              onChange={(e) => setAssetPreferredNotary(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }}
              title={'Notary Address'} />
          </div>
          <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1", marginLeft: "5px" }}>
            <input type="text" placeholder="Seller Address" value={sellerAddress}
              onChange={(e) => setSellerAddress(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }}
              title={'Seller Blockchain Address'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetOwner;
