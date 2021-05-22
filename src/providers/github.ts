import { get } from 'https';

export const github = (username: string, size: number = 0): Promise<string | null> => {
    return new Promise((resolve) => {
        get(`https://github.com/${username}.png`, (res) => {
            const link = res.headers.location;
            let output = link ?? null;

            if (link) {
                const url = new URL(link);
                url.searchParams.delete('v');
                if (size > 0) url.searchParams.set('size', `${size}`);
                output = url.toString();
            }

            resolve(output);
        });
    });
};
