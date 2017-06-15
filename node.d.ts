declare module "url"{
    export interface Url{
        protocol?:string;
        hostname?:string;
        pathname?:string;
    }

    export function parse(urlStr:string,parseQueryString?,slashesDenoteHost?):Url;
}
declare module "path"{
    export function join(...paths:any[]):string;
}

declare module "fs";

declare module "lodash";