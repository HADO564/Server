const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const router = require("./routes/router");

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/validate/", router);
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});


