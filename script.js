const containerDiv = document.querySelector("#container");
for (var i = 0; i < 16; i++) {
    for (var j = 0; j < 16; j++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("square");
        containerDiv.appendChild(newDiv);
    }
}