const container = document.querySelector(".container")



let x = 16
let y = 16

for (i = 0; i<y; i++) {
    const row = document.createElement("div")
    row.className = "row"
    container.appendChild(row)
    for (k=0; k<x; k++){
        const square = document.createElement("div")
        square.className = "square"
        row.appendChild(square)
    }
}

container.addEventListener("mouseover", (event) => {
    event.target.classList.add("hovered")
})