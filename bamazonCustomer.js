//starts our connection
var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',

    port: 8889,

    user: 'root',

    password: "root",

    database: 'bamazon'
});

connection.connect(function (error) {
    if (error) {
        console.error("You've made a grave mistake", error);
        return;
    }

    console.log("You've done it m8", connection.threadId);

    showItems();
});

//displays the items to choose from an allows the user to input the item id and the amount that they want 
function showItems() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("Item #: " + res[i].item_id + "|" +
                "Product: " + res[i].product_name + "|" +
                "Department: " + res[i].department_name + "|" +
                "Price: " + "$" + res[i].price + "|" +
                "In Stock: " + res[i].stock_quantity);
            console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        }
        itemSelect();
    });

};
//picking item
var itemSelect = function () {
    inquirer.prompt([{
        name: "itemId",
        type: "input",
        message: "Hit me with the ID number dog:"
    }, {
        name: "quantity",
        type: "input",
        message: "How much are you lookin to grab?"
    }]).then(function (answer) {

        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;

            var selectedItem;
            for (var i = 0; i < res.length; i++) {
                if (res[i].item_id === parseInt(answer.itemId)) {
                    selectedItem = res[i];
                }
            }
//if the quantity the customer chose is true? the function will return a message with the cost 
            if (selectedItem.stock_quantity > parseInt(answer.quantity)) {
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: (selectedItem.stock_quantity - parseInt(answer.quantity))
                        },
                        {
                            item_id: selectedItem.item_id
                        }
                    ],
                    function (error) {
                        if (error) throw error;
                        //console.log(selectedItem.stock_quantity)
                        //console.log(selectedItem.customer_price)
                        //console.log(answer.quantity)
                        console.log("Yooo that's rad man thank you for stopping by. Your total is $" + parseInt(answer.quantity) * (selectedItem.customer_price));
                    }
                );
            }
            //or else it will return an error and the user will have to start over
            else {
                console.log("We're sorry. We don't have enough in stock.");
            }
        });
    });
};
