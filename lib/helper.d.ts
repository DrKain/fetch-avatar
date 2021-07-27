/// <reference types="node" />
import { IncomingMessage } from 'http';
interface IResponse {
    res: IncomingMessage;
    body: string;
}
export declare const log: (str: string) => void;
/**
 * Convert a string to MD5 hash
 * @param str String
 * @returns String
 */
export declare const md5: (str: string) => string;
/**
 * Load a page and return the response for manipulating
 * @param url URL
 * @returns IResponse
 */
export declare const loadPage: (url: string) => Promise<IResponse>;
/**
 * Similar to LoadPage but pass some headers that might be needed
 * for authentication
 * @param url URL
 * @param headers Headers
 * @returns
 */
export declare const loadAPI: (url: string, headers: any) => Promise<string>;
export {};
