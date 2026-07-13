import type { LogoThemeResponse } from '../types/theme'

/** Theme payload returned after logo upload + palette extraction */
export const themeResponse: LogoThemeResponse = {
  logoComplete: true,
  /** Display asset: CDN logo recolored for dark menu backgrounds */
  logoUrl: '/logo.png',
  /** Original uploaded logo from the API */
  originalLogoUrl:
    'https://allergeninfo.lon1.cdn.digitaloceanspaces.com/restaurants/4/logo.png',
  uploadStatus: 'uploaded',
  palette: {
    dominant: '#1f3822',
    swatches: [
      '#1f3822',
      '#24462f',
      '#20422b',
      '#193a1d',
      '#20422b',
      '#20422b',
    ],
  },
  theme: {
    brand: {
      dominant: '#1f3822',
      swatches: [
        '#1f3822',
        '#24462f',
        '#20422b',
        '#193a1d',
        '#20422b',
        '#20422b',
      ],
    },
    menu: {
      background: '#1f3822',
      itemText: '#FFFFFF',
      ingredientText: '#E0E0E0',
      accent: '#1f3822',
    },
    source: 'logo',
    updatedAt: '2026-07-13T07:51:20.391Z',
  },
  paletteExtracted: true,
}
