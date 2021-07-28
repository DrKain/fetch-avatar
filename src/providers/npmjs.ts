import * as cheerio from 'cheerio';
import { loadPage } from '../helper';

export const npmjs = (username: string): Promise<string | null> => {
    return new Promise(async (resolve) => {
        const { body } = await loadPage(`https://www.npmjs.com/~${username}`);

        if (body.includes('NotFoundError: Scope not found')) return resolve(null);

        const $ = cheerio.load(body);
        const avatar = $('img[alt="avatar"]').attr('src');
        const full = 'https://www.npmjs.com' + avatar;

        resolve(full);
    });
};
