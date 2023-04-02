import { useContext } from 'react';
import { ContractContext } from './ContractContext';

function AssetRisk() {
  const {
    assetIncome,
    setAssetIncome,
    assetYield,
    setAssetYield,
    assetRiskRating,
    setAssetRiskRating,
    assetValue,
    setAssetValue,
    currency,
    setCurrency,
    assetNumberShares,
    setAssetNumberShares,
  } = useContext(ContractContext);

  return (
    <div style={{ border: "2px solid lightgrey", borderRadius: "10px", padding: "10px" }}>
      <h3 style={{ textAlign: "center" }}>Asset Financials</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1", marginRight: "5px" }}>
            <input type="number" placeholder="Asset Income" value={assetIncome} 
              onChange={(e) => setAssetIncome(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} />
          </div>
          <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1" }}>
            <input type="number" placeholder="Asset Yield" value={assetYield} 
              onChange={(e) => setAssetYield(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1", marginRight: "5px" }}>
            <input type="number" placeholder="Asset Risk Rating" value={assetRiskRating} 
              onChange={(e) => setAssetRiskRating(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} />
          </div>
          <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1" }}>
            <input type="number" placeholder="Asset Value" value={assetValue} 
              onChange={(e) => setAssetValue(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1", marginRight: "5px" }}>
            <input type="currency" placeholder="Currency" value={currency} 
              onChange={(e) => setCurrency(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} />
          </div>
          <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1" }}>
            <input type="number" placeholder="Asset Number of Shares" value={assetNumberShares} 
              onChange={(e) => setAssetNumberShares(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetRisk;

