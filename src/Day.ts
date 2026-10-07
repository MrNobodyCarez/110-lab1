/**
 * Represents the weather for one day of the lemonade stand simulation.
 *
 * The temperature is used to determine how much lemonade
 * customers are likely to buy.
 */
export class Day {
    // The temperature for the day in degrees Fahrenheit.
    private temperature: number;

    /**
     * Creates a new day with a given temperature.
     *
     * @param temperature The day's temperature in Fahrenheit.
     */
    constructor(temperature: number) {
        this.temperature = temperature;
    }

    /**
     * Gets the temperature for the day.
     *
     * @returns The day's temperature in Fahrenheit.
     */
    getTemperature(): number {
        return this.temperature;
    }
}