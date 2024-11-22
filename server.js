// server.js
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
// const walletService = require('./walletService');

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); // Parse JSON bodies

const headers = {
  "api-key": "51022393d-b6b3-44c1-9770-56e80A9c87366",
};

const buyUri = "https://api.plonkbot.com/create-buy";
const addWalletUri = "https://api.plonkbot.com/create-wallet-with-key";

// Create wallet endpoint
app.post("/createWallet", (req, res) => {
  try {
    const wallet = walletService.createWallet();
    res.json({ address: wallet.address });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Buy token endpoint
app.post("/buyToken", async (req, res) => {
  const { mintAccount, amount, walletPublicKey } = req.body;
  console.log("Here");
  try {
    const requestBody = {
      mintAccount: "6QSVGUEyBZWRshnXKhS96NQ97vGWiTu61SyHLAbYpump",
      amount: "0.01",
      walletPublicKey: "2DNDRoVSY5eqWMDoUXXXwpGs1aKDqrpYNkZtd2MqufNS",
    };
    const headers = {
      "api-key": "51022393d-b6b3-44c1-9770-56e80A9c87366",
    };

    console.log("Before response");
    const response = await axios.post(buyUri, requestBody, { headers });

    // const transaction = walletService.buyToken(address, amount);
    // res.json({ message: "Token purchased successfully", transaction });
    console.log("Response:", response);
    res.json({ message: "Token purchased successfully", response });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// Sell token endpoint
app.post("/sellToken", (req, res) => {
  const { address, amount } = req.body;
  try {
    const transaction = walletService.sellToken(address, amount);
    res.json({ message: "Token sold successfully", transaction });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get token stats endpoint
app.get("/getTokenStats", (req, res) => {
  try {
    const stats = walletService.getTokenStats();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
