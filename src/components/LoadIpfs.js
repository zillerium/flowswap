import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { create } from 'ipfs-http-client';
import { ContractContext } from './ContractContext';
import { IpfsContext } from './IpfsContext';

function LoadIpfs() {
  const [pdf, setPdf] = useState(null);
  const { ipfsHash, setIpfsHash } = useContext(IpfsContext);
  const [ipfsUrl, setIpfsUrl] = useState(null);

  const onChangePdf = (e) => {
    setPdf(e.target.files[0]);
  };

  const handleViewIpfs = (e) => {
	  e.preventDefault();
    if (ipfsHash) {
      setIpfsUrl(`https://ipfs.io/ipfs/${ipfsHash}`);
    }
  };

  const loadIpfsPdf = async () => {
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

    const pdfFile = await pdf.arrayBuffer();
    const { cid } = await ipfs.add(pdfFile, { pin: true });
    setIpfsHash(cid.toString());
  };

  return (
    <div>
      <div><h2>Load PDF to Ipfs</h2></div>
      <div>
	     <p>save asset pdf locally first and then upload</p>
          <label for="image-btn">Choose the pdf for the asset: </label>
        <input type="file" id="image-btn" name="pdfFile" onChange={onChangePdf} accept=".pdf" />
        <Button variant="primary" onClick={loadIpfsPdf}>
          Create Asset Pdf to Ipfs
        </Button>
      </div>
      {ipfsHash && (
        <div>
          IPFS hash:{' '}
          <a href={`https://ipfs.io/ipfs/${ipfsHash}` } target="_blank" rel="noopener noreferrer" >
            {ipfsHash}
          </a>
        </div>
      )}
    </div>
  );
}

export default LoadIpfs;
