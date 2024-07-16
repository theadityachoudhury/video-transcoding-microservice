const express = require("express");
const auth = require("./Routes/auth");

const app = express();

//middle ware to log all the requests
app.use((req, res, next) => {
    console.log("New request received");
    next();
});

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and running",
        status: 200
    })
});

app.use("/api/auth", auth);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})