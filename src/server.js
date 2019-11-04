const express = require("express");
const routes = require("./routes");

require("./database");

const app = express();


app.use(express.json());
app.get(("/"), (req, res) => {
    res.json({message: "Hello World - First"})
});

app.use(routes);

app.listen(7777);