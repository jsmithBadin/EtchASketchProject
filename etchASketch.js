//This will be the javaScript file that runs my scripting for the Etch-A-Sketch project
function makeBoard(size = 16){
    const mainBoard = document.querySelector("#mainBoard");
    let i = 0;
    console.log(`i = ${i}`);
    while (i < size){
        let j = 0;
        const row = document.createElement("div");
        row.classList.add("row");
        mainBoard.appendChild(row);
        while (j < size){
            const tile = document.createElement("div");
            tile.classList.add("tile");
            //tile.style.height()
            row.appendChild(tile);
            j += 1;
        }
        i += 1;
        console.log(`Printing row ${i}`);
    }
}

function resetTriggered(size){
    if (size > 100 || !(Number.isInteger(size))) {
        alert("Maximum size is 100, please enter a new size value as a whole number using digits");
    }
    else {
        makeBoard(size);
    }
}

makeBoard();

// add event listeners.  Because we're adding to ALL elements of a class, we need to use querySelectorAll AND
// forEach in combination
document.querySelectorAll(".tile").forEach(elem => elem.addEventListener("mouseenter", function(t) {
    t.target.style.background = "#44cc44";
}))

// Add a 16 x 16 array of divs to the mainBoard ----------- DONE

// Add hover effect (when cursor enters div, change div background color)

// Add a button that prompts the user for a new canvas size 
// (i.e. make a new nxn div board in the same mainBoard size)