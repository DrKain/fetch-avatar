import { avatar, config } from './lib';
import * as dotenv from 'dotenv';

dotenv.config();

config.set('discord', process.env.DISCORD_TOKEN);

// avatar.deviantart('username').then(console.log);
// avatar.discord('306861289609887755').then(console.log);
// avatar.furaffinity('username').then(console.log);
avatar.github('DrKain').then(console.log);
// avatar.gitlab('ksir').then(console.log);
// avatar.gravatar('username@outlook.com').then(console.log);
