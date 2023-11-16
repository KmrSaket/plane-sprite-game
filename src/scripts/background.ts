import constants from "../utils/constants.ts"
import util from "../utils/util.ts"
import foreignObjects from "./foreignObjects.ts"
import plane from "./plane.ts"

class background {
    private canvas: HTMLCanvasElement
    private canvasContext: CanvasRenderingContext2D
    private plane: plane
    private object: foreignObjects
    private width: number
    private height: number


    private keyEvent: {
        lastPressedX: string,
        leftPressed: boolean,
        rightPressed: boolean,
        lastPressedY: string
    } = {
            lastPressedX: "",
            leftPressed: false,
            rightPressed: false,
            lastPressedY: ""
        }

    constructor({
        height,
        width,
        canvas
    }: {
        height: number,
        width: number,
        canvas: HTMLCanvasElement
    }) {
        this.canvas = canvas
        this.height = height
        this.width = width
        this.canvasContext = this.canvas.getContext("2d")
        this.canvas.width = width
        this.canvas.height = height
        this.canvasContext.fillStyle = "#000000";
        this.canvasContext.fillRect(0, 0, width, height);
        this.plane = new plane({
            offset: { x: this.width / 2, y: this.height - constants.Plane.height },
            height: constants.Plane.height,
            width: constants.Plane.width,
            canvasContext: this.canvasContext
        })

        this.object = this.createForeignObjects()

        this.attachKeyDownEventListener()
        this.attachKeyUpEventListener()
        this.animate()
    }

    private draw() {
        this.canvasContext.fillStyle = "#000000";
        this.canvasContext.fillRect(0, 0, this.width, this.height);
    }

    private update() {
        if (this.keyEvent.lastPressedX === "L" && this.keyEvent.leftPressed) {
            this.plane.moveLeft()
        } else if (this.keyEvent.lastPressedX === "R" && this.keyEvent.rightPressed) {
            this.plane.moveRight()
        }
        this.draw()
        this.plane.draw()
        this.object.draw()
    }

    private createForeignObjects() {
        return new foreignObjects({
            offset: { x: util.getRandomValue({ min: 0, max: this.width }), y: 0 },
            height: constants.ForeignObjects.height,
            width: constants.ForeignObjects.width,
            canvasContext: this.canvasContext
        })
    }

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

                    break;
                case "ArrowDown":

                    break;
            }
        })
    }

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

                    break
                case "ArrowDown":

                    break
            }

        })
    }

    private animate = () => {
        this.update()
        window.requestAnimationFrame(this.animate)

    }
};

export default background;
