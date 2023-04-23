import { useEffect, useState, useContext } from 'react';
 
import { ContractContext } from './ContractContext';
 
 
import {  Button, ListGroup, Table } from 'react-bootstrap';
import {Link, Routes, Route, useNavigate } from 'react-router-dom';

function AssetDetailsTable(props) {
  const { selAsset, assetDetails, assetValueLocale, assetNumberShares, assetIncomeLocale } = props;

  return (
    <Table bordered striped>
      <tbody>
        <tr>
          <td><strong>Bytes32:</strong></td>
          <td>{selAsset?.slice(0,4)}</td>
        </tr>
        <tr>
          <td><strong>Addr:</strong></td>
          <td><a target="_blank" href={`https://ipfs.io/ipfs/${assetDetails?.ipfsAddr}`}>{assetDetails?.ipfsAddr}</a></td>
        </tr>
        <tr>
          <td><strong>Link:</strong></td>
          <td><Link to={{
            pathname:`/asset/${assetDetails?.ipfsAddr}`, state:{productId: null}
          }}>Offer Page</Link></td>
        </tr>
        <tr>
          <td><strong>Nft:</strong></td>
          <td>{assetDetails?.assetNft?.toString()}</td>
        </tr>
        <tr>
          <td><strong>Value:</strong></td>
          <td>{assetValueLocale}</td>
        </tr>
        <tr>
          <td><strong>Number Shares:</strong></td>
          <td>{assetNumberShares}</td>
        </tr>
        <tr>
          <td><strong>Income:</strong></td>
          <td>{assetIncomeLocale}</td>
        </tr>
        <tr>
          <td><strong>Yield:</strong></td>
          <td>{ (assetDetails?.assetYield / 100)?.toFixed(2)}%</td>
        </tr>
        <tr>
          <td><strong>Risk:</strong></td>
          <td>{assetDetails?.assetRiskRating?.toString()}</td>
        </tr>
        <tr>
          <td><strong>Currency:</strong></td>
          <td>{assetDetails?.currency}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AssetDetailsTable;

