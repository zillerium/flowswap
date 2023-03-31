import React from "react";
import { Image } from "react-bootstrap";

const AssetImages = ({ imageUrl, alt }) => {
  return (
    <div>
      <Image src={imageUrl} className="img-fluid shadow-4" alt={alt} />
    </div>
  );
};

export default AssetImages;
