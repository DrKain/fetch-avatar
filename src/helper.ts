import { IncomingMessage } from 'http';
import { createHash } from 'crypto';
import { get } from 'https';

const fetch = require('node-fetch');

interface IResponse {
    res: IncomingMessage;
    body: string;
}

export const log = (str: string) => console.log(`[fetch-avatar] ${str}`);

/**
 * Convert a string to MD5 hash
 * @param str String
 * @returns String
 */
export const md5 = (str: string) => createHash('md5').update(str).digest('hex');

/**
 * Load a page and return the response for manipulating
 * @param url URL
 * @returns IResponse
 */
export const loadPage = (url: string): Promise<IResponse> => {
    return new Promise((resolve) => {
        get(url, (res) => {
            res.setEncoding('utf8');
            let data = '';
            res.on('data', (chunk: any) => (data += chunk));
            res.on('end', () => resolve({ res, body: data }));
        });
    });
};

/**
 * Similar to LoadPage but pass some headers that might be needed
 * for authentication
 * @param url URL
 * @param headers Headers
 * @returns
 */
export const loadAPI = (url: string, headers: any): Promise<string> => {
    return new Promise(async (resolve) => {
        const data = await fetch(url, { headers });
        resolve(await data.text());
    });
};
