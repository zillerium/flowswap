import React, { useContext } from 'react';
import { ContractContext } from './ContractContext';

function AssetLinks() {
  const {
    assetImageUrl, setAssetImageUrl,
    assetUrl, setAssetUrl,
  } = useContext(ContractContext);

  return (
    <div style={{ border: "2px solid lightgrey", borderRadius: "10px", padding: "10px" }}>
      <h3 style={{ textAlign: "center" }}>Asset Links</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1", marginRight: "5px" }}>
          <input type="text" placeholder="Asset Image URL" value={assetImageUrl} 
            onChange={(e) => setAssetImageUrl(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} />
        </div>
        <div style={{ borderRadius: "10px", border: "1px solid lightgrey", flex: "1", marginLeft: "5px" }}>
          <input type="text" placeholder="Asset URL" value={assetUrl} 
            onChange={(e) => setAssetUrl(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} />
        </div>
      </div>
    </div>
  );
}

export default AssetLinks;
