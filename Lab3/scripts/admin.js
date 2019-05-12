var serverURL = "http://restclass.azurewebsites.net"


function Item(title, description, price, category, image) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.image = image;
    this.user = "Michael";

}

function register() {
    console.log("creating new product");

    var title = $("#txtTitle").val();
    var desc = $("#txtDescription").val();
    var price = $("#txtPrice").val();
    var category = $("#txtCategory").val();
    var image = $("#txtImage").val();

    var anItem = new Item(title, desc, price, category, image);
    console.log(anItem);

    $.ajax({
        url: serverURL + "/API/points",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(anItem),

        success: function(res){
            console.log("server says: ", res);
        },
        error: function(error){
            console.log("**ERROR: ", error);
        }

    });
}

//JSON.stringify(anItem) converting object to string for server

function readTest() {
    $.ajax({
        url: serverURL + "/API/test",
        type: "GET",
        success: function (res) {
            console.log(res);
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function init() {
    console.log("admin page loaded");

    $("#btnSave").click(register);
}

window.onload = init;