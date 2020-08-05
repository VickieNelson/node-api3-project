// code away!
const express = require("express"); // CommonJS module
const server = express();
const PORT = 8000; // we visit http://localhost:8000/ to see the api
server.listen(PORT, () => console.log(`server running on port ${PORT}`));
