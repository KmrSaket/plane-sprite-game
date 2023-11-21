import constants from "../utils/constants.ts"

class player {
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
        playerImage
    }: {
        height: number,
        width: number,
        canvasContext: CanvasRenderingContext2D
        offset: {
            x: number,
            y: number
        },
        playerImage: HTMLImageElement
    }) {
        this.canvasContext = canvasContext
        this.width = width
        this.height = height
        this.offset = { x, y }
        this.velocity = {
            x: constants.Plane.velocityX,
            y: 5
        }
        this.image = playerImage
    }

    public draw() {
        // this.canvasContext.fillStyle = "#FFFFFF";
        this.canvasContext.drawImage(this.image, this.offset.x, this.offset.y, this.width, this.height);
    }

    public moveLeft() {
        if (this.offset.x > 0) {
            // TODO: control velocity
            // this.velocity.x += 1
            if (this.offset.x - this.velocity.x > 0) {
                this.offset.x -= this.velocity.x
            } else {
                this.offset.x = 0
            }
        }
    }

    public moveRight() {
        if (this.offset.x + this.width < constants.CanvasDim.x) {
            // TODO: control velocity
            // this.velocity.x += 1
            if (this.offset.x + this.velocity.x < constants.CanvasDim.x) {
                this.offset.x += this.velocity.x
            } else {
                this.offset.x = constants.CanvasDim.x - this.width
            }
        }
    }

    public moveUp() {
        if (this.offset.y > 0) {
            // TODO: control velocity
            // this.velocity.x += 1
            if (this.offset.y - this.velocity.y > 0) {
                this.offset.y -= this.velocity.y
            } else {
                this.offset.y = 0
            }
        }
    }

    public moveDown() {
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

    public resetVelocityX() {
        this.velocity.x = constants.Plane.velocityX
    }

    public getOffset() {
        return this.offset
    }

    public getDimension() {
        return { height: this.height, width: this.width }
    }
}

export default player;