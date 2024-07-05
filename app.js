const express = require('express');
const Allroutes = require('./router');
const app = express();
const { ErrorHandler, NotFoundErr } = require("./utils/error-handling")
require("./config/mongo.config");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const PORT = 3000;

app.use(Allroutes)
app.use(NotFoundErr)
app.use(ErrorHandler)
app.listen(PORT, () => {
    console.log(`Server is run on port  ${PORT}`);
})

