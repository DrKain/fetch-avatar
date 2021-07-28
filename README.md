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
When a provider requires an API key. Please visit the GitHub [wiki](https://github.com/DrKain/fetch-avatar/wiki) to see how to use these. Each provider that requires an API key or token has their own page showing how to get one.

### Default Avatars

This package will attempt to detect and remove default avatars from providers. If a default avatar is detected the response will be `null`.

#### Supported:

-   [x] [DeviantArt](https://www.deviantart.com/)
-   [x] [Discord](https://discord.com/) - [Token Required](https://github.com/DrKain/fetch-avatar/wiki/Discord#bot-token)
-   [x] [FurAffinity](https://www.furaffinity.net/)
-   [x] [GitHub](https://github.com/)
-   [x] [GitLab](https://about.gitlab.com/)
-   [x] [Gravatar](https://en.gravatar.com/)
-   [x] [Last.FM](https://www.last.fm/)
-   [x] [NPM](https://www.npmjs.com)
-   [x] [Spotify](https://open.spotify.com) - [Token Required](https://github.com/DrKain/fetch-avatar/wiki/Spotify#oauth-token)
-   [x] [Steam](https://steamcommunity.com)
-   [x] [Trakt.tv](https://trakt.tv)

#### Planned:

-   [ ] [Youtube](https://youtube.com)
-   [ ] [Pixiv](https://www.pixiv.net/en/)
-   [ ] [Artstation](https://www.artstation.com/)
<!---    [ ] []() -->
