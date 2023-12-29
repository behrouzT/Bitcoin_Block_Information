import React from 'react';

const BlockInfo = ({ blockInfo }) => {
  return (
    <div className="block-info">
      {blockInfo && (
        <div>
          <h2 style={{ fontSize: '1.5rem' }}>Block Information</h2>
          <ul style={{ fontSize: '1rem' }}>
            <li><strong>Block Creation Time:</strong> {new Date(blockInfo.time * 1000).toLocaleString()}</li>
            <li><strong>Block Size:</strong> {blockInfo.size}</li>
            <li><strong>Block Height:</strong> {blockInfo.height}</li>
            <li><strong>Block Version:</strong> {blockInfo.version}</li>
            <li><strong>Transaction Count:</strong> {blockInfo.nTx}</li>
            <li><strong>Confirmations:</strong> {blockInfo.confirmations}</li>
            <li><strong>Difficulty:</strong> {blockInfo.difficulty}</li>
            <li><strong>MerkleRoot:</strong> {blockInfo.merkleroot}</li>
            <li><strong>Previous Block Hash:</strong> {blockInfo.previousblockhash}</li>
            <li><strong>Next Block Hash:</strong> {blockInfo.nextblockhash}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlockInfo;
