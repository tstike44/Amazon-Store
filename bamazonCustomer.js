var inquirer = require('inquirer');
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "top_songsDB"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});


//ask the user for the product id 
//show the user all of the options that they have to choose from and the quantities available.
//then ask how many unitw of the product they want 
//check the available quantity and what the user asked for adn respond with whether or not we have enough
//update after each selection
//display to the user how much the products added up will cost.

function start() {
    inquirer.prompt({
        name: "askId",
        mesage: "Hello Stranger, please Enter the ID of the product you are looking for",
        type: "list",
        choices: ["0028: Tide Detergent", "1005: Lucky Charms", "1080: Peanut Butter", "0228: Logitech Keyboard", "2042: Ant Spray", "6666: Recliner", "6453: Office Chair", "5674: Ajax Dish Soap", "6232: 10lb bag of Peanuts", "9292: Samsung 970 SSD", "EXIT"]

    })
        .then(answers => {
            var quantity;
            switch (answers.askID) {
                case answers.askID[0]:
                    var quantity = 15;
                    break;
                case answers.askID[1]:
                    var quantity = 20;
                    break;
                case answers.askID[2]:
                    var quantity = 13;
                    break;
                case answers.askID[3]:
                    var quantity = 3;
                    break;
                case answers.askID[4]:
                    var quantity = 8;
                    break;
                case answers.askID[5]:
                    var quantity = 2;
                    break;
                case answers.askID[6]:
                    var quantity = 10;
                    break;
                case answers.askID[7]:
                    var quantity = 19;
                    break;
                case answers.askID[8]:
                    var quantity = 100;
                    break;
                case answers.askID[9]:
                    var quantity = 22;
                    break;
                default:
                console.log("Come back when you're ready!")
            }
        });
}

function customerUnits() {
    inquirer.prompt({
        name: "customerUnits",
        mesage: "How much do you need?",
        type: "input",
    })
        .then(answers => {

        });
}
