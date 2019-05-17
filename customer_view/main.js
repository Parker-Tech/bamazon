var mysql = require("mysql");
var inquirer = require("inquirer")
var Table = require("cli-table")
var colors = require('colors/safe');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  showProducts();
});

function showProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if(err) throw err;
    for(i = 0; i < res.length; i++) {
      var table = new Table({
        chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
               , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
               , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
               , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
      });
      
      table.push(
        {"ID: ": colors.white(res[i].id)},
        {"Product: ": colors.white(res[i].product_name)},
        {"Department: ": colors.white(res[i].department_name)},
        {"Price: ": colors.white(res[i].price)},
        {"In Stock: ": colors.white(res[i].stock_quantity)}
      );
      console.log(table.toString());
    }
    productSelect();
  });
};

function listTable() {
  //make this function list the table incase i need to call it more than once(line 23)
};

function productSelect() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the ID of the item you would like to buy?",
      name: "itemName"      
    },
    {
      type: "input",
      message: "How many would you like to buy?",
      name: "itemAmount"
    }
  ])
};
