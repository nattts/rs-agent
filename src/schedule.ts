import * as cron from 'node-cron';
import scrape from "./scraper";
import { send } from './email/emailSender';
import { IData } from './types/declaration';
import * as dotenv from "dotenv";
dotenv.config();


 async function scrapeAndSendEmail(): Promise<void> {
    try {
        const numberOfTitles: number = 5;
        const result: IData[]|null  = await scrape(process.env.SCRAPE_ENDPOINT_PROD, numberOfTitles);
        if (result) {
            await send(result);
        } else {
            console.log(`Email was not sent. scraped: ${result} @${new Date()}`);
        }
    } catch(e) {
        return Promise.reject(e);
    }
 }


async function executeScheduler () {
    try {
        cron.schedule('0 8 * * *', () => {
            console.log("running a task every day 8am");
            scrapeAndSendEmail().catch((e: any) => console.log(e));
        });
    } catch (e) {
        console.log('scheduler failed', e);
    }
}
 
executeScheduler();
