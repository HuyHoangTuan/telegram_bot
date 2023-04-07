import { GoogleSpreadsheet } from 'google-spreadsheet';

export async function readSheet(sheetID)
{
    let document = new GoogleSpreadsheet(sheetID);

    try
    {
        await document.useServiceAccountAuth(JSON.parse(process.env.GOOGLE_CREDENTIALS));
        await document.updateProperties({
            autoRecalc: "ON_CHANGE"
        });
        await document.loadInfo();
        return document;
    }
    catch(error)
    {
        console.log(error);
        return null;
    }
}