import { get } from 'https';

export const loadPage = (url: string): Promise<string> => {
    return new Promise((resolve) => {
        get(url, (res) => {
            res.setEncoding('utf8');
            let data = '';
            res.on('data', (chunk: any) => (data += chunk));
            res.on('end', () => resolve(data));
        });
    });
};
