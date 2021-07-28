import { config } from '../config';
import { loadAPI, log } from '../helper';

export const spotify = (user_id: string): Promise<string | null> => {
    return new Promise(async (resolve) => {
        const token = config.get('spotify');
        let avatar = null;

        if (!token) {
            log('spotify token not set using config.set');
            return resolve(null);
        }

        try {
            const url = `https://api.spotify.com/v1/users/${user_id}`;
            const text = await loadAPI(url, { Authorization: `Bearer ${token}` });
            const json = JSON.parse(text);

            // Warn the user when an error is returned
            if (json.error) {
                log(JSON.stringify(json.error));
                return resolve(null);
            }

            const first = json.images.shift();
            if (first && first.url) avatar = first.url;
        } catch (error) {
            log(`${error}`);
        }

        resolve(avatar);
    });
};
