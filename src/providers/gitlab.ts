import { loadPage } from '../helper';
import * as cheerio from 'cheerio';

export const gitlab = (username: string, size: number = 0): Promise<string | null> => {
    return new Promise(async (resolve) => {
        try {
            const { body } = await loadPage(`https://gitlab.com/${username}`);
            const $ = cheerio.load(body);

            if ($('title').text().includes('Not Found')) return resolve(null);

            const link = $('img.avatar').attr('data-src');
            let output = null;

            if (link) {
                const url = new URL(link);
                url.searchParams.delete('s');
                if (size > 0) url.searchParams.set('s', `${size}`);
                output = url.toString();
            }

            resolve(output);
        } catch (error) {
            resolve(null);
        }
    });
};
