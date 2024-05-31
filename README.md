# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Your challenge is to build out this recipe page and get it looking as close to the design as possible.

### Screenshot

![](./screenshot.jpg)

### Links

- [GitHub Repo](https://github.com/ffrosch/frontendmentor-recipe-page)
- [Live Site](https://ffrosch.github.io/frontendmentor-recipe-page/)

## My process

## Tech Stack

This exercise uses `Vite`, `react`, `typescript`, `vanilla-extract` and a custom deployment workflow on Github Pages.

### Installation

```shell
# install in current directory
npm create vite@latest . -- --template react-ts
npm install @vanilla-extract/css
npm install --save-dev @vanilla-extract/vite-plugin
```

### Configuration

Set the `base` key for deployment with Github Pages custom workflow.
Add the `vanilla-extract` plugin to the `plugins` array.
Further configuration options are available in the [Vite docs | Configuration Reference](https://vanilla-extract.style/documentation/integrations/vite/), but shouldn't be necessary.

`vite.config.js`

```js
/* ... other imports ...*/
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  base: '/frontendmentor-recipe-page/',
  plugins: [react(), vanillaExtractPlugin()],
});
```

Configure Github Pages custom workflow according to the [Vite docs | Github Pages deployment](https://vitejs.dev/guide/static-deploy#github-pages).

### Built with

- Semantic HTML5 markup
- Flexbox
- Grid
- Mobile-first workflow
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Vanilla Extract](https://vanilla-extract.style/)

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log('🎉');
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I really liked the approach with build-time CSS-in-JS.
Additionally, Vanilla Extract enforced a lot of constraints that seem cumbersome at first but will make your code more maintainable in the long run (hopefully).
The consistent usage of theme tokens and the TypeScript alerts whenever I changed something were super helpful and made writing atomic CSS so much fun!

Looks like I will stick with this tech stack for now.
For my next projects I want to try out [`classnames`](https://www.npmjs.com/package/classnames), [`open-props`](https://open-props.style/) and [`polished`](https://polished.js.org/).

Additionally I would like to read [Writing Performant CSS With vanilla-extract](https://www.lekoarts.de/javascript/writing-performant-css-with-vanilla-extract/) which also gives an example on using `vanilla-extract` with `open-props`, as well as [The Future of Web Development: Vanilla Extract CSS](https://www.dhiwise.com/post/the-future-of-web-development-vanilla-extract-css) and [CSS in TypeScript with vanilla-extract](https://css-tricks.com/css-in-typescript-with-vanilla-extract/).

### Useful resources

**Note: This article is a bit dated (2021-08)**: A super good and exhaustive overview over CSS-in-JS can be found in [A thorough analysis of CSS-in-TS](https://github.com/andreipfeiffer/css-in-js/blob/main/README.md).
It compares solutions that support Server Side Rendering and TypeScript.
The baseline reference for comparison is a CSS Modules approach.
Last important aspect is type-safety with full TypeScript support.

The disadvantages of runtime CSS-in-JS:

- [Why we are breaking up with CSS-in-JS](https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b) - increases bundle size, runtime overhead and clutters react dev tools; frequent css updates cause the whole react tree to re-render; with SSR and other component libraries there is a lot that can go wrong

The advantages of CSS-in-JS in general:

1. Styles are locally-scoped.
1. Styles are colocated with the components they apply to.
1. You can use JavaScript variables in styles.

The advantages of compile-time CSS-in-JS:

- [Douges.dev | Change how you write your CSS-in-JS for better performance](https://douges.dev/blog/taming-the-beast-that-is-css-in-js) - Clean and typed CSS code; correct usage of `styles` prop for dynamic styling
- [Avoiding dynamic CSS-in-JS styles in React](https://nickb.dev/blog/avoid-dynamic-css-in-js-styles-in-react/) - Tailwind, CSS Modules and dynamic inline styling

1. Usage of theme tokens.
1. Usage of CSS variables.
1. Little runtime overhead; best way to style dynamic attributes is to use the `style` prop.

The specific advantages of `Vanilla Extract`:

- Typescript support: IntelliSense and autocomplete, alerts for unused styles
- Atomic CSS: Strict separation of styles, nesting of selectors is discouraged / not possible

Possible stylesheet + dynamic inline styling solutions:

- CSS Modules
- CSS-in-JS compiled at build time like [Vanilla Extract](https://vanilla-extract.style/), [Linaria](https://linaria.dev/)
- Atomic / utility CSS like [Tailwind CSS](https://tailwindcss.com/)

## Author

- Website - [florianfrosch.de](https://florianfrosch.de/)
- Frontend Mentor - [@ffrosch](https://www.frontendmentor.io/profile/ffrosch)
- Stackoverflow - [ffrosch](https://stackoverflow.com/users/9152905/ffrosch)
- Leetcode - [ffrosch](https://leetcode.com/u/ffrosch/)

## Acknowledgments

Here are the articles and solutions that helped me during the challenge:

- [Kilterset | Styling with Vanilla Extract](https://www.kilterset.com/blog/styling-with-vanilla-extract) - This gave me a good basic understanding of how to use themes and globalStyle
- [Nearform Commerce | Theming a React Application with Vanilla Extract](https://commerce.nearform.com/blog/2021/vanilla-extract) - How to use themes and theme tokens
