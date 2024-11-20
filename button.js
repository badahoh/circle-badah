console.log("file is working!! :)");

let backgroundButton =document.getElementById("button");

// console.log(backgroundButton)

   
    backgroundButton.addEventListener("click", function(event) {

        // would add stuff to change with button here
        console.log("clicked!")
        document.body.classList.toggle("active")
    })
