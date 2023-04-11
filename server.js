const express = require('express');
const app = express();
const http = require('http');
const studentRoutes = require("./src/student/routes");

//init middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/api/v1/students", studentRoutes);

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
    server.listen(PORT, () => {
        console.log(`server listening on port: ${PORT}`)
});


