import React from "react";

const AssetFinancials = ({
  assetValue,
  assetIncome,
  assetYield,
  assetRiskRating,
  assetNumberShares,
}) => {
  return (
    <div align="left" className="text-left" style={{ backgroundColor: 'lightblue'}}>
      <div><b>Asset Value</b> - {assetValue.toLocaleString()} GBP</div>
      <div><b>Income</b> - {assetIncome.toLocaleString()} GBP</div>
      <div><b>Yield</b> - {assetYield}%</div>
      <div><b>Risk</b> - {assetRiskRating}</div>
      <div><b>Number shares</b> - {assetNumberShares.toLocaleString()}</div>
    </div>
  );
};

export default AssetFinancials;
