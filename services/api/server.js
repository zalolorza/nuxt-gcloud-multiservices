const app = require('express')();

const BASE = process.env.ENV === 'production' ? '':'/api'

app.use(`${BASE}/`, require("./index"));
app.use(`${BASE}/test/`, require("./test/index"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
