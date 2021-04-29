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


// Planned Additions
// Enemy Speed Boost
// Range Boost
// Damage Boost

// OTHER CONSTENTS
const MAP_X_OFFSET = 0
const MAP_Y_OFFSET = 0

const MAP_X_TILES = getRandomInt(30) + 10
const MAP_Y_TILES = getRandomInt(30) + 10
const TILE_SIZE = 60 / 2

// COMPUTED 
const MAP_WIDTH = MAP_X_TILES * TILE_SIZE;
const MAP_HEIGHT = MAP_Y_TILES * TILE_SIZE;

//--------------------------------------------------
//   A J U S T   D O M 
//--------------------------------------------------

document.getElementById("text-content").style.height = MAP_HEIGHT;

//--------------------------------------------------
//   H E L P E R   F U N C T I O N S
//--------------------------------------------------
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//--------------------------------------------------
//   C A N V A S
//--------------------------------------------------

class Canvas {
    constructor(theCanvas, theAnimationCavas) {
        this.ctx = theCanvas.getContext("2d");
        this.ctx.imageSmoothingEnabled = false;

        this.ctx_a = theAnimationCavas.getContext("2d");
        this.ctx_a.imageSmoothingEnabled = false;

        // Preset colors
        this.grassColor = "#BEEC26"; //"#7cb68e";
        this.stoneColor ="#585858";
        this.startColor = "#65D248";
        this.selectionColor = "red";
    }

    // Draw the map, pass in the canvas context.
    drawMap(gameMap) {
        // Draw the Map
        for (var i = 0; i < gameMap.array.length; i++) {
            for (var j = 0; j < gameMap.array[i].length; j++) {
                let xPosition = i*gameMap.tileSize;
                let yPosition = j*gameMap.tileSize;

                let x = i * gameMap.tileSize;
                let y = j * gameMap.tileSize;
                let tile = gameMap.array[i][j];
                // If Empty Square.
                if (gameMap.array[i][j] ==T_EMPTY.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                } 
                
                else if(gameMap.array[i][j] == T_ROCK.num) {
                    this.drawImage(x, y, TILE_SIZE, T_ROCK.img);
                } 
                
                else if(gameMap.array[i][j] === T_ENTRANCE.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_ENTRANCE.img);
                } 
                
                else if(gameMap.array[i][j] === T_EXIT.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_EXIT.img);
                } 
                
                else if(gameMap.array[i][j] === T_NO_BUILD.num) {
                    this.drawImage(x, y, TILE_SIZE, T_NO_BUILD.img);
                }

                else if(gameMap.array[i][j] === T_CHECKPOINT.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_CHECKPOINT.img);
                }

                else if(gameMap.array[i][j] === T_TOWER.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_TOWER.img);
                }

                else if(gameMap.array[i][j] === T_WALL.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_WALL.img);
                }
    
                // Red Tower
                else if(tile == T_TOWER_RED.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_TOWER_RED.img);
                }
                else if(tile == T_TOWER_RED_AREA.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_TOWER_RED_AREA.img);
                }
                else if(tile == T_TOWER_RED_SNIPER.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_TOWER_RED_SNIPER.img);
                }

                // Green Tower
                else if(tile == T_TOWER_GREEN.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_TOWER_GREEN.img);
                }
                else if(tile == T_TOWER_GREEN_AREA.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_TOWER_GREEN_AREA.img);
                }
                else if(tile == T_TOWER_GREEN_SNIPER.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_TOWER_GREEN_SNIPER.img);
                }

                // Blue Tower
                else if(tile == T_TOWER_BLUE.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_TOWER_BLUE.img);
                }
                else if(tile == T_TOWER_BLUE_AREA.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_TOWER_BLUE_AREA.img);
                }
                else if(tile == T_TOWER_BLUE_SNIPER.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_TOWER_BLUE_SNIPER.img);
                }

                // Black Tower
                else if(tile == T_TOWER_BLACK.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_TOWER_BLACK.img);
                }
                else if(tile == T_TOWER_BLACK_AREA.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_TOWER_BLACK_AREA.img);
                }
                else if(tile == T_TOWER_BLACK_SNIPER.num) {
                    this.drawImage(x, y, TILE_SIZE, T_EMPTY.img);
                    this.drawImage(x, y, TILE_SIZE, T_TOWER_BLACK_SNIPER.img);
                }
            }
        }  
        
        // Draw Selection
        if (gameMap.selectedTile != null) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.selectionColor;
            this.ctx.lineWidth = 5;
            this.ctx.rect(gameMap.selectedTile[0]*gameMap.tileSize, gameMap.selectedTile[1]*gameMap.tileSize, gameMap.tileSize, gameMap.tileSize);
            this.ctx.stroke();
        }
        this.showCheckedNodes(gameMap);
        this.drawPath(gameMap);
    }

    drawPath(gameMap) {
        if (gameMap.showPath) {
            for (let i = 1; i < gameMap.pathFinder.traceback.length - 1; i++) {
                this.drawImage(gameMap.pathFinder.traceback[i].x * gameMap.tileSize, gameMap.pathFinder.traceback[i].y * gameMap.tileSize, gameMap.tileSize, T_PATH.img);
            }
        }
    }

    showCheckedNodes(gameMap) {
        if (gameMap.showCheckedNodes) {
            for (let i = 1; i < gameMap.pathFinder.checkedNodes.length - 1; i++) {
                this.drawImage(gameMap.pathFinder.checkedNodes[i].x * gameMap.tileSize, gameMap.pathFinder.checkedNodes[i].y * gameMap.tileSize, gameMap.tileSize, T_TOWER.img);
            }
        }
    }

    drawColoredSquare(xPos, yPos, tileSize, color, text) {
        this.ctx.beginPath();
        // Fill
        this.ctx.lineWidth = 1;
        this.ctx.rect(xPos, yPos, tileSize, tileSize);
        this.ctx.fillStyle = color;
        this.ctx.fill();
        // Border
        this.ctx.strokeStyle = "#000000";
        this.ctx.stroke();
        // Text
        this.ctx.fillStyle= "#000000";
        this.ctx.font = "14px Arial";
        this.ctx.fillText(text,xPos,yPos + gameMap.getTileSize() - 4);
    }

    drawImage(xPos, yPos, tileSize, texture) {
        this.ctx.drawImage(texture, xPos, yPos, tileSize, tileSize);
    }

    drawAnimation(gameMap) {
        this.ctx_a.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < gameMap.towers.length; i++) { 
            this.ctx_a.beginPath()
            this.ctx_a.lineWidth = 8;
            this.ctx_a.strokeStyle = gameMap.towers[i].color;
            // Check if enemy in range
            for (let j = 0; j < gameMap.enemyUnits.length; j++) {
                // Check if enemy is attackable
                if ((gameMap.towers[i].color == "red" && gameMap.enemyUnits[j].r > 0) ||
                (gameMap.towers[i].color == "green" && gameMap.enemyUnits[j].g > 0)||
                (gameMap.towers[i].color == "blue" && gameMap.enemyUnits[j].b > 0) ||
                (gameMap.towers[i].color == "black")) {
                    let distX = Math.abs(gameMap.towers[i].x - gameMap.enemyUnits[j].x)
                    let distY = Math.abs(gameMap.towers[i].y - gameMap.enemyUnits[j].y)
                    let distance = Math.sqrt(distX * distX + distY * distY)
                    if (distance < gameMap.towers[i].range) {
                        this.ctx_a.moveTo(gameMap.towers[i].x, gameMap.towers[i].y);
                        this.ctx_a.lineTo(gameMap.enemyUnits[j].x + (TILE_SIZE / 2), gameMap.enemyUnits[j].y  + (TILE_SIZE / 2)); 
                        
                        //Decrament the right option
                        if (gameMap.towers[i].color == "red") {
                            gameMap.enemyUnits[j].r -= 1;
                        } else if (gameMap.towers[i].color == "green") {
                            gameMap.enemyUnits[j].g -= 1;
                        } else if (gameMap.towers[i].color == "blue") {
                            gameMap.enemyUnits[j].b -= 1;
                        } else if (gameMap.towers[i].color == "black") {
                            gameMap.enemyUnits[j].r -= 1;
                            gameMap.enemyUnits[j].g -= 1;
                            gameMap.enemyUnits[j].b -= 1;
                        }
                        
                    }
                }
            }
            this.ctx_a.stroke();
            this.ctx_a.closePath()
        }
        

        for (let i = 0; i < gameMap.enemyUnits.length; i++) {
            gameMap.enemyUnits[i].draw(this.ctx_a, gameMap.tileSize);
        }

    }
}

//--------------------------------------------------
//   T O W E R
//--------------------------------------------------

class Tower {
    constructor(xTileT, yTileT, colorT) {
        this.xTile = xTileT + 1
        this.yTile = yTileT
        this.range = 200;
        this.color = colorT
        this.x = this.xTile * TILE_SIZE - (TILE_SIZE / 2);
        this.y = this.yTile * TILE_SIZE + (TILE_SIZE / 2);
    }
}

//--------------------------------------------------
//   E N E M Y
//--------------------------------------------------

class Enemy1 {
    constructor(newPath, tileSize) {
        this.id = getRandomInt(1000000)
        this.path = newPath;
        this.tileSize = tileSize;
        this.x = (this.path[0].x * tileSize);
        this.y = (this.path[0].y * tileSize);
        this.r = 255;
        this.g = 255;
        this.b = getRandomInt(255);

        this.maxStepsOnPath = 20;
        this.pathPosition = 0;
        this.stepsOnPath = 0;
        this.speed = this.tileSize / this.maxStepsOnPath;

        this.targetX = null;
        this.targetY = null; 
    }

    update() {
        // Dead
        if (this.r <= 0 && this.g <= 0 && this.b <= 0) {
            this.destorySelf(this.id);
            gameMap.coins += eIncome();
            document.getElementById("coins").innerHTML = gameMap.coins;
        }

        //console.log(this.pathPosition)
        if (this.path[this.pathPosition].x > this.path[this.pathPosition + 1].x) {
            //console.log("Go Left")
            this.x -= this.speed;
            
        }
        else if (this.path[this.pathPosition].x < this.path[this.pathPosition + 1].x) {
            //console.log("Go Right")
            this.x += this.speed;
            
        }
        else if (this.path[this.pathPosition].y > this.path[this.pathPosition + 1].y) {
            //console.log("Go Up")
            this.y -= this.speed;
            
        }
        else if (this.path[this.pathPosition].y < this.path[this.pathPosition + 1].y) {
            //console.log("Go Down")
            this.y += this.speed;
            
        }
        
        if (this.stepsOnPath == this.maxStepsOnPath) {
            this.pathPosition += 1;
            if (this.pathPosition == this.path.length - 1) {
                this.destorySelf(this.id)
            }
            this.stepsOnPath = 0;
        }
        this.stepsOnPath += 1;
    }

    destorySelf(idToDestroy) {
        let tempArray = [];
        for (let i = 0; i < gameMap.enemyUnits.length;i++) {
            if (gameMap.enemyUnits[i].id != idToDestroy) {
                tempArray.push(gameMap.enemyUnits[i]) 
            } 
            else {
                gameMap.lives -= 1;
                document.getElementById("lives").innerHTML = gameMap.lives - 1;
            }
        }
        gameMap.enemyUnits = tempArray;
    }

    draw(ctx, tileSize) {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
        let os = tileSize / 3
        ctx.fillRect(this.x + os, this.y + os, tileSize - 2 * os, tileSize - 2 * os);
        ctx.stroke();
        ctx.closePath();
    
    }
}

//--------------------------------------------------
//   G A M E   I N F O
//--------------------------------------------------

class GameInfo {
    constructor(gameMap) {
        this.gameMap = gameMap;

    }

    infoGen(tile) {
        let builtShowInfoText = null
        builtShowInfoText = 
        "<div class='info-container'>" + 
            "<div class='info-container-title'>" +
                "<b>" + tile.name + "</b>" +
            "</div>" +
            "<div class='info-container-description'>" +
                "<img class='small-image' src='" +  tile.src + "'>" +
                tile.description +
            "</div>" +
        "</div>"
        return builtShowInfoText;
    }

    buildButton(activationFunction, title, description) {
        let builtButton = "" + 
        "<div class='option' onclick='" + activationFunction + "'>" +
            "<div class='option-title'>" +
                title +
            "</div>" +
            "<div class='option-details'>" +
                description +
            "</div>" +
        "</div>";

        return builtButton;
    }

    // Sets the value this.selectedTile
    selectTile(xVal, yVal) {
        if (xVal != null) {
            this.gameMap.selectedTile = [Math.floor(xVal / this.gameMap.tileSize), Math.floor(yVal / this.gameMap.tileSize)];
        }
        let arrayValue = this.gameMap.array[this.gameMap.selectedTile[0]][this.gameMap.selectedTile[1]];
        let selectedType = null;
        let showInfo = null;
        switch (arrayValue) {
            case T_EMPTY.num:
                selectedType = "<div class='sel-name'>Empty Space</div>" +
                "<div class='option' onclick='buildTower(0)'>Build Tower</div>" +
                this.buildButton("buildWall()", "Build Wall", "Cost: 9839");
                showInfo = this.infoGen(T_EMPTY)
                break;
            case T_ROCK.num:
                selectedType = "<div class='sel-name'>Rock</div>" +
                "<div class='option' onclick='destroyObject()'>Destroy Rock</div>";
                showInfo = this.infoGen(T_ROCK)
                break;
            case T_WALL.num:
                selectedType = "<div class='sel-name'>Wall</div>" +
                "<div class='option' onclick='destroyObject()'>Destroy Wall</div>";
                showInfo = this.infoGen(T_WALL)
                break;
            case T_ENTRANCE.num:
                selectedType = "<div class='sel-name'>Enemy Start</div>";
                showInfo = this.infoGen(T_ENTRANCE)
                break;
            case T_EXIT.num:
                selectedType = "<div class='sel-name'>Enemy Finish</div>";
                showInfo = this.infoGen(T_EXIT)
                break;    
            case T_NO_BUILD.num:
                selectedType = "<div class='sel-name'>No Build Zone</div>";
                showInfo = this.infoGen(T_NO_BUILD)
                break;
            case T_CHECKPOINT.num:
                selectedType = "<div class='sel-name'>Research Center</div>";
                showInfo = this.infoGen(T_CHECKPOINT)
                break;    
            
            case T_TOWER.num:
                selectedType = "<div class='sel-name'>Tower</div>" + 
                "<div class='option' onclick='buildTower(1)'>Build Red Tower</div>" +
                "<div class='option' onclick='buildTower(2)'>Build Green Tower</div>" +
                "<div class='option' onclick='buildTower(3)'>Build Blue Tower</div>" +
                "<div class='option' onclick='buildTower(4)'>Build Black Tower</div>" +
                "<div class='option' onclick='destroyObject()'>Destroy Tower</div>";
                showInfo = this.infoGen(T_TOWER)
                break;
            case T_TOWER_RED.num:
                selectedType = "<div class='sel-name'>Red Tower</div>" + 
                "<div class='option' onclick='buildTower(5)'>Build Area Tower</div>" +
                "<div class='option' onclick='buildTower(6)'>Build Sniper Tower</div>" +
                "<div class='option' onclick='destroyObject()'>Destroy Tower</div>";
                showInfo = this.infoGen(T_TOWER_RED)
                break;
            case T_TOWER_GREEN.num:
                selectedType = "<div class='sel-name'>Green Tower</div>" + 
                "<div class='option' onclick='buildTower(7)'>Build Area Tower</div>" +
                "<div class='option' onclick='buildTower(8)'>Build Sniper Tower</div>" +
                "<div class='option' onclick='destroyObject()'>Destroy Tower</div>";
                showInfo = this.infoGen(T_TOWER_GREEN)
                break;
            case T_TOWER_BLUE.num:
                selectedType = "<div class='sel-name'>Blue Tower</div>" + 
                "<div class='option' onclick='buildTower(9)'>Build Area Tower</div>" +
                "<div class='option' onclick='buildTower(10)'>Build Sniper Tower</div>" +
                "<div class='option' onclick='destroyObject()'>Destroy Tower</div>";
                showInfo = this.infoGen(T_TOWER_BLUE)
                break;
            case T_TOWER_BLACK.num:
                selectedType = "<div class='sel-name'>Black Tower</div>" + 
                "<div class='option' onclick='buildTower(11)'>Build Area Tower</div>" +
                "<div class='option' onclick='buildTower(12)'>Build Sniper Tower</div>" +
                "<div class='option' onclick='destroyObject()'>Destroy Tower</div>";
                showInfo = this.infoGen(T_TOWER_BLACK)
                break;
            case T_TOWER_RED_AREA.num:
                selectedType = "<div class='sel-name'>Red Area Tower</div>" + 
                "<div class='option' onclick='destroyObject()'>Destroy Tower</div>";
                showInfo = this.infoGen(T_TOWER_RED_AREA)
                break;
            case T_TOWER_BLUE_AREA.num:
                selectedType = "<div class='sel-name'>Blue Area Tower</div>" + 
                "<div class='option' onclick='destroyObject()'>Destroy Tower</div>";
                showInfo = this.infoGen(T_TOWER_BLUE_AREA)
                break;
            case T_TOWER_GREEN_AREA.num:
                selectedType = "<div class='sel-name'>Green Area Tower</div>" + 
                "<div class='option' onclick='destroyObject()'>Destroy Tower</div>";
                showInfo = this.infoGen(T_TOWER_GREEN_AREA)
                break;
            case T_TOWER_BLACK_AREA.num:
                selectedType = "<div class='sel-name'>Black Area Tower</div>" + 
                "<div class='option' onclick='destroyObject()'>Destroy Tower</div>";
                showInfo = this.infoGen(T_TOWER_BLACK_AREA)
                break;
            case T_TOWER_RED_SNIPER.num:
                selectedType = "<div class='sel-name'>Red Sniper Tower</div>" + 
                "<div class='option' onclick='destroyObject()'>Destroy Tower</div>";
                showInfo = this.infoGen(T_TOWER_RED_SNIPER)
                break;
            case T_TOWER_BLUE_SNIPER.num:
                selectedType = "<div class='sel-name'>Blue Sniper Tower</div>" + 
                "<div class='option' onclick='destroyObject()'>Destroy Tower</div>";
                showInfo = this.infoGen(T_TOWER_BLUE_SNIPER)
                break;
            case T_TOWER_GREEN_SNIPER.num:
                selectedType = "<div class='sel-name'>Green Sniper Tower</div>" + 
                "<div class='option' onclick='destroyObject()'>Destroy Tower</div>";
                showInfo = this.infoGen(T_TOWER_GREEN_SNIPER)
                break;
            case T_TOWER_BLACK_SNIPER.num:
                selectedType = "<div class='sel-name'>Black Sniper Tower</div>" + 
                "<div class='option' onclick='destroyObject()'>Destroy Tower</div>";
                showInfo = this.infoGen(T_TOWER_BLACK_SNIPER)
                break;   
        }
        document.getElementById("selected-tile").innerHTML = selectedType;
        document.getElementById("info").innerHTML = showInfo;
    }
}



//--------------------------------------------------
//   M A P   R A N D O M I Z E R
//--------------------------------------------------


class MapRandomizer {
    constructor(gameMap) {
        this.gameMap = gameMap;
        this.createObsticles();
        
    }

    createObsticles() {
        this.initMapArray();
        this.createRandomTile(T_ENTRANCE.num);
        this.createRandomTile(T_EXIT.num);
        this.createRandomTile(T_CHECKPOINT.num);
       
        for (let i = 0; i < getRandomInt(20) + 10; i++) {
            this.createRandomTile(T_ROCK.num);
        }
        for (let i = 0; i < getRandomInt(20); i++) {
            this.createRandomTile(T_NO_BUILD.num);
        }
    }

    // Creates the array that holds the values for the game map.
    initMapArray() {
        this.gameMap.array = new Array(this.gameMap.height);
        for (var i = 0; i < this.gameMap.height; i++) {
            let tempArray = new Array(this.gameMap.width);
            for (var j = 0; j < this.gameMap.width; j++) {
                tempArray[j] = T_EMPTY.num;
            }
            this.gameMap.array[i] = tempArray;
        }
    }

    createRandomTile(newTile) {
        let square = this.randomSelectNewSquare();
        this.gameMap.array[square[0]][square[1]] = newTile; // START
    }  

    // Randomly selects an unused square from the map.
    randomSelectNewSquare() { 
        let randomWidth = getRandomInt(this.gameMap.width);
        let randomHeight = getRandomInt(this.gameMap.height);
        if (this.gameMap.array[randomHeight][randomWidth] == T_EMPTY.num) {
            return [randomHeight, randomWidth];
        } 
        return this.randomSelectNewSquare();
    }
}

//--------------------------------------------------
//   G A M E   M A P
//--------------------------------------------------

class GameMap {
    constructor(mapHeight, mapWidth, mapTileSize) {
        this.width = mapWidth;
        this.height = mapHeight;
        this.tileSize = mapTileSize;
        this.array = null;
        this.selectedTile = null;
        this.mapRandomizer = new MapRandomizer(this);
        this.gameInfo = new GameInfo(this);
        
        this.lives = 100;
        this.coins = 100;

        this.viablePathingNodes = [T_EMPTY.num, T_ENTRANCE.num, T_EXIT.num, T_NO_BUILD.num, T_CHECKPOINT.num];
        this.pathFinder  = null;
        this.buildPath();
        
        this.showPath = true;
        this.showVisited = false;

        // Wave Stuff
        this.enemyUnits = [];
        this.waveNumber = 0;
        this.enemiesCreated = 0;
        this.maxNumberOfEnemies = 10;

        // Towers
        this.towers = []
        
    }

    buildPath() {
        this.pathFinder = new PathFinder(this.array, this.viablePathingNodes, T_ENTRANCE.num, T_CHECKPOINT.num);
        let tempPathFinder = new PathFinder(this.array, this.viablePathingNodes, T_CHECKPOINT.num, T_EXIT.num);
        this.pathFinder.traceback = this.pathFinder.traceback.concat(tempPathFinder.traceback)
    }

    checkIfPath() {
        this.array[this.selectedTile[0]][this.selectedTile[1]] = T_ROCK.num;
        let tempPathFinder = new PathFinder(this.array, this.viablePathingNodes, T_ENTRANCE.num, T_CHECKPOINT.num);
        let tempPathFinder2 = new PathFinder(this.array, this.viablePathingNodes, T_CHECKPOINT.num, T_EXIT.num);
        tempPathFinder.traceback = tempPathFinder.traceback.concat(tempPathFinder2.traceback)
        this.array[this.selectedTile[0]][this.selectedTile[1]] = T_EMPTY.num;

        if ((tempPathFinder.pathFound == false) || (tempPathFinder2.pathFound == false)) {
            document.getElementById("message").innerHTML = "Can't Block Path"
            return false;
        }
        return true;
    }

    buildTower(color) {
        if (gameMap.checkIfPath()) {
            
            if (color == 0) {
                color = "null"
                this.array[this.selectedTile[0]][this.selectedTile[1]] = T_TOWER.num;
            } 
            else if (color == 1) {
                color = "red"
                this.array[this.selectedTile[0]][this.selectedTile[1]] = T_TOWER_RED.num;
            } 
            else if (color == 2) {
                color = "green"
                this.array[this.selectedTile[0]][this.selectedTile[1]] = T_TOWER_GREEN.num;
            } 
            else if (color == 3) {
                color = "blue"
                this.array[this.selectedTile[0]][this.selectedTile[1]] = T_TOWER_BLUE.num;
            }
            else if (color == 4) {
                color = "black"
                this.array[this.selectedTile[0]][this.selectedTile[1]] = T_TOWER_BLACK.num;
            }
            else if (color == 5) {
                color = "red"
                this.array[this.selectedTile[0]][this.selectedTile[1]] = T_TOWER_RED_AREA.num;
            }
            else if (color == 6) {
                color = "red"
                this.array[this.selectedTile[0]][this.selectedTile[1]] = T_TOWER_RED_SNIPER.num;
            }
            else if (color == 7) {
                color = "green"
                this.array[this.selectedTile[0]][this.selectedTile[1]] = T_TOWER_GREEN_AREA.num;
            }
            else if (color == 8) {
                color = "green"
                this.array[this.selectedTile[0]][this.selectedTile[1]] = T_TOWER_GREEN_SNIPER.num;
            }
            else if (color == 9) {
                color = "blue"
                this.array[this.selectedTile[0]][this.selectedTile[1]] = T_TOWER_BLUE_AREA.num;
            }
            else if (color == 10) {
                color = "blue"
                this.array[this.selectedTile[0]][this.selectedTile[1]] = T_TOWER_BLUE_SNIPER.num;
            }
            else if (color == 11) {
                color = "black"
                this.array[this.selectedTile[0]][this.selectedTile[1]] = T_TOWER_BLACK_AREA.num;
            }
            else if (color == 12) {
                color = "black"
                this.array[this.selectedTile[0]][this.selectedTile[1]] = T_TOWER_BLACK_SNIPER.num;
            }
           
            let newTower = new Tower(this.selectedTile[0],this.selectedTile[1], color)
            this.towers.push(newTower)
        }
    }

    buildWall() {
        if (gameMap.checkIfPath()) {
            this.array[this.selectedTile[0]][this.selectedTile[1]] = T_WALL.num;
        }
        
    }

    destroyObject() {
        // Check if Object was Tower
        let tile = this.array[this.selectedTile[0]][this.selectedTile[1]]
        let towerTypes = [T_TOWER.num, T_TOWER_RED.num, T_TOWER_RED_AREA.num, T_TOWER_RED_SNIPER.num,
            T_TOWER_GREEN.num, T_TOWER_GREEN_AREA.num, T_TOWER_GREEN_SNIPER.num,
            T_TOWER_BLUE.num, T_TOWER_BLUE_AREA.num, T_TOWER_BLUE_SNIPER.num,
            T_TOWER_BLACK.num, T_TOWER_BLACK_AREA.num, T_TOWER_BLACK_SNIPER.num,]
        if (tile in towerTypes) {
            for (var i = 0; i < gameMap.towers.length; i++) {
                if (gameMap.towers[i].xTile - 1 == this.selectedTile[0]) {
                    gameMap.towers.splice(i,1);
                    break;
                }
            }
        }

        this.array[this.selectedTile[0]][this.selectedTile[1]] = 0;
    }

    startWave() {
        if (this.enemiesCreated < this.maxNumberOfEnemies) {
            let newEnemy = new Enemy1(this.pathFinder.traceback, this.tileSize);
            this.enemyUnits.push(newEnemy)
            this.enemiesCreated += 1;
        }
        else {  
            this.waveNumber += 1;
            document.getElementById("wave-counter").innerHTML = this.waveNumber;
            this.enemiesCreated = 0;
            clearInterval(waveInterval);
        }
    }

    updateGameTick() {
        // Enemies
        for (let i = 0; i < gameMap.enemyUnits.length; i++) {
            gameMap.enemyUnits[i].update();
        }
    }
}


//--------------------------------------------------
//   C R E A T E   C L A S S E S
//--------------------------------------------------

// Map Width, Map Height, Map Tile Size(px)
var gameMap = new GameMap(MAP_X_TILES, MAP_Y_TILES, TILE_SIZE); //7, 14, 60

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

//--------------------------------------------------
//   T R I G G E R   F U N C T I O N S
//--------------------------------------------------

function gameTick() {
    gameMap.updateGameTick();
    gameCanvas.drawAnimation(gameMap);
}



function getClickPosition(e) {
    var xPosition = e.clientX - MAP_X_OFFSET;
    var yPosition = e.clientY - MAP_Y_OFFSET;
    gameMap.gameInfo.selectTile(xPosition, yPosition);
    gameCanvas.drawMap(gameMap);
}

function showHidePath() {
    gameMap.showPath = ! gameMap.showPath;
    gameMap.buildPath();
    gameMap.gameInfo.selectTile(0, 0);
    gameCanvas.drawMap(gameMap);
}


function randomizeMap() {
    gameMap.mapRandomizer.createObsticles();
    gameMap.buildPath();
    gameMap.enemyUnits = [];
    gameMap.towers = [];
    gameCanvas.drawMap(gameMap);
    
}

function showHideCheckedNodes() {   
    gameMap.showCheckedNodes = ! gameMap.showCheckedNodes;
    gameMap.buildPath();
    gameMap.gameInfo.selectTile(0, 0);
    gameCanvas.drawMap(gameMap);
}

function buildTower(color) {
    gameMap.buildTower(color);
    gameMap.buildPath();
    gameMap.gameInfo.selectTile(null, null);
    gameCanvas.drawMap(gameMap);  
}

function buildWall() {
    gameMap.buildWall();
    gameMap.buildPath();
    gameMap.gameInfo.selectTile(null, null);
    gameCanvas.drawMap(gameMap);  
}

function destroyObject() {
    gameMap.destroyObject();
    gameMap.gameInfo.selectTile(null, null);
    gameMap.buildPath();
    gameCanvas.drawMap(gameMap);
}

function createEnemy() {
    gameMap.startWave();
}

function startWave() {
    waveInterval = setInterval(createEnemy, 1000);
}


//--------------------------------------------------
//   E Q U A T I O N S
//--------------------------------------------------

function eIncome() {
    return 1;
}

function costWall() {
    return 1;
}

//--------------------------------------------------
//   S T A R T   G A M E
//--------------------------------------------------

animationCanvas.addEventListener("click", getClickPosition, false);
setInterval(gameTick, 30);