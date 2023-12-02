import constants from "../utils/constants.ts"
import background from "./background.ts"

class player {
    private background: background
    private canvasContext: CanvasRenderingContext2D
    private width: number
    private height: number
    private offset: {
        x: number,
        y: number
    }
    private velocity: {
        x: number,
        y: number
    }
    private image: HTMLImageElement

    constructor({
        height,
        width,
        canvasContext,
        offset: {
            x,
            y
        },
        playerImage,
        background
    }: {
        height: number,
        width: number,
        canvasContext: CanvasRenderingContext2D
        offset: {
            x: number,
            y: number
        },
        playerImage: HTMLImageElement,
        background: background
    }) {
        this.canvasContext = canvasContext
        this.width = width
        this.height = height
        this.offset = { x, y }
        this.velocity = {
            x: constants.Player.velocityX,
            y: 5
        }
        this.image = playerImage
        this.background = background
    }

    public draw() {
        // this.canvasContext.fillStyle = "#FFFFFF";
        this.canvasContext.drawImage(this.image, this.offset.x, this.offset.y, this.width, this.height);
    }

    public moveLeft() {
        let marginLeft = constants.CanvasDim.x - constants.Game.PlayerMaxX
        if (this.offset.x > marginLeft) {
            // TODO: control velocity
            // this.velocity.x += 1
            if (this.offset.x - this.velocity.x > 0) {
                this.offset.x -= this.velocity.x
            } else {
                this.offset.x = marginLeft
            }
        }
    }

    public moveRight() {
        let marginRight = constants.CanvasDim.x - constants.Game.PlayerMaxX
        if (this.offset.x + this.width < constants.CanvasDim.x - marginRight) {
            // TODO: control velocity
            // this.velocity.x += 1
            if (this.offset.x + this.velocity.x < constants.CanvasDim.x - marginRight) {
                this.offset.x += this.velocity.x
            } else {
                this.offset.x = constants.CanvasDim.x - marginRight - this.width
            }
        }
    }

    public moveUp() {
        if (constants.Game.AccelerationMode) {
            this.background.accelerate()
        } else {
            if (this.offset.y > 0) {
                // TODO: control velocity
                // this.velocity.x += 1
                if (this.offset.y - this.velocity.y > constants.Game.PlayerMaxY) {
                    this.offset.y -= this.velocity.y
                } else {
                    this.offset.y = constants.Game.PlayerMaxY
                }
            }
        }
    }

    public moveDown() {
        if (constants.Game.AccelerationMode) {
            this.background.decelerate()
        } else {
            if (this.offset.y + this.height < constants.CanvasDim.y) {
                // TODO: control velocity
                // this.velocity.x += 1
                if (this.offset.y + this.velocity.y < constants.CanvasDim.y) {
                    this.offset.y += this.velocity.y
                } else {
                    this.offset.y = constants.CanvasDim.y - this.height
                }
            }
        }
    }

    public resetVelocityX() {
        this.velocity.x = constants.Player.velocityX
    }

    public getOffset() {
        return this.offset
    }

    public getDimension() {
        return { height: this.height, width: this.width }
    }
}

export default player;