import { createStitches } from '@stitches/react'
import { globalPreflightStyles } from '../styles/global'

import {
  mauve,
  mauveDark,
  blackA,
  whiteA,
  blue,
  blueDark,
} from '@radix-ui/colors'

const { styled, css, theme, createTheme, getCssText, globalCss, keyframes } =
  createStitches({
    theme: {
      colors: {
        ...mauve,
        ...blackA,
        ...whiteA,
        ...blue,
      },

      space: {
        1: '0.125rem', //2px
        2: '0.25rem', //4px
        3: '0.5rem', //8px
        4: '0.75rem', //12px
        5: '1rem', //16px
        6: '1.25rem', //20px
        7: '1.75rem', //28px
        8: '2.25rem', //36px
        9: '3rem', //48px
        10: '4.5rem', //72px
      },

      fonts: {
        mono: 'Fira Code',
        Inter: 'Inter',
      },

      fontSizes: {
        1: '0.75rem', //12px
        2: '0.875rem', // 14px
        3: '1rem', // 16px
        4: '1.25rem', //20px
        5: '1.5rem', //24px
        6: '2.25rem', //36px
        7: '3rem', //48px
        8: '4.5rem', //72px
      },

      radii: {
        sm: '0.125rem', // 2px
        md: '0.25rem', // 4px
        lg: '0.5rem', // 8px
        xl: '1rem', // 16px
        round: '50%',
        pill: '9999px',
      },

      letterSpacings: {
        dense: '-0.015em',
        normal: 'normal',
        loose: '0.075em',
        looser: '0.09em',
      },

      lineHeights: {
        dense: '1.4',
        normal: '1.8',
        loose: '2.2',
      },

      shadows: {
        xSm: '',
        sm: '',
        md: '',
        lg: '',
        xLg: '',
      },

      zIndices: {
        drawer: '700',
        dialog: '800',
        dropDown: '900',
        alertGroup: '950',
        tooltip: '1000',
      },
    },

    media: {
      bp1: `(min-width: 520px)`,
      bp2: `(min-width: 900px)`,
      bp3: `(min-width: 1200px)`,
      bp4: `(min-width: 1580px)`,
      motion: `(prefers-reduced-motion)`,
      hover: `(hover: hover)`,
      dark: `(prefers-color-scheme: dark)`,
      light: `(prefers-color-scheme: light)`,
    },

    utils: {
      size: (value: number | string) => ({
        width: value,
        height: value,
      }),
      linearGradient: (value: number | string) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),
      br: (value: number | string) => ({
        borderRadius: value,
      }),
    },
  })

const DarkTheme = createTheme('dark', {
  colors: {
    ...mauveDark,
    ...blueDark,
  },
})

const GlobalStyles = globalCss({
  ...globalPreflightStyles,
  '@dark': {
    // notice the `media` definition on the stitches.config.ts file
    ':root:not(.light)': {
      //@ts-ignore
      ...Object.keys(DarkTheme.colors).reduce((varSet, currentColorKey) => {
        //@ts-ignore
        const currentColor = DarkTheme.colors[currentColorKey]
        const currentColorValue =
          currentColor.value.substring(0, 1) === '$'
            ? `$colors${currentColor.value}`
            : currentColor.value

        return {
          [currentColor.variable]: currentColorValue,
          ...varSet,
        }
      }, {}),
    },
  },
})

export { styled, css, theme, DarkTheme, getCssText, GlobalStyles, keyframes }
