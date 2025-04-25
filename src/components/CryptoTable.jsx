// src/components/CryptoTable.jsx

import React from 'react';
import { useSelector } from 'react-redux';

const CryptoTable = () => {
  const cryptoData = useSelector(state => state.crypto);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h Change</th>
            <th>24h Change</th>
            <th>7d Change</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((coin, index) => (
            <tr key={coin.id}>
              <td>{index + 1}</td>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>{coin.price}</td>
              <td className={coin.change1h > 0 ? 'text-green-500' : 'text-red-500'}>{coin.change1h}%</td>
              <td className={coin.change24h > 0 ? 'text-green-500' : 'text-red-500'}>{coin.change24h}%</td>
              <td className={coin.change7d > 0 ? 'text-green-500' : 'text-red-500'}>{coin.change7d}%</td>
              <td>{coin.marketCap}</td>
              <td>{coin.volume24h}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
