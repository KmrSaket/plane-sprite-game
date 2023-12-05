export type spriteConstructor = {
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
}

export * from './types'


// type spriteConstructornew = {
//     dimension: {
//         x: dimensionX,
//         y: dimensionY
//     },
//     offset: {
//         x: offsetX,
//         y: offsetY,
//         minX: offsetMinX,
//         maxX: offsetMaxX,
//         minY: offsetMinY,
//         maxY: offsetMaxY
//     },
//     velocity: {
//         x: velocityX,
//         y: velocityY
//     },
//     canvasContext,
//     image
// }