import { readSheet } from "./src/modules/google_sheet_api/GoogleSheetApi.js";
import { SHEET_ID } from "./src/config/SheetConfig.js";

async function main()
{
    let sheet =  await readSheet(SHEET_ID);


}

main();