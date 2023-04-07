import TelegramBot from "node-telegram-bot-api";
import { readSheet } from "../google_sheet_api/GoogleSheetApi.js";
import '../../utils/Global.js'
class FoodBot
{
    constructor({id, token, sheetId})
    {
        this._id = id;
        this._token = token;
        this._sheetId = sheetId;
        this._self = null;
        this._document = null;
    }

    async init()
    {
        this._self = new TelegramBot(this.getToken(), {polling: true});
        this._document = await readSheet(this._sheetId);
    }

    getToken()
    {
        return this._token;
    }
    
    getSheetId()
    {
        return this._sheetId;
    }

    sendMessage(msg, content)
    {
        this._self.sendMessage(msg.chat.id, content);
    }

    addCommand(cmd, callback)
    {
        // console.log(cmd);
        if(callback != null && cmd != null)
        {
            this._self.onText(cmd, (message) => {
                callback && callback(message);
            });

            console.log(`Added ${cmd}`);
            return true;
        }
        console.log("Could not add command!");
        return false;
    }

    static async getInstance()
    {
        if(this._instance == null)
        {
            this._instance = new FoodBot(
                {
                    id: BOT_COUNTER.getNextId(), 
                    token: process.env.BOT_TOKEN, 
                    sheetId: process.env.SHEET_ID 
                }
            );
            await this._instance.init();
        }
        return this._instance;
    }
}

export default FoodBot;