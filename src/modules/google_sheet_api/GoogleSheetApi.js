// ------------- BEGIN_IMPORT -------------
import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../config/GoogleCredentials.json' assert {type: 'json'};
// ------------- END_IMPORT -------------


export async function readSheet(sheetID)
{
    let document = new GoogleSpreadsheet(sheetID);

    try
    {
        await document.useServiceAccountAuth(credentials);
        
        return document;
    }
    catch(error)
    {
        console.log(`Failed to read sheet: ${error.json()}`)
    }
    return null
}