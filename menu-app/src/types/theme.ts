export type BrandPalette = {
  dominant: string
  swatches: string[]
}

export type MenuThemeColors = {
  background: string
  itemText: string
  ingredientText: string
  accent: string
}

export type RestaurantTheme = {
  brand: BrandPalette
  menu: MenuThemeColors
  source: string
  updatedAt: string
}

export type LogoThemeResponse = {
  logoComplete: boolean
  logoUrl: string
  /** Optional original CDN asset before display recolor */
  originalLogoUrl?: string
  uploadStatus: string
  palette: BrandPalette
  theme: RestaurantTheme
  paletteExtracted: boolean
}

export type MenuItem = {
  id: string
  name: string
  ingredients: string[]
  price: string
  allergens: string[]
}

export type MenuCategory = {
  id: string
  title: string
  items: MenuItem[]
}

export const ALLERGEN_OPTIONS = [
  'Gluten',
  'Milk',
  'Egg',
  'Fish',
  'Crustaceans',
  'Nuts',
  'Soya',
  'Sulphites',
] as const

export type AllergenOption = (typeof ALLERGEN_OPTIONS)[number]
