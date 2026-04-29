const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/btc-price", async (req, res) => {
    try {
        const response = await axios.get(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching BTC price:", error.message);
        res.status(500).json({ error: "Failed to fetch BTC price" });
    }
});

app.get("/eth-price", async (req, res) => {
    try {
        const response = await axios.get(
            "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching ETH price:", error.message);
        res.status(500).json({ error: "Failed to fetch ETH price" });
    }
});

app.get("/news", async (req, res) => {
    try {
        const response = await axios.get(
            "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
        );

        if (response.data && Array.isArray(response.data.Data)) {
            res.json(response.data.Data.slice(0, 5));
        } else {
            res.status(401).json({ 
                error: "API Error", 
                message: response.data.Message || "Unable to fetch news. An API key might be required." 
            });
        }
    } catch (error) {
        console.error("Error fetching news:", error.message);
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

app.listen(PORT, () => {
    console.log("Server Started");
});