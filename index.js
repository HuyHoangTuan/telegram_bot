
import FoodBot from "./src/modules/food_bot/FoodBot.js";
import dotenv from 'dotenv'
dotenv.config();

async function main()
{
    console.log("-------------- INIT BOT --------------");
    let foodBot = await FoodBot.getInstance();
    
    foodBot.addCommand(
        /-start/,
        function(msg)
        {
            this.sendMessage(msg, 'Hi, here is the list command that you could ask.')
        }.bind(foodBot)
    )

    foodBot.addCommand(
        /-help/, 
        function(msg)
        {
            this.sendMessage(msg, "hello");
        }.bind(foodBot)
    );


    console.log("-------------- FINISH INIT BOT --------------");
    
}

main();