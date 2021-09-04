import { styled } from '@stitchesConfig'

export const Flex = styled('div', {
  display: 'flex',
  variants: {
    wrap: {
      wrap: {
        flexWrap: 'wrap',
      },
      'no-wrap': {
        flexWrap: 'nowrap',
      },
      'wrap-reverse': {
        flexWrap: 'wrap-reverse',
      },
    },
    flow: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
      },
      'column-reverse': {
        flexDirection: 'column-reverse',
      },
    },
    main: {
      start: {
        justifyContent: 'start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      stretch: {
        justifyContent: 'stretch',
      },
      'space-between': {
        justifyContent: 'space-between',
      },
    },
    cross: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
    gap: {
      none: {
        gap: 0,
      },
      sm: {
        gap: '$xxsm',
      },
      md: {
        gap: 'xsm',
      },
      lg: {
        gap: '$md',
      },
    },
  },
})
