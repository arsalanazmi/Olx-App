const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./serverConfig');
const app = express();
const port = 5000;
const dbConnect = require('./dbConnect')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
dbConnect();

const corsOptions = {
    // origin: "http://localhost:5005",
    origin: "http://localhost:5000",
    methods: ['GET', 'POST'],
    credentials: true
};
app.use(cors(corsOptions));
const registrationRoutes = require('./Routes/RegistrationRoutes');
app.use('/registration', registrationRoutes);

app.use(function(error, req, res, next){
    if (error) {
        console.log(error); //eslint-disable-line
        res.send(error);
        next();
    } else {
        next();
    }
  });
  app.listen(config.port, function() {
    console.log('server is running on localhost:' + config.port); //eslint-disable-line
});