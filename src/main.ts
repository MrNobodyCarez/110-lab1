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

    const answer = await rl.question("How many cups do you want to buy? ");

    console.log(`You entered: ${answer}`);

    rl.close();
}

main();