import puppeteer from 'puppeteer';
import { IData } from './types/declaration';

export default module.exports = async (url: string|undefined, numberOfTitles: number): Promise<IData[]|null> => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        url && await page.goto(url, { waitUntil: 'networkidle0' });

        const itemsSelector = "ul > li > h3 > a";
        const result = await page.evaluate((selector: any, numberOfTitles: any): IData[] => {
            const ul = Array.from(document.querySelectorAll(selector));
            const data: IData[] = [];
            let i = 0;
                while (i < numberOfTitles) {
                    data.push({
                        title: ul[i].textContent?.split("  ").join("").replace(/\n/gm, " "),
                        href: ul[i].getAttribute("href")!
                    });
                    i++;
                }
            return data;
        }, itemsSelector, numberOfTitles);

        browser.close();
        return result;
    } catch (e: any) {
       return Promise.reject(`scraping failed. ${e?.message}`);
    }
}