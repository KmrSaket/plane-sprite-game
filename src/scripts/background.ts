import plane from "./plane.ts"

class background {
    private canvas: HTMLCanvasElement
    private canvasContext: CanvasRenderingContext2D
    private plane: plane
    private width: number
    private height: number

    private planeHeight: number = 30
    private planeWidth: number = 30

    private keyEvent: {
        lastPressedX: string,
        lastPressedY: string
    } = {
            lastPressedX: "",
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
            offset: { x: this.width / 2, y: this.height - this.planeHeight },
            height: this.planeHeight,
            width: this.planeWidth,
            canvasContext: this.canvasContext
        })

        this.attachKeyDownEventListener()
        this.attachKeyUpEventListener()
        this.animate()
    }

    draw() {
        this.canvasContext.fillStyle = "#000000";
        this.canvasContext.fillRect(0, 0, this.width, this.height);
    }

    update() {
        switch (this.keyEvent.lastPressedX) {
            case "L":
                this.plane.moveLeft()
                break;
            case "R":
                this.plane.moveRight()
                break;
        }
        this.keyEvent.lastPressedX = ""
        this.draw()
        this.plane.draw()
    }

    attachKeyDownEventListener() {
        window.addEventListener("keydown", (oEvent) => {
            switch (oEvent.key) {
                case "ArrowLeft":
                    this.keyEvent.lastPressedX = "L"
                    break;
                case "ArrowRight":
                    this.keyEvent.lastPressedX = "R"
                    break;
                case "ArrowUp":

                    break;
                case "ArrowDown":

                    break;
            }
        })
    }

    attachKeyUpEventListener() {
        window.addEventListener("keyup", (oEvent) => {
            switch (oEvent.key) {
                case "ArrowLeft":
                case "ArrowRight":
                    this.plane.resetVelocityX()
                    break;
                case "ArrowUp":

                    break;
                case "ArrowDown":

                    break;
            }

        })
    }

    private animate = () => {
        this.update()
        window.requestAnimationFrame(this.animate)

    }
};

export default background;
