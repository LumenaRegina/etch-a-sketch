const container = document.querySelector(".container")
const btn = document.querySelector("button")
const body = document.querySelector("body")
const grid = document.querySelector(".grid")
const para = document.querySelector("p")



function drawGrid(x=16,y=x, target=document.querySelector(".grid")){
    if (x>100) {
        x = 100
        y = 100
    }
    para.textContent = "Grid size: "+x+" x "+y
    for (i = 0; i<y; i++) {
    const row = document.createElement("div")
    row.className = "row"
    target.appendChild(row)
    for (k=0; k<x; k++){
        const square = document.createElement("div")
        square.className = "square"
        row.appendChild(square)
    }

}
}

container.addEventListener("mouseover", (event) => {
    event.target.classList.add("hovered")
})

drawGrid()

btn.addEventListener("click", () => {
    const grid = document.querySelector(".grid")
    grid.remove()
    const newGrid = document.createElement("div")
    newGrid.className = "grid"
    container.appendChild(newGrid)
    drawGrid(prompt("Enter grid length/height", "16"))

})