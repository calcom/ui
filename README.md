[![backlight.dev](https://img.shields.io/badge/Open%20in-Backlight.dev%20editor-%23f8c307)](https://backlight.dev/review/U3bRwsh0qncQBY27uPGi)
[![Github Repo](https://img.shields.io/github/last-commit/divriots/starter-tailwindcss)](https://github.com/divriots/starter-tailwindcss)

# Tailwind CSS Tech Sample <br/><small>_by_ ‹div›RIOTS</small>

This is a _Technology Sample_ you can rely on to build your own Design System, based on React
and [Tailwind CSS](https://tailwindcss.com/).

**Disclaimer**: _Technology Samples_ aren't comprehensive _Design Systems_ but showcases a given technology so you free
to build you own solution upon it.

## Architecture

This _tech sample_ declares its **Design Tokens** using
the [Tailwind CSS Theme Config](https://tailwindcss.com/docs/configuration) syntax. Each component in your Design System
can exploit those theme specific tokens using the atomic classes exposed by Tailwind CSS.

To build its components, this _tech sample_ uses [Headless UI](https://headlessui.dev/)
and [React/JSX](https://reactjs.org/docs/introducing-jsx.html) with [TypeScript](https://www.typescriptlang.org/).
Components are then styled using Tailwind CSS atomic classes, according to Headless UI examples.

_Note_: The use of Headless UI is **not** mandatory and you can use any kind of framework allowing you to customize the
rendering process with CSS classes. Headless UI is built by [Tailwind Labs](https://github.com/tailwindlabs) whom also
provide _Tailwind CSS_.

### Tokens

The Tokens are split in different components:

- `typography`: fonts families
- `colors`: colors, variants, and helpers
- `borders`: borders and radius
- `opacity`: transparency values
- `shadows`: shadows effects
- `spacing`: relative and absolute spaces
- `z-index`: z-axe indexes

### Tailwind CSS Theme

All tokens are declared in the [Tailwind CSS Theme Config](https://tailwindcss.com/docs/configuration) syntax by
exporting them in dedicated objects, e.g.:

```ts
export const typography = {
  fontFamily: {
    code: ['Consolas', 'SFMono-Regular', 'Monaco', 'monospace'],
  },
  fontWeight: {
    custom: '600',
  },
};
```

Then all tokens definitions are merged in the `~/theme/` component to build the global Tailwind CSS `theme` definition.
This `theme.extend` is used in the `tailwind.config.js` file directly to setup all the classes and variants.

## Components

Components can exploit the Tailwind CSS atomic classes directly:

```jsx
<button
  className={`
    ${active ? 'bg-purple-500 text-white' : 'text-grey-900'}
    flex items-center w-full px-2 py-2
    group rounded-md
    text-sm
  `}
>
  Click Me!
</button>
}
```

## Stories

Stories are written in Storybook's [Component Story Format](https://backlight.dev/docs/component-story-format).
Components' stories are located in their `stories/` folder.

## Documentation

Documentation pages are decorated by a React layout using
the [@divriots/dockit-react](https://github.com/divriots/dockit-react) helpers. See the `mdx-layout` component.

### Pages

Each component embed its own documentation in its `doc/` folder. You can use any web format for your documentation but
we recommend you to write it with the [mdx](https://backlight.dev/docs/mdx) format, allowing you to embed your
components live in the documentation.

---

## Links

- [Tailwind CSS on Github](https://github.com/tailwindlabs/tailwindcss)
- [Headless UI on Github](https://github.com/tailwindlabs/headlessui)
