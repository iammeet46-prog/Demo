import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import type { LogoThemeResponse, MenuCategory } from '../types/theme'
import './MenuScreen.css'

type MenuScreenProps = {
  themeData: LogoThemeResponse
  restaurantName: string
  categories: MenuCategory[]
}

const ease = [0.22, 1, 0.36, 1] as const

export function MenuScreen({
  themeData,
  restaurantName,
  categories,
}: MenuScreenProps) {
  const { menu, brand } = themeData.theme
  const canopy = brand.swatches[1] ?? '#24462f'
  const deepShade = brand.swatches[3] ?? '#193a1d'

  const cssVars = {
    '--menu-bg': menu.background,
    '--menu-item': menu.itemText,
    '--menu-ingredient': menu.ingredientText,
    '--menu-accent': menu.accent,
    '--menu-canopy': canopy,
    '--menu-deep': deepShade,
  } as CSSProperties

  let staggerIndex = 0

  return (
    <div className="menu-screen" style={cssVars}>
      <div className="menu-screen__atmosphere" aria-hidden="true" />

      <header className="menu-hero">
        <motion.img
          className="menu-hero__logo"
          src={themeData.logoUrl}
          alt={`${restaurantName} logo`}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease }}
        />
        <motion.h1 className="menu-hero__brand visually-hidden">
          {restaurantName}
        </motion.h1>
        <motion.p
          className="menu-hero__tagline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease }}
        >
          Seasonally inspired · Open kitchen grill
        </motion.p>
        <motion.div
          className="menu-hero__rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
        />
      </header>

      <main className="menu-body">
        {categories.map((category) => (
          <section
            key={category.id}
            className="menu-section"
            aria-labelledby={`category-${category.id}`}
          >
            <motion.h2
              id={`category-${category.id}`}
              className="menu-section__title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.25 + staggerIndex++ * 0.04,
                ease,
              }}
            >
              {category.title}
            </motion.h2>

            <ul className="menu-list">
              {category.items.map((item) => {
                const delay = 0.3 + staggerIndex++ * 0.05
                return (
                  <motion.li
                    key={item.id}
                    className="menu-item"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay, ease }}
                  >
                    <div className="menu-item__row">
                      <h3 className="menu-item__name">{item.name}</h3>
                      <span className="menu-item__dots" aria-hidden="true" />
                      <span className="menu-item__price">{item.price}</span>
                    </div>
                    <p className="menu-item__description">{item.description}</p>
                    {item.allergens && item.allergens.length > 0 && (
                      <p className="menu-item__allergens">
                        Contains: {item.allergens.join(' · ')}
                      </p>
                    )}
                  </motion.li>
                )
              })}
            </ul>
          </section>
        ))}
      </main>

      <footer className="menu-footer">
        <p>Please inform your server of any allergies.</p>
        <p className="menu-footer__source">
          Colours from logo · Updated{' '}
          {new Date(themeData.theme.updatedAt).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      </footer>
    </div>
  )
}
