import * as cheerio from 'cheerio';
import { loadPage } from '../helper';

// Default avatar, return null if it's this
const def = '818148bf682d429dc215c1705eb27b98';

export const lastfm = (username: string): Promise<string | null> => {
    return new Promise(async (resolve) => {
        const { body } = await loadPage(`https://www.last.fm/user/${username}`);

        // If user doesn't exist
        if (body.includes('404 - Page Not Found')) return resolve(null);
        const $ = cheerio.load(body);
        const ava = $('.avatar img').attr('src');

        // Make sure it's not undefined and not the default avatar
        if (!ava || ava.includes(def)) return resolve(null);

        resolve(ava);
    });
};
