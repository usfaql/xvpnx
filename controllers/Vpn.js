const axios = require("axios");

const getApi = (req, res) => {
  axios.get("https://www.vpngate.net/api/iphone/")
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

module.exports = {
  getApi
};