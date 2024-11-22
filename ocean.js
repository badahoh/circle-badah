console.log("file is working!! :)");

let swimButton =document.getElementById("button");

// console.log(swimButton)

function clickInstructions(el) {
    console.log(el)
    let BITE = document.getElementById("button");

    if(el == BITE) { 

        let p = document.createElement("p");
        let BITE = document.createTextNode("The internet is made up of cables.");
        p.appendChild(BITE);
        document.body.appendChild(p);

        console.log("button")
}
}
document.addEventListener("click", function(event) {
    console.log("clicked!")
    clickInstructions(event.target)
});
// this doesnt do anything... why?

swimButton.addEventListener("click", function(event) {


    console.log("clicked!")
    document.body.classList.toggle("active")
})
