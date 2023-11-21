abstract class constants {
    public static CanvasDim: {
        x: number,
        y: number
    } = {
            x: 1000,
            y: 500
        }

    public static Player: {
        velocityX: number,
        height: number,
        width: number
    } = {
            velocityX: 10,
            height: 150,
            width: 74
        }

    public static ForeignObjects: {
        velocityY: number,
        height: number,
        width: number
    } = {
            velocityY: 4,
            height: 20,
            width: 20
        }

    public static Background: {
        imgSrc: string,
        altImgSrc: string
    } = {
            imgSrc: "https://raw.githubusercontent.com/KmrSaket/plane-sprite-game/master/public/assets/background.jpeg",
            altImgSrc: "https://raw.githubusercontent.com/KmrSaket/plane-sprite-game/master/public/assets/background-rotated.jpeg"
        }

    public static player: {
        imgSrc: string
    } = {
            imgSrc: "https://raw.githubusercontent.com/KmrSaket/plane-sprite-game/master/public/assets/old%20truck.png"
        }
}
export default constants