abstract class constants {
    public static Game: {
        AccelerationMode: boolean,
        VelocityY: number,
        MaxVelocityY: number,
        MinVelocityY: number,
        AccelerationY: number,
        DecelerationY: number,
        PlayerMaxY: number,
        PlayerMaxX: number
    } = {
            AccelerationMode: false,
            VelocityY: 4,
            MaxVelocityY: 18,
            MinVelocityY: 4,
            AccelerationY: 0.1,
            DecelerationY: 0.5,
            PlayerMaxY: 250,
            PlayerMaxX: 850
        }
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
        width: number,
        imgSrc: string
    } = {
            velocityX: 10,
            height: 150,
            width: 74,
            imgSrc: "https://raw.githubusercontent.com/KmrSaket/plane-sprite-game/master/public/assets/old%20truck.png"
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
}
export default constants