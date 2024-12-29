import React, { useEffect } from "react";
import { useState } from "react";
import CurrencyDropdown from "./CurrencyDropdown";

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("MAD");

  const fetchCurrencies = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const res = await fetch(
        `https://api.exchangeratesapi.io/v1/symbols?access_key=${apiKey}`
      );
      const data = await res.json();
      setCurrencies(Object.entries(data.symbols));
    } catch (error) {
      console.error("Error fetching", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  console.log(currencies);

  const convertCurrency = () => {
    // conversion code
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-2xl font-semibold text-gray-700">
        CrossCash Currency Converter
      </h2>

      <div>
        <CurrencyDropdown
          currencies={currencies}
          title="From:"
          currency={fromCurrency}
          setCurrency={setFromCurrency}
        />
        {/* swap button */}
        <CurrencyDropdown
          currencies={currencies}
          title="To:"
          currency={toCurrency}
          setCurrency={setToCurrency}
        />
      </div>

      <div className="my-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount:
        </label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus-ring-blue-500 "
        />
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={convertCurrency}
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Convert!
        </button>
      </div>
      <div className="mt-4 text-lg font-medium text-center text-red-600">
        Result:
      </div>
    </div>
  );
};

export default CurrencyConverter;
