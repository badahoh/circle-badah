function clickInstructions(el) {
    console.log(el)
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle")

    if(el == title) { 

        let p = document.createElement("p");
        let firstText = document.createTextNode("The internet is made up of cables.");
        let secondText = document.createTextNode("The internet is made up of light signals.");
        p.appendChild(firstText);
        p.appendChild(secondText)
        document.body.appendChild(p);

        console.log("title")
    } else if (el == subtitle) {
        console.log("subtitle clicked")
    }
}

document.addEventListener("click", function(event) {
    console.log("clicked!")
    clickInstructions(event.target)
});



// let p = document.createElement("p");

// let firstText = document.createTextNode("The internet is made up of simple principles.The internet is abstracted to the point of being indiscernible from ");
// let secondText = document.createTextNode(" to the average person.");

// let span = document.createElement("span");
// span.appendChild(document.createTextNode("magic"));
// span.id="magic";

// p.appendChild(firstText);
// p.appendChild(span);
// p.appendChild(secondText)
// document.body.appendChild(p);

