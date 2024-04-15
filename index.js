const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const vpnRouter = require("./routes/Vpn");

app.use(cors());
app.use(express.json());

app.use("/vpn", vpnRouter);
// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
