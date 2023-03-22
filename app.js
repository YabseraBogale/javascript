function App(){
    let todo=document.getElementById("todo")
    let list=document.querySelector(".item")
    list.innerHTML+="<p>task "+todo.value+"</p>"+"<button>done</button>" 
}