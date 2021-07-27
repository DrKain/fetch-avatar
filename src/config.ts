// These providers require an API key or token to function
export type TProviders = 'discord' | 'spotify';

class Config {
    private store: { [key: string]: string } = {};

    /**
     * Store an API key or token for use in fetch-avatar
     * @param key Provider Name
     * @param value API Key or token
     */
    public set(key: TProviders, value: any) {
        this.store[key] = value;
    }

    /**
     * Get an API Key or token for the desired provider
     * @param key Provider Name
     * @returns string
     */
    public get(key: TProviders) {
        return this.store[key] || null;
    }
}

export const config = new Config();
