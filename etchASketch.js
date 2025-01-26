//This will be the javaScript file that runs my scripting for the Etch-A-Sketch project
//set color variable to hold color used for highlighting
let color = "#000000";
//set mode variable to hold whether highlighter is fixed or random
let mode = "normal";
let opacityMode = 0;

// Add a 16 x 16 array of divs to the mainBoard ----------- DONE
function makeBoard(size = 16){
    const mainBoard = document.querySelector("#mainBoard");
    let i = 0;
    
    //Size tiles based on board size
    let edgeLength = Math.floor((640 / size) - 2);
    let edgeValue = edgeLength.toString(10)+"px";
    
    //generate rows to hold tiles 
    while (i < size){
        let j = 0;
        const row = document.createElement("div");
        row.classList.add("row");
        mainBoard.appendChild(row);
        // generate the appropriate number of tiles for each row, and size them properly
        while (j < size){
            const tile = document.createElement("div");
            tile.classList.add("tile");
            tile.style.height = edgeValue;
            tile.style.width = edgeValue;
            row.appendChild(tile);
            j += 1;
        }
        i += 1;
    }
}

function resetTriggered(size){
    // Test to ensure a valid input, if input is valid, clear the old board, generate the new board, and attatch the event listeners
    if (size > 100 || (isNaN(size))) {
        alert("Maximum size is 100, please enter a new size value as a whole number using digits");
    }
    else {
        document.querySelectorAll(".tile").forEach(elem => elem.remove())
        document.querySelectorAll(".row").forEach(elem => elem.remove())
        makeBoard(size);
        document.querySelectorAll(".tile").forEach(elem => elem.addEventListener("mouseenter", function(t) {
            if (opacityMode % 2 == 1){
                t.target.style.opacity = (Number(t.target.style.opacity) + .1);
            } else {
                t.target.style.opacity = .8;
            }
            if (mode === "normal"){
                t.target.style.background = color;
            } else {
                let a = Math.floor(16 * Math.random());
                let b = Math.floor(16 * Math.random());
                let c = Math.floor(16 * Math.random());
                while (a + b + c > 30){
                    a = Math.floor(16 * Math.random());
                    b = Math.floor(16 * Math.random());
                    c = Math.floor(16 * Math.random());
                }
                color = "#" + a.toString(16) + b.toString(16) + c.toString(16);
                t.target.style.background = color;
                }
            }))
    }
}

// Make initial board
makeBoard();

// Add hover effect (when cursor enters div, change div background color) ---------------- DONE
// add event listeners.  Because we're adding to ALL elements of a class, we need to use querySelectorAll AND
// forEach in combination
document.querySelectorAll(".tile").forEach(elem => elem.addEventListener("mouseenter", function(t) {
    if (opacityMode % 2 == 1){
        t.target.style.opacity = (Number(t.target.style.opacity) + .1);
    } else {
        t.target.style.opacity = .8;
    }
    if (mode === "normal"){
        t.target.style.background = color;
    } else {
        let a = Math.floor(16 * Math.random());
        let b = Math.floor(16 * Math.random());
        let c = Math.floor(16 * Math.random());
            while (a + b + c > 30){
                a = Math.floor(16 * Math.random());
                b = Math.floor(16 * Math.random());
                c = Math.floor(16 * Math.random());
            }
        color = "#" + a.toString(16) + b.toString(16) + c.toString(16);
        t.target.style.background = color;
        }
    }))
    


// Add a button that prompts the user for a new canvas size  
// (i.e. make a new nxn div board in the same mainBoard size)
const btn = document.querySelector(".reset");
btn.addEventListener("click", () => resetTriggered(prompt("How many squares should the grid hold?  Please enter the number of rows or columns you would like:")));

// add event listeners to change the color based on button
const red = document.querySelector("#red");
red.addEventListener("click", () => {color = "#cc0000"; mode = "normal";});
const black = document.querySelector("#black");
black.addEventListener("click", () => {color = "#000000"; mode = "normal";});
const green = document.querySelector("#green");
green.addEventListener("click", () => {color = "#00cc00"; mode = "normal";});
const blue = document.querySelector("#blue");
blue.addEventListener("click", () => {color = "#0000cc"; mode = "normal";});

// add event listener to put the highlight into random mode.
const random = document.querySelector("#random");
random.addEventListener("click", () => {mode = "random";});

// add event listener to put the etch-a-sketch into changing opacity mode
const changeOpacity = document.querySelector("#opacityChange");
changeOpacity.addEventListener("click", () => {opacityMode += 1});