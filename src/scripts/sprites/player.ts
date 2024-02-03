import sprite from "../superClasses/sprite.ts"
import { spriteConstructor } from "../../utils/types.ts"
import constants from "../../utils/constants.ts"

class player extends sprite {
    private imageLeft: HTMLImageElement
    private imageRight: HTMLImageElement
    constructor({
        spriteConfig,
        imageLeft,
        imageRight
    }: {
        spriteConfig: spriteConstructor,
        imageLeft: HTMLImageElement,
        imageRight: HTMLImageElement
    }) {
        super(spriteConfig)
        this.imageLeft = imageLeft
        this.imageRight = imageRight
    }

    public moveLeft() {
        // this.setDrawingProps({ image: this.imageLeft, x: constants.Player.widthTurning, y: constants.Player.heightTurning })
        super.moveLeft()
    }

    public moveRight() {
        // this.setDrawingProps({ image: this.imageRight, x: constants.Player.widthTurning, y: constants.Player.heightTurning })
        super.moveRight()
    }

    public moveDown() {
        super.moveDown({ isRestricted: true })
    }

    public touchedEnemy() {
        super.collided({ type: -1 })
        // super.blinkAnimate();
    }

    public touchedPowerUp() {
        super.collided({ type: 1 })
    }
}

export default player;