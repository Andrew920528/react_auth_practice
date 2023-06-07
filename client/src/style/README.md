# Style Guide
This is the style guide I developed for the Smart Toilet React GUI project. Following this style guide allows for easier maintainence and consitent coding style. This guideline is meant to be flexible and adaptable. 

## Table of Contents
[Context](#context)
[Architecture](#architecture)
- [Abstract](#abstract)
- [Base](#base)
[Documenting Code](#documenting-code)
[Change Log](#change-log)

## Context
The project uses the Material UI framework for some of its components. However, to minimize overhead and maintainence issues, basic components are built with plain jsx + scss (some components are also written prior to the implementation of MUI, which does not make sense to re-write them with MUI components).

## Architecture
I adopted the 7-1 pattern outlined in [the sass guide](https://sass-guidelin.es/#the-7-1-pattern) with some of my own modifications.
```
style/
|
|– abstracts/
|   |– _variables.scss    # Sass Variables
|   |– _mixins.scss       # Sass Mixins
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography rules
|
|– components/
|   |– _buttons.scss      # Buttons
|   …                     # Etc.
|
|– layout/
|   |– _grid.scss         # Grid system
|   …                     # Etc.
|
|– pages/
|   |– _main.scss         # Home specific styles
|   …                     # Etc.
|
|– themes/
|   |– _theme.scss        # Default theme
|   |– _admin.scss        # Admin theme
|   …                     # Etc.
|
|– vendors_extensions/
|
`– main.scss              # Main Sass file
```

