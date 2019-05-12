var items = [

    {
        title: "Keyboard",
        description: "cool keyboard",
        price: "$25.99",
        category: "Keyboard",
        image: "img/keyboard.png"
    },

    {
        title: "Mouse",
        description: "",
        price: "",
        category: "",
        image: ""
    },

    {
        title: "travel keyboard",
        description: "",
        price: "",
        category: "",
        image: ""
    },

    {
        title: "Keyboard",
        description: "",
        price: "",
        category: "",
        image: ""
    }


];

function displayCatalog() {
    
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        displayProduct(item);
        
    }
    


}
function  displayProduct(item){
    var divContainer = $("#catalog");
    var syntax = `<div class= "item">
<img src= "${ item.image}">
<h5>${ item.title}</h5>
<label>${ item.description}</label>
<br>
<h6>${ item.price}</h6>
<button class="btn btn-sm btn-info"> Add to cart</button>
</div>`;
divContainer.append(syntax);
}



function search(){
    var text=$("#txtSearch").val();
    console.log( "searching: " +text);

    $("#catalog").html("");

    for( var i=0; i < items.length; i++){
            var item= items[i];

            if(item.title.indexOf(text) >= 0){
                displayProduct(item);
               
            }
    }
}

function init() {

    $("#btnSearch").click(search);
    

    displayCatalog();
}

window.onload = init;