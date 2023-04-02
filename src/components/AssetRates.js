import React, { useContext } from 'react';
import { ContractContext } from './ContractContext';

function AssetRates() {
  const {
    usdGbpRate, setUsdGbpRate,
    assetNumberSharesSold, setAssetNumberSharesSold,
  } = useContext(ContractContext);

  return (
    <div style={{ border: "2px solid lightgrey", borderRadius: "10px", padding: "10px" }}>
      <h3 style={{ textAlign: "center" }}>Asset Rates</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1", marginRight: "5px" }}>
          <input type="number" placeholder="USD-GBP Rate" value={usdGbpRate} 
            onChange={(e) => setUsdGbpRate(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} />
        </div>
        <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1", marginLeft: "5px" }}>
          <input type="number" placeholder="Number of Shares Sold" value={assetNumberSharesSold} 
            onChange={(e) => setAssetNumberSharesSold(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} />
        </div>
      </div>
    </div>
  );
}

export default AssetRates;
