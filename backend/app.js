const express = require("express");
const auth = require("./Routes/auth");
const config = require("./Config/index");
const { success, error } = require("consola");
const { connect } = require("mongoose");

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

const startApp = async () => {
    try {
        // Connection With DB
        await connect(config.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: config.REQUEST_TIMEOUT,
            writeConcern: { w: 'majority' },
        });


        success({
            message: `Successfully connected with the Database \n${config.DATABASE_URL}`,
            badge: true,
        });

        // Start Listenting for the server on PORT
        app.listen(config.PORT, async () => {
            success({ message: `Server started on PORT ${config.PORT}`, badge: true });
        });
    } catch (err) {
        error({
            message: `Unable to connect with Database \n${err}`,
            badge: true,
        });
        startApp();
    }
};

startApp();


// const promise1 = new Promise(function (resolve, reject) {
//     resolve(" Fulfilled");
//     reject("Not fulfilled");
// })

// const ff = async () => {
//     try {
//         const data = await promise1;
//         console.log(data)
//     } catch (error) {
//         console.log(error)

//     }


// }

// // ff();
// promise1.then((data) => console.log(data)).catch((err) => console.log(err));
