# 🪙 Crypto Price Fetcher (Level 1)

A sleek, lightweight Express.js backend for fetching real-time cryptocurrency prices and the latest market news.

---

## 🚀 Features

- **Real-time Bitcoin Price**: Fetches the current USD price of BTC.
- **Real-time Ethereum Price**: Fetches the current USD price of ETH.
- **Crypto News Feed**: Retrieves the top 5 latest news stories from the crypto world.
- **Robust Error Handling**: Gracefully handles API failures and missing data.
- **CORS Enabled**: Ready to be consumed by any frontend application.

## 🛠️ Technology Stack

- **Node.js**: Runtime environment.
- **Express.js**: Web framework for the API.
- **Axios**: Promise-based HTTP client for browser and node.js.
- **Dotenv**: Zero-dependency module that loads environment variables.

---

## 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/joshxdevs/crypto-price-fetcher-lvl-1.git
   cd crypto-price-fetcher-lvl-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```
   *The server will run on `http://localhost:5000`*

---

## 🔌 API Endpoints

### 💰 Get Bitcoin Price
- **URL**: `/btc-price`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "bitcoin": {
      "usd": 77100
    }
  }
  ```

### 💎 Get Ethereum Price
- **URL**: `/eth-price`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "ethereum": {
      "usd": 2328.08
    }
  }
  ```

### 📰 Get Latest News
- **URL**: `/news`
- **Method**: `GET`
- **Response**: An array of the 5 most recent news articles.
  > **Note**: This endpoint may require an API key from [CryptoCompare](https://min-api.cryptocompare.com/) if the free tier limit is reached or if authentication is enforced.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
