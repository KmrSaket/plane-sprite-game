import constants from "../utils/constants.ts"
import util from "../utils/util.ts"
import foreignObjects from "./foreignObjects.ts"
import player from "./player.ts"

class background {

    // private attributes
    private canvas: HTMLCanvasElement
    private canvasContext: CanvasRenderingContext2D
    private player: player
    private object: foreignObjects
    private width: number
    private height: number
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
    private normalImage: HTMLImageElement
    private invertedImage: HTMLImageElement
    private offset: {
        normalImgx: number,
        normalImgy: number,
        invertedImgx: number,
        invertedImgy: number
    } = {
            normalImgx: 0,
            normalImgy: 0,
            invertedImgx: 0,
            invertedImgy: 0
        }

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
        height,
        width,
        canvas,
        image,
        playerImage
    }: {
        height: number,
        width: number,
        canvas: HTMLCanvasElement,
        image: HTMLImageElement,
        playerImage: HTMLImageElement
    }) {
        this.canvas = canvas
        this.height = height
        this.width = width
        this.canvasContext = this.canvas.getContext("2d")
        this.canvas.width = width
        this.canvas.height = height

        this.offset.invertedImgy = -this.height

        // draw background initially
        this.normalImage = image
        this.canvasContext.drawImage(this.normalImage, this.offset.normalImgx, this.offset.normalImgy, this.width, this.height)

        this.invertedImage = image

        // create plane object
        this.player = new player({
            offset: { x: this.width / 2, y: this.height - constants.Player.height },
            height: constants.Player.height,
            width: constants.Player.width,
            canvasContext: this.canvasContext,
            playerImage: playerImage
        })

        // create foreign object
        this.object = this.createForeignObjects()

        // attach event listeners
        this.attachKeyDownEventListener()
        this.attachKeyUpEventListener()

        // animate window
        this.animate()
    }

    /**
     * Draw background
     */
    private draw() {
        this.moveDown()
        this.canvasContext.fillStyle = "#FFFFFF"
        this.canvasContext.fillRect(0, 0, this.width, this.height)

        this.canvasContext.drawImage(this.normalImage, this.offset.normalImgx, this.offset.normalImgy, this.width, this.height)
        this.canvasContext.drawImage(this.invertedImage, this.offset.invertedImgx, this.offset.invertedImgy, this.width, this.height)
    }

    private moveDown() {
        this.offset.normalImgy += constants.ForeignObjects.velocityY
        if (this.offset.normalImgy > this.height) {
            this.offset.normalImgy = -this.height
        }

        this.offset.invertedImgy += constants.ForeignObjects.velocityY
        if (this.offset.invertedImgy > this.height) {
            this.offset.invertedImgy = -this.height
        }
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

        // check if plane has collided with foriegn object
        if (util.isCollision({
            offsetOne: this.player.getOffset(),
            DimensionOne: this.player.getDimension(),
            offsetTwo: this.object.getOffset(),
            DimensionTwo: this.object.getDimension()
        })) {
            // if collided increase the collision counter
            this.object.touchedPlane()
            this.counter++
        }

        // draw background first, then plane and lastly foreign object
        this.draw()
        this.player.draw()
        this.object.draw()

        //XXX: temp code for counter
        this.canvasContext.font = "20px Comic Sans MS";
        this.canvasContext.fillStyle = "grey"
        this.canvasContext.fillText("Collision counter: " + this.counter, 10, 20)
    }

    /**
     * Method to create foreign object
     * @returns foreignObjects - returns the foreign object
     */
    private createForeignObjects() {
        return new foreignObjects({
            offset: { x: util.getRandomValue({ min: 0, max: this.width }), y: 0 },
            height: constants.ForeignObjects.height,
            width: constants.ForeignObjects.width,
            canvasContext: this.canvasContext
        })
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
        this.update()
        window.requestAnimationFrame(this.animate)

    }
};

export default background;
