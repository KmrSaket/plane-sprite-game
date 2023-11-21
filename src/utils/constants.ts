abstract class constants {
    public static CanvasDim: {
        x: number,
        y: number
    } = {
            x: 1000,
            y: 500
        }

    public static Plane: {
        velocityX: number,
        height: number,
        width: number
    } = {
            velocityX: 10,
            height: 50,
            width: 50
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
        imgSrc: string
    } = {
            imgSrc: "https://raw.githubusercontent.com/KmrSaket/plane-sprite-game/master/public/assets/background.jpeg"
        }

    public static player: {
        imgSrc: string
    } = {
            imgSrc: "https://raw.githubusercontent.com/KmrSaket/plane-sprite-game/master/public/assets/old%20truck.png"
        }
}
export default constants