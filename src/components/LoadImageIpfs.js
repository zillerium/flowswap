import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { create } from 'ipfs-http-client';
import { ContractContext } from './ContractContext';
import { IpfsContext } from './IpfsContext';

function LoadImageIpfs() {
  const [productImage, setProductImage] = useState(null);
  const { ipfsImageHash, setIpfsImageHash } = useContext(IpfsContext);
  const [ipfsImageUrl, setIpfsImageUrl] = useState(null);

  const onChangeImage = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleViewIpfs = (e) => {
	  e.preventDefault();
    if (ipfsImageHash) {
      setIpfsImageUrl(`https://ipfs.io/ipfs/${ipfsImageHash}`);
    }
  };

  const loadIpfsImage = async () => {
    const ipfs = create({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
      headers: {
        authorization: `Basic ${Buffer.from(
          `${process.env.REACT_APP_INFURA_PROJECT_ID}:${process.env.REACT_APP_INFURA_API_KEY}`
        ).toString('base64')}`,
      },
    });

    const imageFile = await productImage.arrayBuffer();
    const { cid } = await ipfs.add(imageFile, { pin: true });
    setIpfsImageHash(cid.toString());
  };

  return (
    <div>
      <div><h2>Load Image to Ipfs</h2></div>
      <div>
          <label for="image-btn">Choose the asset image: </label>
        <input type="file" name="imageFile" id="image-btn" onChange={onChangeImage} accept="image/png, image/png, image/jpeg, image/jpg" />
        <Button variant="primary" onClick={loadIpfsImage}>
          Create Asset Image to Ipfs
        </Button>
      </div>
      {ipfsImageHash && (
        <div>
          IPFS Image hash:{' '}
          <a href={`https://ipfs.io/ipfs/${ipfsImageHash}` } target="_blank" rel="noopener noreferrer" >
            {ipfsImageHash}
          </a>
        </div>
      )}
    </div>
  );
}

export default LoadImageIpfs;
