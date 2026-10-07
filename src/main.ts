import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { Stand } from "./Stand";
import { Day } from "./Day";

/**
 * Starts the lemonade stand simulation.
 *
 * Creates the stand and a sample day so the game
 * can begin using the Stand and Day classes.
 */
async function main(): Promise<void> {
    const stand = new Stand();

    const day = new Day(
        85,
        0.10,
        0.05,
        0.50,
        0.20
    );

    console.log(`Today's temperature: ${day.getTemperature()}°F`);
    console.log(`Cup price: $${day.getCupPrice()}`);
    console.log(`Ice price: $${day.getIcePrice()}`);
    console.log(`Lemon price: $${day.getLemonPrice()}`);
    console.log(`Sugar price: $${day.getSugarPrice()}`);

    const rl = createInterface({
        input: stdin,
        output: stdout
    });

    const cups = Number(await rl.question("How many cups do you want to buy? "));
    const ice = Number(await rl.question("How much ice do you want to buy? "));
    const lemons = Number(await rl.question("How many lemons do you want to buy? "));
    const sugar = Number(await rl.question("How much sugar do you want to buy? "));

    const purchaseSuccessful = stand.buySupplies(
    cups,
    ice,
    lemons,
    sugar,
    day.getCupPrice(),
    day.getIcePrice(),
    day.getLemonPrice(),
    day.getSugarPrice());
    if (purchaseSuccessful) {
        console.log(`Purchased ${cups} cups, ${ice} ice, ${lemons} lemons, and ${sugar} sugar.`);
    } else {
        console.log("Not enough cash to buy the cups.");
    }
    const cupsSold = stand.sellCups(5);
    console.log(`Cups sold: ${cupsSold}`);
    console.log(stand.getStatus());
    rl.close();
}

main();