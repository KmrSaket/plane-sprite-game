abstract class constants {
    public static Game: {
        AccelerationMode: boolean,
        VelocityY: number,
        VelocityX: number,
        MaxVelocityY: number,
        MinVelocityY: number,
        AccelerationY: number,
        DecelerationY: number,
    } = {
            AccelerationMode: false,
            VelocityY: 10,
            VelocityX: 0,
            MaxVelocityY: 18,
            MinVelocityY: 4,
            AccelerationY: 0.1,
            DecelerationY: 0.5
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
        velocityY: number,
        height: number,
        width: number,
        imgSrc: string,
        MaxOffsetY: number,
        MaxOffsetX: number
    } = {
            velocityX: 10,
            velocityY: 5,
            height: 150,
            width: 74,
            imgSrc: "https://raw.githubusercontent.com/KmrSaket/plane-sprite-game/master/public/assets/old%20truck.png",
            MaxOffsetY: 250,
            MaxOffsetX: 850
        }

    public static ForeignObjects: {
        velocityY: number,
        velocityX: number,
        height: number,
        width: number
    } = {
            velocityY: 4,
            velocityX: 0,
            height: 150,
            width: 74,
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