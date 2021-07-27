# Fetch-Avatar

Fetch avatars from various websites using usernames, IDs or emails.

[![NPM](https://img.shields.io/npm/v/fetch-avatar)](https://www.npmjs.com/package/fetch-avatar) [![NPM](https://img.shields.io/npm/dt/fetch-avatar)](https://www.npmjs.com/package/fetch-avatar) [![NPM](https://img.shields.io/npm/types/fetch-avatar)](https://www.npmjs.com/package/fetch-avatar)

### Install

```
npm install fetch-avatar
```

### Usage:

For most providers you can simply pass a username or email.  
If the user has an avatar you'll receive a URL, otherwise the response will be `null`

```ts
import { avatar } from 'fetch-avatar';

avatar.github('DrKain').then(console.log);
// https://avatars.githubusercontent.com/u/5300315
```

### API Keys:

Some providers will require an API to function. I've tried to avoid this best I can but sometimes it's unavoidable.
When a provider requires an API Key or token, simple set it in the config:

```js
import { avatar, config } from 'fetch-avatar';

// Set token
config.set('discord', 'Your bot token here');

// Ready to go
avatar.discord('306861289609887755').then(console.log);
```

#### Supported:

-   [x] [DeviantArt](https://www.deviantart.com/)
-   [x] [Discord](https://discord.com/) - Token Required
-   [x] [FurAffinity](https://www.furaffinity.net/)
-   [x] [GitHub](https://github.com/)
-   [x] [GitLab](https://about.gitlab.com/)
-   [x] [Gravatar](https://en.gravatar.com/)
-   [x] [Last.FM](https://www.last.fm/)
-   [x] [Spotify](https://open.spotify.com) - Token Required
-   [x] [Trakt.tv](https://trakt.tv)

#### Planned:

-   [ ] [Youtube](https://youtube.com)
-   [ ] [Pixiv](https://www.pixiv.net/en/)
-   [ ] [Artstation](https://www.artstation.com/)
<!---    [ ] []() -->
