//This will be the javaScript file that runs my scripting for the Etch-A-Sketch project
function makeBoard(size = 16){
    const mainBoard = document.querySelector("#mainBoard");
    let i = 0;
    console.log(`i = ${i}`);
    while (i < size){
        let j = 0;
        const row = document.createElement("div");
        row.classList.add("row");
        row.textContent = i;
        mainBoard.appendChild(row);
        // boardTile.setAttribute.("id", "row");
        while (j < size){
            j += 1;
        }
        i += 1;
        console.log(`Printing row ${i}`);
    }
}

makeBoard();
// Add a 16 x 16 array of divs to the mainBoard

// Add hover effect (when cursor enters div, change div background color)

// Add a button that prompts the user for a new canvas size 
// (i.e. make a new nxn div board in the same mainBoard size)