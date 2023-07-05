import { transporter, mailOptions } from './config';
import { template } from './template';
import { IData } from '../types/declaration';

export const send = async (document: IData[]|null): Promise<any|void> => {
    try {
        if (document && document?.length > 0) {
            const templateDoc = template({array: document});
            const options = mailOptions(templateDoc);
            transporter.sendMail(options)
            console.log(`Email sent: ${new Date()}`)
        }
    } catch (e: any) {
       return Promise.reject(`unable to send email ${e}`);
    }
}
