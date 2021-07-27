import cheerio from 'cheerio/lib/cheerio';
import { loadPage } from '../helper';

export const trakt = (username: string, size: number = 0): Promise<string | null> => {
    return new Promise(async (resolve) => {
        const { body } = await loadPage(`https://trakt.tv/users/${username.toLowerCase()}`);

        // If user doesn't exist
        if (body.includes('(404) - Trakt.tv')) return resolve(null);

        // Load the body for scraping
        const $ = cheerio.load(body);
        const ava = $('img.avatar').attr('src');

        // Make sure it's not undefined
        if (!ava) return resolve(null);

        // Parse the avatar URL
        const avatar = new URL(ava);
        avatar.searchParams.set('d', '404');
        if (size > 0) avatar.searchParams.set('size', `${size}`);

        // Load the avatar URL to make sure it's not a default avatar
        const res2 = await loadPage(avatar.toString());

        resolve(res2.body.includes('404 Not Found') ? null : avatar.toString());
    });
};
