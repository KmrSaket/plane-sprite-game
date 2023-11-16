abstract class util {

    public static getRandomValue({ min, max }: { min: number, max: number }) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

}

export default util