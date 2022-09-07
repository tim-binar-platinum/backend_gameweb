const express = require("express");
const app = express();
const port = 8000;
const userRoute = require("./src/user/user.route");

app.use(express.json());
app.use(userRoute);

app.get('/', (req, res) => {
    return res.send("berhasil");
})

app.listen(port, () => {
    console.log("website listen in port " + port);
})