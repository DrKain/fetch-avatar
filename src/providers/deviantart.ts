import * as cheerio from 'cheerio';
import { loadPage } from '../helper';

const host = `https://www.deviantart.com`;

export const deviantart = (username: string): Promise<string | null> => {
    return new Promise(async (resolve) => {
        try {
            let { body, res } = await loadPage(`${host}/${username}`);

            // Case-sensitive redirections (eg: /UserName to /username)
            if (res.headers.location) {
                let data = await loadPage(`${host}${res.headers.location}`);
                body = data.body;
            }

            const $ = cheerio.load(body);

            if ($('title').text().includes('404')) return resolve(null);

            const url = $('img[data-hook="user_avatar"]').attr('src');

            resolve(url ? url : null);
        } catch (error) {
            resolve(null);
        }
    });
};
