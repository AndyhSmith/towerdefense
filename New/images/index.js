//--------------------------------------------------
//   T I L E   C L A S S
//--------------------------------------------------
// Preload images
const IMG_TILE = new Image();
IMG_TILE.src = "./images/grass.png"

const IMG_WALL = new Image();
IMG_WALL.src = "./images/wall2.png"

class Tile {
    constructor() {
        this.background = IMG_TILE;
        this.img = IMG_TILE
        this.description = "";
        this.pathable = true;
    }

    draw(x, y) {
        cCTX.imageSmoothingEnabled = false;
        cCTX.drawImage(this.background, x*map.tileSize, y*map.tileSize, map.tileSize, map.tileSize);
        cCTX.drawImage(this.img, x*map.tileSize, y*map.tileSize, map.tileSize, map.tileSize);
    }
}

class Grass extends Tile {
    constructor() {
        super();
        this.img = IMG_TILE;
        this.description = "Empty space for you to build on and enemies to travel on.";
        this.description = "Empty";
        this.pathable = true;
    }

    selected() {
        document.getElementById("controls4").innerHTML = "<div onclick='buildWall()' onmouseover='Wall.hover'> Build Wall </div>"
    }

    hover() {

        return "Grass is now selected"
    }
}

class Wall extends Tile {
    constructor() {
        super();
        this.img = IMG_WALL;
        this.description = "Empty space for you to build on and enemies to travel on.";
        this.description = "Empty";
        this.pathable = true;
    }

    selected() {
        return "This is a test."
    }

    hover() {
        console.log("Wall Being Hovered")
    }
}


//--------------------------------------------------
//   H E L P E R   F U N C T I O N S
//--------------------------------------------------
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var dim = {
    "controlsHeight": 300,
}

var map = {
    "tileSize": 60,
    "xOffset": 0,
    "yOffset": 0,
    "xTiles": getRandomInt(10) + 15,
    "yTiles": getRandomInt(10) + 5,
    "selectedTile": [0,0],
    "array": []
}

var canvas = document.getElementById("game-canvas");
var cCTX = canvas.getContext("2d");


var animationCanvas = document.getElementById("animation-canvas");
var aCTX = animationCanvas.getContext("2d");


function updateDOM() {
    document.getElementById("game").style.width = window.innerWidth + "px";
    document.getElementById("game").style.height = window.innerHeight - dim.controlsHeight + "px";

    document.getElementById("controls").style.width = window.innerWidth + "px";
    document.getElementById("controls").style.height = dim.controlsHeight + "px"

    // Canvas
    let gameHeight = window.innerHeight- dim.controlsHeight;
    let tileSizeOption1 = gameHeight / map.yTiles;
    let tileSizeOption2 = window.innerWidth / map.xTiles
    map.tileSize = tileSizeOption1
    if (tileSizeOption1 > tileSizeOption2) {
        map.tileSize = tileSizeOption2
        console.log("Extra Room On Top")
        map.yOffset = window.innerHeight  - (map.yTiles * map.tileSize) - dim.controlsHeight
    }
    map.xOffset = (window.innerWidth / 2) - ((map.tileSize * map.xTiles) / 2);
    canvas.style.left = map.xOffset + "px"
    animationCanvas.style.left = map.xOffset + "px"

    canvas.style.top = map.yOffset + "px"
    animationCanvas.style.top = map.yOffset + "px"
    canvas.width = map.tileSize * map.xTiles;
    canvas.height = map.tileSize * map.yTiles;
    animationCanvas.width = map.tileSize * map.xTiles;
    animationCanvas.height = map.tileSize * map.yTiles;
}

function createMap() {
    map.array = new Array(map.yTiles);
    for (let i = 0; i < map.yTiles; i++) {
        let tempArray = new Array(map.xTiles);
        for (let j = 0; j < map.xTiles; j++) {
            tempArray[j] = new Grass();
        }
        map.array[i] = tempArray;
    }
}

function getClickPosition(e) {
    let x = e.clientX - map.xOffset;
    let y = e.clientY - map.yOffset;
    if (x != null) {
        map.selectedTile = [Math.floor(x / map.tileSize), Math.floor(y / map.tileSize)];
    }
   
    map.array[map.selectedTile[1]][map.selectedTile[0]].selected()
    draw()
}

function draw() {
    cCTX.clearRect(0, 0, canvas.width, canvas.height);
    aCTX.clearRect(0, 0, animationCanvas.width, animationCanvas.height);

    // Draw Tiles
    for (let i = 0; i < map.xTiles; i++) {  
        for (let j = 0; j < map.yTiles; j++) {
            map.array[j][i].draw(i, j)
        }
    }

    // Draw Selection
    if (map.selectedTile != null) {
        aCTX.beginPath();
        aCTX.strokeStyle = "darkred";
        aCTX.lineWidth = 5;
        aCTX.rect(map.selectedTile[0]*map.tileSize, map.selectedTile[1]*map.tileSize, map.tileSize, map.tileSize);
        aCTX.stroke();
    }
}
//--------------------------------------------------
//   H O O K   F U N C T I O N S
//--------------------------------------------------

function buildWall() {
    map.array[map.selectedTile[1]][map.selectedTile[0]] = new Wall();
    draw();

}

//--------------------------------------------------
//   S T A R T   G A M E
//--------------------------------------------------

function start() {
    updateDOM();
    createMap();
    draw();
    document.getElementById("loading").style.display = "none";
}



animationCanvas.addEventListener("click", getClickPosition, false);
setInterval(gameTick, 30);

