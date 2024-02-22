const express = require('express');
const cors = require("cors")
const { DBConnection } = require("./DBConnection")
const app = express();
const PORT = 3000;
app.use(cors());
const bodyParser = require('body-parser');
app.use(express.json());
const user = require("./Routes/routes")
app.use(bodyParser.json());
DBConnection();

// Call routes
app.use("/api/user", user);
// app.use("/api/v1/user", user)

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})

app.use("/", (req, res) => {
    res.status(200).json("App is working fine..")
});