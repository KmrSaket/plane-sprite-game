import constants from "../../utils/constants.ts"
import util from "../../utils/util.ts"
import sprite from "../superClasses/sprite.ts"
import { spriteConstructor } from "../../utils/types.ts"

class foreignObjects extends sprite {
    constructor({ spriteConfig }: { spriteConfig: spriteConstructor }) {
        super(spriteConfig)
    }

    public draw() {
        super.draw()
        this.shiftDown()
    }

    private shiftDown() {
        if (this.getOffset().y < constants.CanvasDim.y) {
            if (this.getOffset().y < constants.CanvasDim.y) {
                this.setOffsetY({ value: this.getOffset().y + this.getVelocity().y })
            } else {
                this.setOffsetY({ value: constants.CanvasDim.y - this.getDimension().y })
            }
        } else {
            this.resetOffset()
        }
    }

    private resetOffset() {
        this.setOffsetX({ value: util.getRandomValue({ max: this.getOffset().maxX - this.getDimension().x, min: this.getOffset().minX }) })
        this.setOffsetY({ value: -constants.ForeignObjects.height })
    }

    public touchedPlayer() {
        this.resetOffset()
    }

    protected decelerate() {
        if (this.getVelocity().y > constants.Game.MinVelocityY) {
            this.setVelocityY({ value: (this.getVelocity().y - constants.Game.DecelerationY) })
        }
    }

    protected accelerate() {
        if (this.getVelocity().y < constants.Game.MaxVelocityY) {
            this.setVelocityY({ value: (this.getVelocity().y + constants.Game.AccelerationY) })
        }
    }

}

export default foreignObjects

