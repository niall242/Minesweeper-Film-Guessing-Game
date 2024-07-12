var board = []; 
var rows = 8;
var columns = 8;

var minesCount = 5;
var minesLocation = []; // "2-2", "3,4", "5-5" etc

var tilesClicked = 0;
var flagEnabled = false;

var msGameOver = false;

var filmEmojisList = [
    ["🦁", "👑", "🌅", "🐗", "🦓"], // The Lion King
    ["🐍", "🧙‍♂️", "⚡", "🏰", "📜"], // Harry Potter
    ["🏴‍☠️", "🌊", "⚓", "🗺️", "🏝️"], // Pirates of the Caribbean
    ["🚀", "👽", "🪐", "🌌", "🌍"], // Star Wars
    ["🕷️", "🕸️", "🦸‍♂️", "🗽", "🏙️"], // Spider-Man
    ["🦸‍♂️", "🦸‍♀️", "🛡️", "⚔️", "🌍"], // Avengers
    ["🐉", "👸", "🤴", "🗡️", "🏰"], // Shrek
    ["🐠", "🐟", "🐡", "🐢", "🌊"], // Finding Nemo
    ["🎸", "💀", "🎶", "🎤", "🇲🇽"], // Coco
    ["🧚‍♀️", "🏰", "👸", "🐭", "🕛"], // Cinderella
    ["🐒", "🏞️", "🍌", "🦍", "🌴"], // Tarzan
    ["🦸‍♂️", "🕶️", "🍔", "🍟", "🚗"], // The Incredibles
    ["🕶️", "🔫", "👽", "🌌", "🚀"], // Men in Black
    ["🌪️", "🧙‍♀️", "👠", "🦁", "🤖"], // The Wizard of Oz
    ["🏴‍☠️", "🦜", "🏝️", "🗺️", "🌊"], // Peter Pan
    ["🎩", "🐰", "🎪", "🎟️", "🎠"], // Alice in Wonderland
    ["🚀", "🌌", "👨‍🚀", "👾", "🛸"], // Toy Story
    ["🦖", "🦕", "🌴", "🏞️", "🚁"], // Jurassic Park
    ["🚢", "❄️", "🌊", "🧊", "🏔️"], // Titanic
    ["🧟‍♂️", "🧟‍♀️", "🧠", "🔫", "🌃"], // World War Z
    ["👻", "🕵️‍♂️", "🏢", "🔫", "🚫"], // Ghostbusters
    ["🐭", "🧀", "🏰", "🪄", "🎠"], // Ratatouille
    ["🐘", "🎪", "🎩", "🌟", "🎠"], // Dumbo
    ["🦁", "🐘", "🏞️", "🌍", "🦓"], // Madagascar
    ["🧙‍♂️", "🧙‍♀️", "🗡️", "🧝‍♂️", "🧟‍♂️"], // Lord of the Rings
    ["🚂", "🧙‍♂️", "🦌", "🏔️", "🎄"], // The Polar Express
    ["👽", "🚲", "🌕", "🌌", "📞"], // E.T.
    ["🏄‍♂️", "🌊", "🐠", "🏝️", "🐢"], // Moana
    ["🍫", "🏭", "👦", "🍬", "🍭"], // Charlie and the Chocolate Factory
    ["🎭", "👻", "🏰", "🖌️", "👹"], // The Phantom of the Opera
    ["🦇", "🦸‍♂️", "🏙️", "🃏", "🚓"], // Batman
    ["🐻", "🍯", "🌳", "🌞", "🎈"], // Winnie the Pooh
    ["🚀", "👨‍🚀", "🪐", "🌌", "🛸"], // Interstellar
    ["🦸‍♂️", "🕶️", "🔫", "🚗", "🖥️"], // Iron Man
    ["🧜‍♀️", "🌊", "🦀", "🐠", "🦈"], // The Little Mermaid
    ["🍄", "🐢", "🌈", "🕹️", "🎮"], // Super Mario
    ["🚂", "🌫️", "🕵️‍♂️", "👑", "🔍"], // Sherlock Holmes
    ["🦕", "🦖", "🌴", "🏞️", "🦍"], // King Kong
    ["👩‍🚀", "🌌", "🪐", "🚀", "🛸"], // Guardians of the Galaxy
    ["👑", "🧙‍♂️", "🗡️", "🏰", "🐉"], // Game of Thrones
    ["🦄", "🌈", "🌟", "🧙‍♂️", "🏰"], // The NeverEnding Story
    ["👽", "🚀", "🌕", "🛸", "🔭"], // 2001: A Space Odyssey
    ["🧙‍♂️", "🗡️", "🏰", "🐉", "🌌"], // The Dark Crystal
    ["🕵️‍♂️", "🔍", "🏰", "👻", "🚪"], // Scooby-Doo
    ["🐘", "🐅", "🎪", "🎩", "🌟"], // The Greatest Showman
    ["🦸‍♂️", "🛡️", "🔨", "⚡", "👑"], // Thor
    ["🦸‍♂️", "🦇", "🏙️", "🃏", "🚓"], // The Dark Knight
    ["🚀", "🌌", "🪐", "🛸", "👽"]  // Star Trek
];

var selectedFilmEmojis = [];

var filmNames = [
    "The Lion King",
    "Harry Potter",
    "Pirates of the Caribbean",
    "Star Wars",
    "Spider-Man",
    "Avengers",
    "Shrek",
    "Finding Nemo",
    "Coco",
    "Cinderella",
    "Tarzan",
    "The Incredibles",
    "Men in Black",
    "The Wizard of Oz",
    "Peter Pan",
    "Alice in Wonderland",
    "Toy Story",
    "Jurassic Park",
    "Titanic",
    "World War Z",
    "Ghostbusters",
    "Ratatouille",
    "Dumbo",
    "Madagascar",
    "Lord of the Rings",
    "The Polar Express",
    "E.T.",
    "Moana",
    "Charlie and the Chocolate Factory",
    "The Phantom of the Opera",
    "Batman",
    "Winnie the Pooh",
    "Interstellar",
    "Iron Man",
    "The Little Mermaid",
    "Super Mario",
    "Sherlock Holmes",
    "King Kong",
    "Guardians of the Galaxy",
    "Game of Thrones",
    "The NeverEnding Story",
    "2001: A Space Odyssey",
    "The Dark Crystal",
    "Scooby-Doo",
    "The Greatest Showman",
    "Thor",
    "The Dark Knight",
    "Star Trek"
];

window.onload = function() {
    startGame();
}

function setMines() {
    // minesLocation.push("2-2");
    // minesLocation.push("2-3");
    // minesLocation.push("5-6");
    // minesLocation.push("3-4");
    // minesLocation.push("1-1");

    let minesLeft = minesCount;
    while (minesLeft > 0) {  // adds random locations for the mines
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        let id = r.toString() + "-" + c.toString();

        if (!minesLocation.includes(id)) {
            minesLocation.push(id);
            minesLeft -= 1;
        }

    }
}

function startGame() {
    document.getElementById("mines-count").innerText = minesCount;
    document.getElementById("flag-button").addEventListener("click", setFlag); // "listen" for a click on tile and then run function setFlag()
    setMines();

    // Select a random film
    let randomIndex = Math.floor(Math.random() * filmEmojisList.length);
    selectedFilmEmojis = filmEmojisList[randomIndex];
    filmName = getFilmName(randomIndex);

    // populate the board

    for (let r = 0; r < rows; r++) {
        let row = []; // row (array) is created
        for(let c = 0; c < columns; c++) {
            let tile = document.createElement("div"); // create a div called "tile"
            tile.id = r.toString() + "-" + c.toString(); // the id of the tile is turned into eg. "3-1", "2-4" etc.
            
            tile.addEventListener("click", clickTile);  // "listen" for a click on tile and then run function clickTile()
            
            document.getElementById("board").append(tile); // appended to board
            row.push(tile);                             // tile is added to the row array
        }
        board.push(row);                                // once a row array is created it is added to the board array 
    }

    console.log(board);
}

function getFilmName(index) {
    return filmNames[index];
}

function setFlag() {
    if (flagEnabled) {
        flagEnabled = false; 
        document.getElementById("flag-button").style.backgroundColor = "lightgray";
        document.getElementById("flag-button").innerText = "🚩 Flag Off";
    } else {
        flagEnabled = true;
        document.getElementById("flag-button").style.backgroundColor = "darkgray";
        document.getElementById("flag-button").innerText = "🚩 Flag On";
    }
}

function clickTile() {
    if (msGameOver || this.classList.contains("tile-clicked")) {
        return;  // stops tile from being clicked again and stops all tiles from being clicked if game over
    }

    let tile = this;
    if (flagEnabled) {
        if (tile.innerText == "") {
            (tile.innerText) = "🚩"; // adds the flag to a clicked tile
        } 
        else if (tile.innerText == "🚩") {
            tile.innerText = ""; // removes the flag from a clicked tile if it's already there
        }
        return;
    }

    if (minesLocation.includes(tile.id)) {
        // alert("GAME OVER")
        msGameOver = true;
        document.getElementById("flag-button").disabled = true; // Disable the flag button when game over
        reveal2Mines();
        return;
    }

    let coords = tile.id.split("-"); // "3-2" => ["3", "2"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    checkMine(r, c);
}

function revealMines() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = board[r][c];
            if (minesLocation.includes(tile.id)) {
                let emojiIndex = minesLocation.indexOf(tile.id) % selectedFilmEmojis.length;
                tile.innerText = selectedFilmEmojis[emojiIndex];
                tile.style.backgroundColor = "yellow";
            }
        }
    }
    document.getElementById("flag-button").disabled = true; // Disable the flag button when game over
    setTimeout(promptFilmGuess, 100);
}


function reveal2Mines() {
    let emojiCount = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = board[r][c];
            if (minesLocation.includes(tile.id)) {
                let emojiIndex = minesLocation.indexOf(tile.id) % selectedFilmEmojis.length;
                tile.innerText = selectedFilmEmojis[emojiIndex];
                tile.style.backgroundColor = "red";
                emojiCount += 1;
                if (emojiCount === 2) {
                    document.getElementById("flag-button").disabled = true; // Disable the flag button when game over
                    setTimeout(promptFilmGuess, 100);
                    return;
                }
            }
        }
    }
}

function promptFilmGuess() {
    let guess = prompt("🎬 Guess the film based on the emojis:");
    if (guess.toLowerCase() === filmName.toLowerCase()) {
        alert("Correct! 😎 Well done!");
    } else {
        alert(`Incorrect. The correct answer was "${filmName}". Try again next time!`);
    }
}

function checkMine(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= columns) {  // if click is out of bounds exit function
        return;
    }
    if (board[r][c].classList.contains("tile-clicked")) { // checking if the location has a "tile clicked"
        return;                                           // class added - prevents infinite recursion
    }

    board[r][c].classList.add("tile-clicked"); // this is adding "tile clicked" class 
    tilesClicked += 1;

    let minesFound = 0; // this function will be adding +1 for every mine found in adjacent tile

    // top 3
    minesFound += checkTile(r-1, c-1); // top left
    minesFound += checkTile(r-1, c);   // top 
    minesFound += checkTile(r-1, c+1); // top right

    // left and right
    minesFound += checkTile(r, c-1); // left
    minesFound += checkTile(r, c+1); // right

    // bottom 3
    minesFound += checkTile(r+1, c-1); // bottom left
    minesFound += checkTile(r+1, c);   // bottom
    minesFound += checkTile(r+1, c+1); // bottom right

    if (minesFound > 0) {
        board[r][c].innerText = minesFound;
        board[r][c].classList.add("x" + minesFound.toString()); 
    }
    else {  // recursion - a function calling itself. In this case the function is revealing 
            // all adjacent blank tiles if a blank tile is clicked
        // top 3
        checkMine(r-1, c-1); // top left
        checkMine(r-1, c);   // top 
        checkMine(r-1, c+1); // top right

        // left and right
        checkMine(r, c-1);     // left
        checkMine(r, c+1); // right

        // bottom 3
        checkMine(r+1, c-1); // bottom left
        checkMine(r+1, c);   // bottom
        checkMine(r+1, c+1); // bottom right
    }

    if (tilesClicked == rows * columns - minesCount) { // once all tiles are click => game over
        document.getElementById("mines-count").innerText = "Cleared";
        msGameOver = true;
        revealMines();
    }
}

function checkTile(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= columns) {  // if adjacent tile is out of bounds...
        return 0;
    }
    if(minesLocation.includes(r.toString() + "-" + c.toString())) {
        return 1;
    }
    return 0;
}
