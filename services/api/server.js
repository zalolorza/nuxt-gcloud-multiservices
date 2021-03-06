const app = require('express')();
var cors = require('cors')
app.use(cors())

const BASE = '/api'

app.use(`${BASE}/`, require("./index"));
app.use(`${BASE}/test/`, require("./test/index"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
