abstract class util {

    public static getRandomValue({ min, max }: { min: number, max: number }) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    public static isCollision({ offsetOne, DimensionOne, offsetTwo, DimensionTwo }) {
        if (offsetOne.y <= offsetTwo.y + DimensionTwo.height &&
            offsetOne.y + DimensionOne.height >= offsetTwo.y &&
            offsetOne.x <= offsetTwo.x + DimensionTwo.width &&
            offsetOne.x + DimensionOne.width >= offsetTwo.x
        ) {
            return true
        }

        return false
    }

}

export default util