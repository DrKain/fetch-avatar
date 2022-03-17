import * as cheerio from 'cheerio';
import { loadPage } from '../helper';

export const steam = (steam_id: string): Promise<string | null> => {
    return new Promise(async (resolve) => {
        // Build the URL based on user input
        let url = ['https://steamcommunity.com', steam_id.startsWith('765') ? 'profiles' : 'id', steam_id].join('/');

        // Initial load
        let { body, res } = await loadPage(url);

        // Redirect from /profiles/steamid to /id/steamid when needed
        if (res.headers.location) {
            let redirect = await loadPage(res.headers.location);
            body = redirect.body;
        }

        // If the profile doesn't exist
        if (body.includes('The specified profile could not be found')) return resolve(null);

        // Load cheerio
        const $ = cheerio.load(body);
        const avatar = $('.profile_header .playerAvatarAutoSizeInner > img').attr('src');

        // If avatar element couldn't be found
        if (!avatar) return resolve(null);

        // Exclude the default avatars
        resolve(avatar.includes('avatars/fe') ? null : avatar);
    });
};
