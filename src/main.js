const sequelize = require("./config/dbconfig");
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Tables have been created.");
  })
  .catch((err) => {
    console.error("Unable to create tables:", err);
  });
