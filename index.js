const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Account = require("./routes/account")

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); 
app.use("/account",Account);

app.listen(port, '0.0.0.0',() => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});

