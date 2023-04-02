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
    <>
      <div>
        <input type="number" placeholder="Asset Income" value={assetIncome} 
          onChange={(e) => setAssetIncome(e.target.value)} />
      </div>
      <div>
        <input type="number" placeholder="Asset Yield" value={assetYield} 
          onChange={(e) => setAssetYield(e.target.value)} />
      </div>
      <div>
        <input type="number" placeholder="Asset Risk Rating" value={assetRiskRating} 
          onChange={(e) => setAssetRiskRating(e.target.value)} />
      </div>
      <div>
        <input type="number" placeholder="Asset Value" value={assetValue} 
          onChange={(e) => setAssetValue(e.target.value)} />
      </div>
      <div>
        <input type="currency" placeholder="Asset Value" value={currency} 
          onChange={(e) => setCurrency(e.target.value)} />
      </div>
      <div>
        <input type="number" placeholder="Asset Number of Shares" value={assetNumberShares} 
          onChange={(e) => setAssetNumberShares(e.target.value)} />
      </div>
    </>
  );
}

export default AssetRisk;
