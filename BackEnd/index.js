const { sequelize } = require( "./src/database/database");
const express = require("express");
const cors = require("cors");
const routerApi = require("./src/routes/index");
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./src/middlewares/error.handler");

const app = express();

const port = process.env.PORT ; 

const whitelist = ["http://localhost:8080", "http://localhost:3000"]; 
const corsOptions = {
  origin: (origin, callback) => { 
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static('../FrontEnd/public'));

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
 
app.listen(port, () => {
    sequelize.sync({ force: false }).then(() => {
        console.log("Database is connected");
    });
    console.log(`Server running on port ${port}`);
});