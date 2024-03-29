import constants from "../utils/constants.ts"
import createObjects from "../utils/createObjects.ts"
import util from "../utils/util.ts"
import background from "./sprites/background.ts"
import foreignObjects from "./sprites/foreignObjects.ts"
import player from "./sprites/player.ts"

class game {

    // private attributes
    private canvas: HTMLCanvasElement
    private canvasContext: CanvasRenderingContext2D
    private player: player
    private background: background
    private backgroundInv: background
    private enemy: foreignObjects[]
    // private powerup: foreignObjects
    private keyEvent: {
        lastPressedX: string,
        leftPressed: boolean,
        rightPressed: boolean,
        lastPressedY: string,
        upPressed: boolean,
        downPressed: boolean
    } = {
            lastPressedX: "",
            leftPressed: false,
            rightPressed: false,
            lastPressedY: "",
            upPressed: false,
            downPressed: false
        }

    private gameState: string = "initial"
    // XXX temp code
    private counter: number = 0


    // Methods
    /**
     * Constructor to create background object
     * @param height - Height of canvas 
     * @param width - Width of canvas 
     * @param canvas - Canvas element
     * @param image - background image
     */
    constructor({
        canvas,
        powerupImage,
        playerImage,
        playerImageLeft,
        playerImageRight,
        backgroundImage,
        backgroundInvImage
    }: {
        canvas: HTMLCanvasElement,
        powerupImage: HTMLImageElement,
        playerImage: HTMLImageElement,
        playerImageLeft: HTMLImageElement,
        playerImageRight: HTMLImageElement,
        backgroundImage: HTMLImageElement,
        backgroundInvImage: HTMLImageElement
    }) {
        this.canvas = canvas
        this.canvasContext = this.canvas.getContext("2d")
        this.canvas.width = constants.CanvasDim.x
        this.canvas.height = constants.CanvasDim.y

        this.background = createObjects.createBackground({ canvasContext: this.canvasContext, inverted: false, image: backgroundImage })
        this.background.draw()

        this.backgroundInv = createObjects.createBackground({ canvasContext: this.canvasContext, inverted: true, image: backgroundInvImage })
        this.backgroundInv.draw()

        this.player = createObjects.createPlayer({ canvasContext: this.canvasContext, image: playerImage, imageLeft: playerImageLeft, imageRight: playerImageRight })
        this.player.draw()

        // create foreign object

        this.enemy = createObjects.createForeignObjects({ canvasContext: this.canvasContext, image: playerImage })
        // this.powerup = createObjects.createForeignObjects({ canvasContext: this.canvasContext, image: powerupImage })

        // attach event listeners
        this.attachKeyDownEventListener()
        this.attachKeyUpEventListener()

        // animate window
        this.animate()
    }





    /**
     * Update offsets on key event, check collision and 
     * draw background, plane and object
     */
    private update() {
        // Move left on press of L and else Move right on press of R
        if (this.keyEvent.lastPressedX === "L" && this.keyEvent.leftPressed) {
            this.player.moveLeft()
        } else if (this.keyEvent.lastPressedX === "R" && this.keyEvent.rightPressed) {
            this.player.moveRight()
        }

        // Move up on press of U and else Move down on press of D
        if (this.keyEvent.lastPressedY === "U" && this.keyEvent.upPressed) {
            this.player.moveUp()
        } else if (this.keyEvent.lastPressedY === "D" && this.keyEvent.downPressed) {
            this.player.moveDown()
        }

        // check if player has collided with foriegn object
        for (let index = 0; index < constants.Game.EnemyCount; index++) {
            if (util.isCollision({
                offsetOne: this.player.getOffset(),
                DimensionOne: this.player.getDimension(),
                offsetTwo: this.enemy[index].getOffset(),
                DimensionTwo: this.enemy[index].getDimension()
            })) {
                // if collided increase the collision counter
                this.enemy[index].touchedPlayer()
                this.player.touchedEnemy()
                this.counter++
            }

            // // check if player has collided with powerup
            // if (util.isCollision({
            //     offsetOne: this.player.getOffset(),
            //     DimensionOne: this.player.getDimension(),
            //     offsetTwo: this.powerup.getOffset(),
            //     DimensionTwo: this.powerup.getDimension()
            // })) {
            //     // if collided increase the collision counter
            //     this.powerup.touchedPlayer()
            //     this.player.touchedPowerUp()
            // }
        }
        // draw background first, then plane and lastly foreign object
        this.background.draw()
        this.backgroundInv.draw()
        this.player.draw()
        for (let index = 0; index < constants.Game.EnemyCount; index++) {
            this.enemy[index].draw()
        }
        // this.powerup.draw()

        //XXX: temp code for counter
        this.canvasContext.font = "20px Comic Sans MS";
        this.canvasContext.fillStyle = "grey"
        this.canvasContext.fillText("Collision counter: " + this.counter, 10, 20)
        this.canvasContext.fillText("Health: " + this.player.getHealth(), 10, 40)
        if (this.player.getHealth() <= 0) {
            this.endGame({ type: "loss" })
        }
    }

    private endGame({ type }: { type: string }) {
        this.gameState = type
    }

    /**
     * To attach key down event for L/R/U/D
     */
    private attachKeyDownEventListener() {
        window.addEventListener("keydown", (oEvent) => {
            switch (oEvent.key) {
                case "ArrowLeft":
                    this.keyEvent.lastPressedX = "L"
                    this.keyEvent.leftPressed = true
                    break;
                case "ArrowRight":
                    this.keyEvent.lastPressedX = "R"
                    this.keyEvent.rightPressed = true
                    break;
                case "ArrowUp":
                    this.keyEvent.lastPressedY = "U"
                    this.keyEvent.upPressed = true
                    break;
                case "ArrowDown":
                    this.keyEvent.lastPressedY = "D"
                    this.keyEvent.downPressed = true
                    break;
            }
        })
    }
    /**
     * To attach key up event for L/R/U/D
     */
    private attachKeyUpEventListener() {
        window.addEventListener("keyup", (oEvent) => {
            switch (oEvent.key) {
                case "ArrowLeft":
                    this.keyEvent.leftPressed = false
                    if (this.keyEvent.rightPressed) {
                        this.keyEvent.lastPressedX = "R"
                    }
                    break
                case "ArrowRight":
                    this.keyEvent.rightPressed = false
                    if (this.keyEvent.leftPressed) {
                        this.keyEvent.lastPressedX = "L"
                    }
                    break
                case "ArrowUp":
                    this.keyEvent.upPressed = false
                    if (this.keyEvent.upPressed) {
                        this.keyEvent.lastPressedY = "D"
                    }
                    if (this.gameState === "initial") {
                        this.gameState = "run"
                    }
                    break
                case "ArrowDown":
                    this.keyEvent.downPressed = false
                    if (this.keyEvent.downPressed) {
                        this.keyEvent.lastPressedY = "U"
                    }
                    break
            }

        })
    }

    /**
     * Method to animate in loop
     */
    private animate = () => {
        if (this.gameState === "run") {
            this.update()
        } else if (this.gameState === "loss") {
            // show lost UI
        } else if (this.gameState === "win") {
            // show win UI
        }
        window.requestAnimationFrame(this.animate)

    }
};

export default game;
