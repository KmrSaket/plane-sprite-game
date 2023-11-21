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
            imgSrc: "https://opengameart.org/sites/default/files/background-1_0.png"
        }
}
export default constants