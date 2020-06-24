const Sequelize = require("sequelize");
const db = require("../db");

const Book = db.define("book", {
  uid:{type:Sequelize.STRING},
  title: { type: Sequelize.STRING,allowNull: false },
  printType:{ type: Sequelize.STRING},
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://via.placeholder.com/480x240?text=Placeholder",
  },
  authors:{type: Sequelize.STRING},
  saleInfo:{type:Sequelize.STRING}
});

module.exports = Book;