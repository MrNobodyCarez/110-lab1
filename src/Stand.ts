/**
 * Represents the state of a lemonade stand.
 *
 * The Stand class keeps track of the supplies needed
 * to make lemonade and updates the inventory when a
 * cup of lemonade is sold.
 */
export class Stand {
    // Supplies currently available at the stand.
    private cups: number;
    private ice: number;
    private lemons: number;
    private sugar: number;

    // The amount of each supply needed to make one cup of lemonade.
    private cupsPerLemonade = 1;
    private icePerLemonade = 1;
    private lemonsPerLemonade = 1;
    private sugarPerLemonade = 1;

    /**
     * Creates a new lemonade stand with no supplies.
     */
    constructor() {
        this.cups = 0;
        this.ice = 0;
        this.lemons = 0;
        this.sugar = 0;
    }

    /**
     * Sells one cup of lemonade and updates the inventory.
     *
     * The method first checks whether the stand has enough
     * supplies to make one cup. If it does, the required
     * supplies are removed from the inventory.
     *
     * @returns true if the cup was successfully sold
     *          or false if there were not enough supplies.
     */
    sellCup(): boolean {
        if (this.cups < this.cupsPerLemonade ||
            this.ice < this.icePerLemonade ||
            this.lemons < this.lemonsPerLemonade ||
            this.sugar < this.sugarPerLemonade) {
            return false;
        }
        this.cups -= this.cupsPerLemonade;
        this.ice -= this.icePerLemonade;
        this.lemons -= this.lemonsPerLemonade;
        this.sugar -= this.sugarPerLemonade;
        return true;
    }
}