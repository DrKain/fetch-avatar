import { loadPage } from '../helper';

export const github = (username: string, size: number = 0): Promise<string | null> => {
    return new Promise(async (resolve) => {
        let { res } = await loadPage(`https://github.com/${username}.png`);
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
};
