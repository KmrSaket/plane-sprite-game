import background from "../scripts/sprites/background.ts"
import foreignObjects from "../scripts/sprites/foreignObjects.ts"
import player from "../scripts/sprites/player.ts"
import constants from "./constants.ts"
import { spriteConstructor } from "./types.ts"
import util from "./util.ts"

abstract class createObjects {
    public static createPlayer({
        canvasContext, image
    }: {
        canvasContext: CanvasRenderingContext2D, image: HTMLImageElement
    }) {
        let oSpriteConfig: spriteConstructor = {
            dimension: {
                x: constants.Player.width,
                y: constants.Player.height
            },
            offset: {
                x: constants.CanvasDim.x / 2,
                y: constants.CanvasDim.y - constants.Player.height,
                minX: constants.CanvasDim.x - constants.Player.MaxOffsetX,
                maxX: constants.Player.MaxOffsetX,
                minY: constants.Player.MaxOffsetY,
                maxY: constants.CanvasDim.y
            },
            velocity: {
                x: constants.Player.velocityX,
                y: constants.Player.velocityY
            },
            canvasContext,
            image
        }
        return new player({
            spriteConfig: oSpriteConfig
        })
    }

    public static createBackground({
        canvasContext, image, inverted
    }: {
        canvasContext: CanvasRenderingContext2D, image: HTMLImageElement, inverted: boolean
    }) {
        let oSpriteConfig: spriteConstructor = {
            dimension: {
                x: constants.CanvasDim.x,
                y: constants.CanvasDim.y
            },
            offset: {
                x: 0,
                y: inverted ? -constants.CanvasDim.y : 0,
                minX: 0,
                maxX: 0,
                minY: 0,
                maxY: 0
            },
            velocity: {
                x: 0,
                y: constants.Game.VelocityY
            },
            canvasContext: canvasContext,
            image: image
        }
        return new background({
            spriteConfig: oSpriteConfig
        })
    }

    /**
    * Method to create foreign object
    * @returns foreignObjects - returns the foreign object
    */
    public static createForeignObjects({
        canvasContext, image
    }: {
        canvasContext: CanvasRenderingContext2D, image: HTMLImageElement
    }) {
        let oSpriteConfig: spriteConstructor = {
            dimension: {
                x: constants.ForeignObjects.width,
                y: constants.ForeignObjects.height
            },
            offset: {
                x: util.getRandomValue({
                    min: constants.CanvasDim.x - constants.Player.MaxOffsetX,
                    max: constants.Player.MaxOffsetX - constants.ForeignObjects.width
                }),
                y: -constants.ForeignObjects.height,
                minX: constants.CanvasDim.x - constants.Player.MaxOffsetX,
                maxX: constants.Player.MaxOffsetX,
                minY: constants.Player.MaxOffsetY,
                maxY: constants.CanvasDim.y
            },
            velocity: {
                x: 0,
                y: constants.ForeignObjects.velocityY
            },
            canvasContext: canvasContext,
            image
        }
        return new foreignObjects({ spriteConfig: oSpriteConfig })
    }
}

export default createObjects