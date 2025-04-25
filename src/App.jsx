import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { simulateCryptoUpdate } from "./redux/cryptoSlice";
import CryptoTable from "./components/CryptoTable";


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(simulateCryptoUpdate());
    }, 2000); // Every 2 seconds

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-6">📊 Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
}
