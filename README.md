# pprmint.art with Next.JS and MUI

## Setup

`npm install yarn` because yarn is cool.

`yarn install` to get a fuckton of packages.

`yarn run dev` to look at the site on localhost:3000.

## Why are you doing this to yourself?

Yes.

But actually because I wanna:
- [ ] debloat the site and redesign it[^1],
- [X] use server-side rendering[^2],
- [ ] simplify creating new pages[^3],
- [ ] add individual OpenGraph metadata for every page[^4].

[^1]: Currently, the site lags a ton when opened on low-end hardware, probably due to the abundance of animations.

[^2]: That should allow users to open the site even without JavaScript being enabled on their end.

[^3]: On my current site, I need to add imports and routes manually every time I add a new page. I had to create [a separate file just for routing](https://github.com/pprmint/pprmint.art/blob/main/src/AnimatedRoutes.tsx) because it was a mess to have it all in the [App.tsx](https://github.com/pprmint/pprmint.art/blob/main/src/App.tsx) instead. I also want to especially make it a bit easier for me to create new Works pages with their respective images and translations.

[^4]: Right now, the same embed is displayed when you share any page of my main site. But I want to display the actual graphic behind a link and tweak some other small details when you visit a page, like a special favicon for [Mintcraft](https://pprmint.art/mintcraft) for example.