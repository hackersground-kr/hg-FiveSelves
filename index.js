const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

app.use(express.json());
const corsOptions = {
  origin: process.env.CLIENT_ORIGIN,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/public')));

// Port Setting
const PORT = process.env.PORT;

// API Test
app.get('/', (req, res) => {
  res.send('API Running');
});

// DataBase
const db = require('./models');

// API Router Call
// const ApiRouter = require('./routes/');
// app.use('/', ApiRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Port
// db.sequelize.sync().then(() => {
//   app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// });

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
