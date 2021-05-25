const fetch = require('node-fetch');
const ENV_VAR = 'FA_DISCORD';

const fetchUser = async (id: string) => {
    let avatar = null;

    try {
        const token = process.env[ENV_VAR];
        const data = await fetch(`https://discord.com/api/v8/users/${id}`, {
            headers: { Authorization: `Bot ${token}` }
        });
        const json = JSON.parse(await data.text());

        if (json.avatar) avatar = `https://cdn.discordapp.com/avatars/${id}/${json.avatar}.png`;
    } catch (error) {}

    return avatar;
};

export const discord = (id: string): Promise<string | null> => {
    return new Promise(async (resolve) => {
        if (!process.env[ENV_VAR]) {
            console.log(`env.${ENV_VAR} not set`);
            return resolve(null);
        }

        resolve(await fetchUser(id));
    });
};
