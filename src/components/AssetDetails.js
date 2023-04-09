import React, { useContext } from 'react';
import { ContractContext } from './ContractContext';

function AssetDetails() {
  const {
    assetNumberBathrooms, setAssetNumberBathrooms,
    assetNumberBedrooms, setAssetNumberBedrooms,
    assetHouseType, setAssetHouseType,
  } = useContext(ContractContext);

  return (
    <div style={{ border: "2px solid lightgrey", borderRadius: "10px", padding: "10px" }}>
      <h3 style={{ textAlign: "center" }}>Asset Details</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1", marginRight: "5px" }}>
            <input type="number" placeholder="Asset Number of Bathrooms" value={assetNumberBathrooms} 
              onChange={(e) => setAssetNumberBathrooms(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} 
              title={'asset Number Bathrooms'} />
          </div>
          <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1", marginLeft: "5px" }}>
            <input type="number" placeholder="Asset Number of Bedrooms" value={assetNumberBedrooms} 
              onChange={(e) => setAssetNumberBedrooms(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} 
              title={'asset Number Bedrooms'} />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1" }}>
            <input type="text" placeholder="Asset House Type" value={assetHouseType} 
              onChange={(e) => setAssetHouseType(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} 
              title={'asset House Type'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetDetails;
