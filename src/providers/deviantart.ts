import * as cheerio from 'cheerio';
import { get } from 'https';

const host = `https://www.deviantart.com`;

const loadPage = (url: string): Promise<string> => {
    return new Promise((resolve) => {
        // Handle response
        const handle = (res: any) => {
            res.setEncoding('utf8');
            let data = '';
            res.on('data', (chunk: any) => (data += chunk));
            res.on('end', () => resolve(data));
        };

        get(url, (res) => {
            // Redirections (eg: /KainSir to /kainsir)
            if (res.headers.location) get(`${host}${res.headers.location}`, handle);
            else handle(res);
        });
    });
};

export const deviantart = (username: string): Promise<string | null> => {
    return new Promise(async (resolve) => {
        try {
            const body = await loadPage(`${host}/${username}`);
            const $ = cheerio.load(body);

            if ($('title').text().includes('404')) return resolve(null);

            const url = $('img[data-hook="user_avatar"]').attr('src');

            resolve(url ? url : null);
        } catch (error) {
            resolve(null);
        }
    });
};
