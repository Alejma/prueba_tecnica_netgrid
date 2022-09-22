const express = require('express');
const v1BoardRouter = require("./v1/routes/boardRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/boards", v1BoardRouter);

app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});
