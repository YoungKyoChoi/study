
function addDiv(){
    let newDiv = document.createElement("Div");
    newDiv.innerHTML
    console.log(newDiv);
    newDiv.innerHTML = "나";
    let card_list = document.querySelector(".card-list");    
    card_list.prepend(newDiv);

}


