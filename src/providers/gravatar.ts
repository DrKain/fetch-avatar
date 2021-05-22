import { get } from 'https';
import { createHash } from 'crypto';

const md5 = (str: string) => createHash('md5').update(str).digest('hex');

export const gravatar = (email: string, size: number = 0): Promise<string | null> => {
    return new Promise(async (resolve) => {
        const hash = md5(email.toLowerCase());
        const url = new URL('https://gravatar.com/avatar/' + hash);

        if (size > 0) url.searchParams.set('size', `${size}`);
        url.searchParams.set('d', '404');

        get(url, (res) => resolve(res.headers.location ?? null));
    });
};
