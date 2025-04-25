import { createSlice } from "@reduxjs/toolkit";
import sampleData from "../assets/sampleCryptoData";

// Random -5% to +5% ka change
function getRandomChange() {
  return parseFloat((Math.random() * 10 - 5).toFixed(2));
}

// Har coin ka updated data
function getUpdatedData(data) {
  return data.map((coin) => {
    const priceChange = getRandomChange();
    const newPrice = parseFloat((coin.price * (1 + priceChange / 100)).toFixed(2));
    return {
      ...coin,
      price: newPrice,
      change1h: getRandomChange(),
      change24h: getRandomChange(),
      change7d: getRandomChange(),
      volume24h: `${(Math.random() * 100).toFixed(1)}B`,
    };
  });
}

// Redux slice
const cryptoSlice = createSlice({
  name: "crypto",
  initialState: sampleData,
  reducers: {
    updateCryptoData: (state, action) => action.payload,
  },
});

export const { updateCryptoData } = cryptoSlice.actions;

// Simulate update using dispatch
export const simulateCryptoUpdate = () => (dispatch, getState) => {
  const newData = getUpdatedData(getState().crypto);
  dispatch(updateCryptoData(newData));
};

export default cryptoSlice.reducer;
