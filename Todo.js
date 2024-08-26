let inputBox = document.getElementById("Input");

let List_container = document.getElementById("list-Container");


function addTask(){

    if(inputBox.value == ""){

        alert("Please Write Something to Add")

    }else{
        let newList = document.createElement("li");
        newList.innerHTML = inputBox.value;
        List_container.appendChild(newList);
        let close = document.createElement("span");
        close.innerHTML = "\u00d7";
        newList.appendChild(close)
    }
    inputBox.value = "";
    saveData();
}


List_container.addEventListener("click", (check) =>{

    if(check.target.tagName === "LI"){
        check.target.classList.toggle("Checked");
        saveData();
    }else if(check.target.tagName ==="SPAN"){
        check.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", List_container.innerHTML);
}

function showTask(){
    List_container.innerHTML = localStorage.getItem("data");
}
showTask();