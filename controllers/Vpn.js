const axios = require("axios");

const getApi = (req, res) => {
  axios.get("https://www.vpngate.net/api/iphone/")
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Done",
        result : result.data // Use result.data to access the response data
      });
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