/**
 * Represents the weather and supply prices for one day
 * of the lemonade stand simulation.
 */
export class Day {
    // The temperature for the day in degrees Fahrenheit.
    private temperature: number;

    // The prices of supplies for the current day.
    private cupPrice: number;
    private icePrice: number;
    private lemonPrice: number;
    private sugarPrice: number;

    /**
     * Creates a new day with its temperature and supply prices.
     *
     * @param temperature The day's temperature in Fahrenheit.
     * @param cupPrice The price of one cup.
     * @param icePrice The price of one unit of ice.
     * @param lemonPrice The price of one lemon.
     * @param sugarPrice The price of one unit of sugar.
     */
    constructor(
        temperature: number,
        cupPrice: number,
        icePrice: number,
        lemonPrice: number,
        sugarPrice: number
    ) {
        this.temperature = temperature;
        this.cupPrice = cupPrice;
        this.icePrice = icePrice;
        this.lemonPrice = lemonPrice;
        this.sugarPrice = sugarPrice;
    }

    /**
     * Returns the day's temperature so the game
     * can use it to determine lemonade demand.
     */
    getTemperature(): number {
        return this.temperature;
    }

    /**
     * Returns the current price of one cup.
     */
    getCupPrice(): number {
        return this.cupPrice;
    }

    /**
     * Returns the current price of one unit of ice.
     */
    getIcePrice(): number {
        return this.icePrice;
    }

    /**
     * Returns the current price of one lemon.
     */
    getLemonPrice(): number {
        return this.lemonPrice;
    }

    /**
     * Returns the current price of one unit of sugar.
     */
    getSugarPrice(): number {
        return this.sugarPrice;
    }
    /**
     * Generates a random temperature for the day.
     * 
     * @returns A temperature between 60°F and 100°F.
     */
    static randomTemperature(): number {
        return Math.floor(Math.random() * 41) + 60;
    }
    /**
     * Generates a random supply price.
     * 
     * @returns A price between $0.05 and $0.50.
     */
    static randomSupplyPrice(): number {
        return Math.floor(Math.random() * 46 + 5) / 100;
    }
}