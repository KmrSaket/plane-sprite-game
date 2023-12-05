abstract class util {

    public static getRandomValue({ min, max }: { min: number, max: number }) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    public static isCollision({ offsetOne, DimensionOne, offsetTwo, DimensionTwo }) {
        if (offsetOne.y <= offsetTwo.y + DimensionTwo.y &&
            offsetOne.y + DimensionOne.y >= offsetTwo.y &&
            offsetOne.x <= offsetTwo.x + DimensionTwo.x &&
            offsetOne.x + DimensionOne.x >= offsetTwo.x
        ) {
            return true
        }

        return false
    }

    public static createImgElement(src: string) {
        let oImage = new Image()
        oImage.src = src
        oImage.onload = () => {
            return oImage
        }
    }

}

export default util