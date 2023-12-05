import constants from "../../utils/constants.ts"

class sprite {
    private dimension: {
        x: number,
        y: number
    }
    private offset: {
        x: number,
        y: number,
        minX: number,
        maxX: number,
        minY: number,
        maxY: number
    }
    private velocity: {
        x: number,
        y: number
    }
    private defaultVelocity: {
        x: number,
        y: number
    }
    private image: HTMLImageElement
    private canvasContext: CanvasRenderingContext2D



    constructor({
        dimension: {
            x: dimensionX,
            y: dimensionY
        },
        offset: {
            x: offsetX,
            y: offsetY,
            minX: offsetMinX,
            maxX: offsetMaxX,
            minY: offsetMinY,
            maxY: offsetMaxY
        },
        velocity: {
            x: velocityX,
            y: velocityY
        },
        canvasContext,
        image
    }: {
        dimension: {
            x: number,
            y: number
        },
        offset: {
            x: number,
            y: number,
            minX: number,
            maxX: number,
            minY: number,
            maxY: number
        },
        velocity: {
            x: number,
            y: number
        },
        canvasContext: CanvasRenderingContext2D,
        image: HTMLImageElement
    }) {
        this.canvasContext = canvasContext
        this.dimension = { x: dimensionX, y: dimensionY }
        this.offset = { x: offsetX, y: offsetY, minX: offsetMinX, minY: offsetMinY, maxX: offsetMaxX, maxY: offsetMaxY }
        this.velocity = { x: velocityX, y: velocityY }
        this.defaultVelocity = this.velocity
        this.image = image
    }

    public draw() {
        this.canvasContext.drawImage(this.image, this.offset.x, this.offset.y, this.dimension.x, this.dimension.y);
    }

    public moveLeft() {
        if (this.offset.x > this.offset.minX) {
            // TODO: control velocity
            // this.velocity.x += 1
            if (this.offset.x - this.velocity.x > 0) {
                this.offset.x -= this.velocity.x
            } else {
                this.offset.x = this.offset.minX
            }
        }
    }

    public moveRight() {
        if (this.offset.x + this.dimension.x < this.offset.maxX) {
            // TODO: control velocity
            // this.velocity.x += 1
            if (this.offset.x + this.velocity.x < this.offset.maxX) {
                this.offset.x += this.velocity.x
            } else {
                this.offset.x = this.offset.maxX
            }
        }
    }

    public moveUp() {
        if (constants.Game.AccelerationMode) {
            this.accelerate()
        } else {
            if (this.offset.y > this.offset.minY) {
                // TODO: control velocity
                // this.velocity.x += 1
                if (this.offset.y - this.velocity.y > this.offset.minY) {
                    this.offset.y -= this.velocity.y
                } else {
                    this.offset.y = this.offset.minY
                }
            }
        }
    }

    public moveDown({ isRestricted }: { isRestricted: boolean }) {
        if (isRestricted) {
            if (constants.Game.AccelerationMode) {
                this.decelerate()
            } else {
                if (this.offset.y + this.dimension.y < this.offset.maxY) {
                    // TODO: control velocity
                    // this.velocity.x += 1
                    if (this.offset.y + this.velocity.y < this.offset.maxY) {
                        this.offset.y += this.velocity.y
                    } else {
                        this.offset.y = this.offset.maxY
                    }
                }
            }
        } else {
            if (constants.Game.AccelerationMode) {
                this.decelerate()
            } else {
                this.offset.y += this.velocity.y
                if (this.offset.y > this.dimension.y) {
                    this.offset.y = -this.dimension.y
                }
            }
        }
    }

    protected resetVelocity() {
        this.velocity = this.defaultVelocity
    }

    public getOffset() {
        return this.offset
    }

    protected setMaxOffsetXY({ x, y }: { x: number, y: number }) {
        this.offset.maxX = x
        this.offset.maxY = y
    }

    protected setMinOffsetXY({ x, y }: { x: number, y: number }) {
        this.offset.minX = x
        this.offset.minY = y
    }


    protected setOffsetX({ value }: { value: number }) {
        this.offset.x = value
    }
    protected setOffsetY({ value }: { value: number }) {
        this.offset.y = value
    }
    protected setVelocityY({ value }: { value: number }) {
        this.velocity.y = value
    }

    public getVelocity() {
        return this.velocity
    }

    public getDimension() {
        return this.dimension
    }

    private decelerate() {
        if (this.velocity.y > constants.Game.MinVelocityY) {
            this.velocity.y -= constants.Game.DecelerationY
        }
    }

    private accelerate() {
        if (this.velocity.y < constants.Game.MaxVelocityY) {
            this.velocity.y += constants.Game.AccelerationY
        }
    }
}

export default sprite;