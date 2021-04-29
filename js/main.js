//--------------------------------------------------
//   M A P   T I L E S
//--------------------------------------------------
class Tile {
    constructor(number) {
        this.img = new Image();
        this.name = "";
        this.description = "";
        this.src = "";
        this.num = number;
    }
    setSrc(src) {
        this.img.src = src;
        this.src = src;
    }
    setDescription(description) {
        this.description = description;
    }
    setName(name) {
        this.name = name;
    }
}

// Resources
var T_ROCK = new Tile(1)
T_ROCK.setSrc("res/8/rock.png")
T_ROCK.setDescription("This is a barrier that will block enemies and it can be removed for a price.")
T_ROCK.setName("Rock")

var T_EMPTY = new Tile(0)
T_EMPTY.setSrc("res/8/grass.png")
T_EMPTY.setDescription("Empty space for you to build on and enemies to travel on.")
T_EMPTY.setName("Empty")

var T_CHECKPOINT = new Tile(11)
T_CHECKPOINT.setSrc("res/8/checkpoint.png")
T_CHECKPOINT.setDescription("Your enemies are trying to steal research from this location. Stop them them from reaching the exit portal at all costs.")
T_CHECKPOINT.setName("Research Center")

var T_ENTRANCE = new Tile(2)
T_ENTRANCE.setSrc("res/8/start.png")
T_ENTRANCE.setDescription("Enemies enter your world here. They will travel to your research centers to steal your technology and then exit through the exit portal.")
T_ENTRANCE.setName("Enemy Entrance")

var T_EXIT = new Tile(3)
T_EXIT.setSrc("res/8/finish.png")
T_EXIT.setDescription("Enemies leave your world through a portal here. Stop them before they steal your research")
T_EXIT.setName("Enemy Exit")

var T_NO_BUILD = new Tile(4)
T_NO_BUILD.setSrc("res/8/caution.png")
T_NO_BUILD.setDescription("You can not build here. The ground seems to be unstable. Sadly enemies can still pass through here.")
T_NO_BUILD.setName("No Build Zone")

var T_WALL = new Tile(6)
T_WALL.setSrc("res/8/wall2.png")
T_WALL.setDescription("A barrier that stops enemies from passing.")
T_WALL.setName("Wall")

var T_PATH = new Tile(8)
T_PATH.setSrc("res/8/path_brown.png")

// Towers
var T_TOWER = new Tile(20)
T_TOWER.setSrc("res/8/tower.png")
T_TOWER.setDescription("A tower that can be upgraded to deal damage to enemies. It currently does nothing except block the enemy path.")
T_TOWER.setName("Tower")

// Red
var T_TOWER_RED = new Tile(30)
T_TOWER_RED.setSrc("res/8/tower_red_normal.png")
T_TOWER_RED.setDescription("Damages red enemies.")
T_TOWER_RED.setName("Red Tower")

var T_TOWER_RED_AREA = new Tile(31)
T_TOWER_RED_AREA.setSrc("res/8/tower_red_area.png")
T_TOWER_RED_AREA.setDescription("Attacks all red enemies within range.")
T_TOWER_RED_AREA.setName("Red Area Tower")

var T_TOWER_RED_SNIPER = new Tile(32)
T_TOWER_RED_SNIPER.setSrc("res/8/tower_red_sniper.png")
T_TOWER_RED_SNIPER.setDescription("Attacks all red enemies with extra range.")
T_TOWER_RED_SNIPER.setName("Red Sniper Tower")

// Green
var T_TOWER_GREEN = new Tile(40)
T_TOWER_GREEN.setSrc("res/8/tower_green_normal.png")
T_TOWER_GREEN.setDescription("Damages green enemies.")
T_TOWER_GREEN.setName("Green Tower")

var T_TOWER_GREEN_AREA = new Tile(41)
T_TOWER_GREEN_AREA.setSrc("res/8/tower_green_area.png")
T_TOWER_GREEN_AREA.setDescription("Attacks all green enemies within range.")
T_TOWER_GREEN_AREA.setName("Green Area Tower")

var T_TOWER_GREEN_SNIPER = new Tile(42)
T_TOWER_GREEN_SNIPER.setSrc("res/8/tower_green_sniper.png")
T_TOWER_GREEN_SNIPER.setDescription("Attacks all green enemies with extra range.")
T_TOWER_GREEN_SNIPER.setName("Green Sniper Tower")

// Blue
var T_TOWER_BLUE = new Tile(50)
T_TOWER_BLUE.setSrc("res/8/tower_blue_normal.png")
T_TOWER_BLUE.setDescription("Damages blue enemies.")
T_TOWER_BLUE.setName("Blue Tower")

var T_TOWER_BLUE_AREA = new Tile(51)
T_TOWER_BLUE_AREA.setSrc("res/8/tower_blue_area.png")
T_TOWER_BLUE_AREA.setDescription("Attacks all blue enemies within range.")
T_TOWER_BLUE_AREA.setName("Blue Area Tower")

var T_TOWER_BLUE_SNIPER = new Tile(52)
T_TOWER_BLUE_SNIPER.setSrc("res/8/tower_blue_sniper.png")
T_TOWER_BLUE_SNIPER.setDescription("Attacks all blue enemies with extra range.")
T_TOWER_BLUE_SNIPER.setName("Blue Sniper Tower")

// Black
var T_TOWER_BLACK = new Tile(60)
T_TOWER_BLACK.setSrc("res/8/tower_black_normal.png")
T_TOWER_BLACK.setDescription("Damages black enemies.")
T_TOWER_BLACK.setName("Black Tower")

var T_TOWER_BLACK_AREA = new Tile(61)
T_TOWER_BLACK_AREA.setSrc("res/8/tower_black_area.png")
T_TOWER_BLACK_AREA.setDescription("Attacks all black enemies within range.")
T_TOWER_BLACK_AREA.setName("Black Area Tower")

var T_TOWER_BLACK_SNIPER = new Tile(62)
T_TOWER_BLACK_SNIPER.setSrc("res/8/tower_black_sniper.png")
T_TOWER_BLACK_SNIPER.setDescription("Attacks all black enemies with extra range.")
T_TOWER_BLACK_SNIPER.setName("Black Sniper Tower")

// OTHER CONSTENTS
const MAP_X_OFFSET = 0
const MAP_Y_OFFSET = 0

const MAP_X_TILES = 7
const MAP_Y_TILES = 14
const TILE_SIZE = 60

// COMPUTED 
const MAP_WIDTH = MAP_X_TILES * TILE_SIZE;
const MAP_HEIGHT = MAP_Y_TILES * TILE_SIZE;

// COMPUTED 
const MAP_WIDTH = MAP_X_TILES * TILE_SIZE;
const MAP_HEIGHT = MAP_Y_TILES * TILE_SIZE;

//--------------------------------------------------
//   A J U S T   D O M 
//--------------------------------------------------

document.getElementById("text-content").style.height = MAP_HEIGHT;

//--------------------------------------------------
//   F U N C T I O N S
//--------------------------------------------------
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//--------------------------------------------------
//   C R E A T E   C L A S S E S
//--------------------------------------------------

// Map Width, Map Height, Map Tile Size(px)
var gameMap = null
var selectedTile = null

// Game Parameters
var coins = 100
var lives = 100
var viablepathingNodes = [T_EMPTY.num, T_ENTRANCE.num, T_EXIT.num, T_NO_BUILD.num, T_CHECKPOINT.num];

// Canvas set up
var canvas = document.getElementById("game-canvas");
canvas.width = gameMap.height * gameMap.tileSize;
canvas.height = gameMap.width * gameMap.tileSize;

// Andimation canvas update
var animationCanvas = document.getElementById("animation-canvas");
animationCanvas.width = gameMap.height * gameMap.tileSize;
animationCanvas.height = gameMap.width * gameMap.tileSize;


// Drawing
var gameCanvas = new Canvas(canvas, animationCanvas);
gameCanvas.drawMap(gameMap);


// Intervals
var waveInterval;