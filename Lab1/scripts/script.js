var name="Michael";
var todoList= [];


function hello(text){
    console.log(text);
}


function init2(){
    //var lbl = document.getElementById("lblTodo")
    var lbl = $("#lbltodo");
    lbl.innerText ="jquery rules??";

    $("#btnSave").click(saveTodo);
}
function saveTodo(){
    var txt =$(`#txtTodo`);
    console.log(txt);

    var todoText= txt.val();
    if(todoText.length <1){
        txt.addClass(`error`);

    }
    else{
        txt.removeClass(`error`);
        todoList.push(todoText);
        txt.val(``);
        displayTodo(todoText)

    }

    function displayTodo(simpleText){
        var ul=$("#todoList");
        var li="<li class= list-group-item>" + simpleText + "</li>";
        ul.append(li);
    }
}
// when the browser finishes loading executes the function
window.onload=init2; 