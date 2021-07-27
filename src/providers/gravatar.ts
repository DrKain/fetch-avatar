import { loadPage, md5 } from '../helper';

export const gravatar = (email: string, size: number = 0): Promise<string | null> => {
    return new Promise(async (resolve) => {
        const hash = md5(email.toLowerCase());
        const url = new URL('https://gravatar.com/avatar/' + hash);

        if (size > 0) url.searchParams.set('size', `${size}`);
        // Prevent default avatar showing when avatar doesn't exist
        url.searchParams.set('d', '404');

        const { body } = await loadPage(url.toString());

        resolve(body.includes('404 Not Found') ? null : url.toString());
    });
};
