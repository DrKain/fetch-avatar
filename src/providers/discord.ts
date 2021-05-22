import { Client, ImageSize } from 'discord.js';

const client = new Client();
let ready = false;

const logoutTimer = () => {
    setTimeout(() => {
        client.destroy();
        ready = false;
    }, 60_000);
};

export const discord = (id: string, size: ImageSize = 256): Promise<string | null> => {
    return new Promise(async (resolve) => {
        if (!process.env.DISCORD_TOKEN) {
            console.log('env.DISCORD_TOKEN not set');
            return resolve(null);
        }

        if (!ready) await login();

        const user = await client.users.fetch(id);
        if (user) return resolve(user.avatarURL({ format: 'png', dynamic: true, size }));
        else return null;
    });
};

const login = () => {
    return new Promise((resolve) => {
        client.on('ready', () => {
            logoutTimer();
            resolve((ready = true));
        });
        client.login(process.env.DISCORD_TOKEN);
    });
};

if (process.env.DISCORD_TOKEN) login();
