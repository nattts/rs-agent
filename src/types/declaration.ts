export interface IData {
    title?: string;
    href?: string;
}

export type IMailOptions = (arg: string) => {
    from: string|undefined;
    to: string|undefined;
    subject: string|undefined,
    html: string;
};
