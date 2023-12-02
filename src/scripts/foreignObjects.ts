import constants from "../utils/constants.ts"
import util from "../utils/util.ts"

class foreignObjects {
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
            x: 0,
            y: constants.ForeignObjects.velocityY
        }
    }

    public draw() {
        this.canvasContext.fillStyle = "#FF0000";
        this.canvasContext.fillRect(this.offset.x, this.offset.y, this.width, this.height);
        this.shiftDown()
    }

    private shiftDown() {
        if (this.offset.y + this.height < constants.CanvasDim.y) {
            if (this.offset.y + this.velocity.y < constants.CanvasDim.y) {
                this.offset.y += this.velocity.y
            } else {
                this.offset.y = constants.CanvasDim.y - this.height
            }
        } else {
            this.resetOffset()
        }
    }

    private resetOffset() {
        let marginLeft = constants.CanvasDim.x - constants.Game.PlayerMaxX
        let marginRight = constants.Game.PlayerMaxX
        this.offset.x = util.getRandomValue({ max: marginRight, min: marginLeft })
        this.offset.y = 0
    }

    public getOffset() {
        return this.offset
    }

    public getDimension() {
        return { height: this.height, width: this.width }
    }

    public touchedPlane() {
        this.resetOffset()
    }

    public decelerate() {
        if (this.velocity.y > constants.Game.MinVelocityY) {
            this.velocity.y -= constants.Game.DecelerationY
        }
    }
    public accelerate() {
        if (this.velocity.y < constants.Game.MaxVelocityY) {
            this.velocity.y += constants.Game.AccelerationY
        }
    }

}

export default foreignObjects

