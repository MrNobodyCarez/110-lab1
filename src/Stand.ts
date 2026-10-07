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

    // The amount of money the player currently has.
    private cash: number;

    // The amount of each supply needed to make one cup of lemonade.
    private cupsPerLemonade = 1;
    private icePerLemonade = 1;
    private lemonsPerLemonade = 1;
    private sugarPerLemonade = 1;

    /**
     * Creates a new lemonade stand with no supplies
     * and $20.00 in starting cash.
     */
    constructor() {
        this.cups = 0;
        this.ice = 0;
        this.lemons = 0;
        this.sugar = 0;
        this.cash = 20;
    }

    /**
     * Sells one cup of lemonade and updates the inventory.
     *
     * The method first checks whether the stand has enough
     * supplies to make one cup. If it does, the required
     * supplies are removed from the inventory.
     *
     * @returns true if the cup was successfully sold,
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

    /**
     * Buys supplies for the lemonade stand.
     *
     * The player provides the quantity and price of each supply.
     * The total cost is removed from the stand's cash balance
     * and the purchased supplies are added to the inventory.
     *
     * @param cups Number of cups to buy.
     * @param ice Amount of ice to buy.
     * @param lemons Number of lemons to buy.
     * @param sugar Amount of sugar to buy.
     * @param cupPrice Price of one cup.
     * @param icePrice Price of one unit of ice.
     * @param lemonPrice Price of one lemon.
     * @param sugarPrice Price of one unit of sugar.
     * @returns true if the purchase was successful or false if
     *          the player does not have enough cash.
     */
    buySupplies(
        cups: number,
        ice: number,
        lemons: number,
        sugar: number,
        cupPrice: number,
        icePrice: number,
        lemonPrice: number,
        sugarPrice: number
    ): boolean {
        const totalCost =
            cups * cupPrice +
            ice * icePrice +
            lemons * lemonPrice +
            sugar * sugarPrice;

        if (totalCost > this.cash) {
            return false;
        }

        this.cups += cups;
        this.ice += ice;
        this.lemons += lemons;
        this.sugar += sugar;
        this.cash -= totalCost;

        return true;
    }
}