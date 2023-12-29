import React, { useState } from 'react';
import axios from 'axios';
import logo from './images/logos/logo.svg';
import './App.css';
import BlockInfo from './components/BlockInfo';

function App() {
  const [blockIdentifier, setBlockIdentifier] = useState('');
  const [blockInfo, setBlockInfo] = useState(null);
  const [error, setError] = useState('');
  const [selectedBlockchain, setSelectedBlockchain] = useState('Bitcoin');

  const fetchBlockInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/bitcoin/${blockIdentifier}`);
      if (response.data && response.data.error === 'Bad Request' && response.data.message && response.data.message.includes('INVALID_INPUT')) {
        setError('Invalid input. Please enter a valid block hash or block number.');
        setBlockInfo(null);
      } else {
        setBlockInfo(response.data.result);
        setError('');
      }
    } catch (err) {
      if (err.response && err.response.status === 400 && err.response.data.message && err.response.data.message.includes('INVALID_INPUT')) {
        setError('Invalid input. Please enter a valid block hash or block number.');
        setBlockInfo(null);
      } else {
        setError('Block not found or an error occurred.');
        setBlockInfo(null);
      }
    }
  };



  const handleInputChange = (event) => {
    setBlockIdentifier(event.target.value);
  };

  const handleBlockchainChange = (event) => {
    setSelectedBlockchain(event.target.value);
    setBlockIdentifier('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchBlockInfo();
  };

  const placeholderText = `Search for the ${selectedBlockchain} block you want to retrieve information for`;

  return (
    <div className="main-container">
      <img src={logo} alt="Logo" height="50px" className="logo" />
      <h1>Blockchain Block Information</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="mb-3">
          <label htmlFor="blockchainSelector" className="form-label">
            Select Blockchain :
          </label>
          <select
            value={selectedBlockchain}
            onChange={handleBlockchainChange}
            className="form-select"
            id="blockchainSelector"
          >
            <option value="Bitcoin"> Bitcoin </option>
          </select>
        </div>
        <p></p>
        <div className="mb-3">
          <label htmlFor="blockIdentifier" className="form-label">
            Enter Block Hash or Block Number :
          </label>
          <p></p>
          <input
            type="text"
            className="form-control"
            id="blockIdentifier"
            value={blockIdentifier}
            onChange={handleInputChange}
            placeholder={placeholderText}
            required
          />
        </div>
        <p></p>
        <button type="submit" className="btn btn-primary">
          Get Block Info
        </button>
      </form>
      {error && <div className="alert">{error}</div>}
      <BlockInfo blockInfo={blockInfo} />
    </div>
  );
}

export default App;
