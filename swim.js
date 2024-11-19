console.log("file is working!! :)");

let swimButton =document.getElementById("button");

// console.log(swimButton)

   
swimButton.addEventListener("click", function(event) {
    console.log("clicked!")
    document.body.classList.toggle("active")
})
