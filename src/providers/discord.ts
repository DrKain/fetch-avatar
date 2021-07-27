import { config } from '../config';
import { loadAPI, log } from '../helper';

type DiscordSizes = '16' | '32' | '64 ' | '128' | '256' | '512' | '1024' | '2048' | '4096';

export const discord = (id: string, size: DiscordSizes = '256'): Promise<null | string> => {
    return new Promise(async (resolve) => {
        let avatar = null;
        const token = config.get('discord');

        if (!token) {
            log('discord token not set using config.set');
            return resolve(null);
        }

        try {
            const url = `https://discord.com/api/v8/users/${id}`;
            const text = await loadAPI(url, { Authorization: `Bot ${token}` });
            const json = JSON.parse(text);

            if (json.avatar) avatar = `https://cdn.discordapp.com/avatars/${id}/${json.avatar}.png?size=${size}`;
        } catch (error) {
            log(`${error}`);
        }

        resolve(avatar);
    });
};
