import { avatar, config } from './src';
import * as dotenv from 'dotenv';

dotenv.config();

config.set('discord', process.env.DISCORD_TOKEN);
config.set('spotify', process.env.SPOTIFY_TOKEN);

// avatar.deviantart('username').then(console.log);
// avatar.discord('306861289609887755').then(console.log);
// avatar.furaffinity('username').then(console.log);
// avatar.github('DrKain').then(console.log);
// avatar.gitlab('ksir').then(console.log);
// avatar.gravatar('username@outlook.com').then(console.log);
// avatar.lastfm('KainSir').then(console.log);
// avatar.trakt('kainsir').then(console.log);
// avatar.spotify('hpox7s5zt397lu11zh3uk5dbv').then(console.log);
avatar.steam('76561198073300219').then(console.log);
