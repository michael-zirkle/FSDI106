var serverURL = "http://restclass.azurewebsites.net"
var items = [];

function importCatalog(){
    $.ajax({
        url: serverURL + "/API/points",
        type: "GET",
        
        success: function (res) {
            
            for (var i=0; i <res.length; i++){
                var p =res[i];
                if(p.user == "Michael"){
                    items.push(p);
                }
            }
            //items= res;
            displayCatalog();
        },
        error: function (error) {
            console.log(error);
        }
    });
}

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
<h6>$${ item.price}</h6>
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
    $("#txtSearch").keyPress()
    importCatalog();
    
}

window.onload = init;