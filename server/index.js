const express = require('express');

const app = express();

app.use(express.json());
const db = require('./models');


//CORS ISSUE SOLUTION
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Headers', '*');

  next();
});

//Routers


const usersRouter = require('./routes/Users')
app.use("/auth", usersRouter);


db.sequelize.sync().then(() => {

  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });

});


