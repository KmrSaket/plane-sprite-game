abstract class constants {
    public static Game: {
        AccelerationMode: boolean,
        VelocityY: number,
        VelocityX: number,
        MaxVelocityY: number,
        MinVelocityY: number,
        AccelerationY: number,
        DecelerationY: number,
        EnemyCount: number
    } = {
            AccelerationMode: false,
            VelocityY: 10,
            VelocityX: 0,
            MaxVelocityY: 18,
            MinVelocityY: 4,
            AccelerationY: 0.1,
            DecelerationY: 0.5,
            EnemyCount: 4
        }
    public static CanvasDim: {
        x: number,
        y: number
    } = {
            x: window.innerWidth,
            y: window.innerHeight
        }

    public static Player: {
        velocityX: number,
        velocityY: number,
        height: number,
        heightTurning: number,
        width: number,
        widthTurning: number,
        imgSrc: string,
        imgSrcLeft: string,
        imgSrcRight: string,
        MaxOffsetY: number,
        MaxOffsetX: number
    } = {
            velocityX: 10,
            velocityY: 5,
            height: 150,
            heightTurning: 150,
            width: 74,
            widthTurning: 140,
            imgSrc: "https://raw.githubusercontent.com/KmrSaket/plane-sprite-game/master/public/assets/old%20truck.png",
            imgSrcLeft: "https://raw.githubusercontent.com/KmrSaket/plane-sprite-game/master/public/assets/old%20truck%20-%20left.png",
            imgSrcRight: "https://raw.githubusercontent.com/KmrSaket/plane-sprite-game/master/public/assets/old%20truck%20-%20right.png",
            MaxOffsetY: window.innerHeight * 0.5,
            MaxOffsetX: window.innerWidth * 0.85
        }

    public static ForeignObjects: {
        enemySrc: string,
        powerupSrc: string,
        velocityY: number,
        velocityX: number,
        height: number,
        width: number
    } = {
            enemySrc: "https://raw.githubusercontent.com/KmrSaket/plane-sprite-game/master/public/assets/old%20truck.png",
            powerupSrc: "https://raw.githubusercontent.com/KmrSaket/plane-sprite-game/master/public/assets/new%20truck.png",
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