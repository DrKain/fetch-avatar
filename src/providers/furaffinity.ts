import * as cheerio from 'cheerio';
import { loadPage } from '../helper';

export const furaffinity = (username: string): Promise<string | null> => {
    return new Promise(async (resolve) => {
        try {
            const { body } = await loadPage(`https://www.furaffinity.net/user/${username}`);
            const $ = cheerio.load(body);

            if ($('title').text().includes('System Error')) return resolve(null);

            const url = $('.user-nav-avatar').attr('src');

            resolve(url ? 'https:' + url : null);
        } catch (error) {
            resolve(null);
        }
    });
};
