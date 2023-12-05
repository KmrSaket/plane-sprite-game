import { spriteConstructor } from "../../utils/types.ts"
import sprite from "../superClasses/sprite.ts"

class background extends sprite {

    constructor({
        spriteConfig
    }: {
        spriteConfig: spriteConstructor
    }) {
        super(spriteConfig)
    }

    public draw() {
        super.moveDown({ isRestricted: false })
        super.draw()
    }
};

export default background;
