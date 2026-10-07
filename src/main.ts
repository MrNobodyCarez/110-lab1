import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

/**
 * Tests Node.js console input by asking the player
 * a question and displaying their response.
 */
async function main(): Promise<void> {
    const rl = createInterface({
        input: stdin,
        output: stdout
    });

    const answer = await rl.question("How many cups do you want to buy? ");

    console.log(`You entered: ${answer}`);

    rl.close();
}

main();