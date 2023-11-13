import constants from "../utils/constants.ts"

class plane {
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
    private backgroundDim: {
        x: number,
        y: number
    }

    constructor({
        height,
        width,
        canvasContext,
        offset: {
            x,
            y
        }
    }: {
        height: number,
        width: number,
        canvasContext: CanvasRenderingContext2D
        offset: {
            x: number,
            y: number
        }
    }) {
        this.canvasContext = canvasContext
        this.width = width
        this.height = height
        this.offset = { x, y }
        this.velocity = {
            x: 5,
            y: 5
        }
    }

    public draw() {
        this.canvasContext.fillStyle = "#FFFFFF";
        this.canvasContext.fillRect(this.offset.x, this.offset.y, this.width, this.height);
    }

    public moveLeft() {
        if (this.offset.x > 0) {
            this.velocity.x += 1
            if (this.offset.x - this.velocity.x > 0) {
                this.offset.x -= this.velocity.x
            } else {
                this.offset.x = 0
            }
        }
    }

    public moveRight() {
        if (this.offset.x < constants.CanvasDim.x) {
            this.velocity.x += 1
            if (this.offset.x + this.velocity.x < constants.CanvasDim.x) {
                this.offset.x += this.velocity.x
            } else {
                this.offset.x = constants.CanvasDim.x - this.width

            }
        }
    }

    public resetVelocityX() {
        this.velocity.x = 0
    }
}

export default plane;