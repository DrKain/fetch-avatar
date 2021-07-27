export declare type TProviders = 'discord' | 'spotify';
declare class Config {
    private store;
    /**
     * Store an API key or token for use in fetch-avatar
     * @param key Provider Name
     * @param value API Key or token
     */
    set(key: TProviders, value: any): void;
    /**
     * Get an API Key or token for the desired provider
     * @param key Provider Name
     * @returns string
     */
    get(key: TProviders): string | null;
}
export declare const config: Config;
export {};
