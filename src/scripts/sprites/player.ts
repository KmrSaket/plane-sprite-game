import sprite from "../superClasses/sprite.ts"
import { spriteConstructor } from "../../utils/types.ts"

class player extends sprite {

    constructor({
        spriteConfig
    }: {
        spriteConfig: spriteConstructor
    }) {
        super(spriteConfig)
    }

    public moveDown() {
        super.moveDown({ isRestricted: true })
    }
}

export default player;