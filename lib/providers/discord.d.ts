declare type DiscordSizes = '16' | '32' | '64 ' | '128' | '256' | '512' | '1024' | '2048' | '4096';
export declare const discord: (id: string, size?: DiscordSizes) => Promise<null | string>;
export {};
