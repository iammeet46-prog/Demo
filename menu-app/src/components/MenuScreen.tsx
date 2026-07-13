import { useMemo, useState, type CSSProperties } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ALLERGEN_OPTIONS,
  type LogoThemeResponse,
  type MenuCategory,
  type MenuItem,
} from '../types/theme'
import './MenuScreen.css'

type MenuScreenProps = {
  themeData: LogoThemeResponse
  restaurantName: string
  restaurantTagline: string
  categories: MenuCategory[]
}

const ease = [0.22, 1, 0.36, 1] as const

function isSuitable(item: MenuItem, selectedAllergens: string[]) {
  if (selectedAllergens.length === 0) return true
  return !item.allergens.some((allergen) => selectedAllergens.includes(allergen))
}

function FilterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M7 12h10M10 17h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="9" cy="7" r="1.6" fill="currentColor" />
      <circle cx="15" cy="12" r="1.6" fill="currentColor" />
      <circle cx="12" cy="17" r="1.6" fill="currentColor" />
    </svg>
  )
}

function FunnelIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 5h16l-6.2 7.2V19l-3.6 2v-8.8L4 5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16.5 16.5 20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function SuitableIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m8.5 12.2 2.3 2.3 4.7-4.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WarningIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4.5 21 20H3L12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 10v4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="17.2" r="1" fill="currentColor" />
    </svg>
  )
}

export function MenuScreen({
  themeData,
  restaurantName,
  restaurantTagline,
  categories,
}: MenuScreenProps) {
  const { menu, brand } = themeData.theme
  const canopy = brand.swatches[1] ?? '#24462f'
  const deepShade = brand.swatches[3] ?? '#193a1d'

  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? '')
  const [search, setSearch] = useState('')
  const [allergyPanelOpen, setAllergyPanelOpen] = useState(false)
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([])

  const cssVars = {
    '--menu-bg': menu.background,
    '--menu-item': menu.itemText,
    '--menu-ingredient': menu.ingredientText,
    '--menu-accent': menu.accent,
    '--menu-canopy': canopy,
    '--menu-deep': deepShade,
    '--menu-highlight': '#9fbf9a',
    '--menu-card': colorMixSafe(canopy, menu.background),
  } as CSSProperties

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ?? categories[0]

  const filteredItems = useMemo(() => {
    if (!activeCategory) return []
    const query = search.trim().toLowerCase()
    return activeCategory.items.filter((item) => {
      if (!query) return true
      const haystack = [item.name, ...item.ingredients, ...item.allergens]
        .join(' ')
        .toLowerCase()
      return haystack.includes(query)
    })
  }, [activeCategory, search])

  function toggleAllergen(allergen: string) {
    setSelectedAllergens((current) =>
      current.includes(allergen)
        ? current.filter((value) => value !== allergen)
        : [...current, allergen],
    )
  }

  return (
    <div className="menu-app" style={cssVars}>
      <div className="menu-app__shell">
        <header className="menu-top">
          <div className="menu-brand">
            <img
              className="menu-brand__logo"
              src={themeData.logoUrl}
              alt={`${restaurantName} logo`}
            />
            <div className="menu-brand__copy">
              <p className="menu-brand__name">{restaurantName}</p>
              <p className="menu-brand__tagline">{restaurantTagline}</p>
            </div>
          </div>

          <button
            type="button"
            className={`allergy-filter-btn${allergyPanelOpen ? ' is-open' : ''}${
              selectedAllergens.length > 0 ? ' has-filters' : ''
            }`}
            onClick={() => setAllergyPanelOpen((open) => !open)}
            aria-expanded={allergyPanelOpen}
          >
            <FunnelIcon />
            <span>Allergy Filter</span>
            {selectedAllergens.length > 0 && (
              <span className="allergy-filter-btn__count">{selectedAllergens.length}</span>
            )}
          </button>
        </header>

        <AnimatePresence>
          {allergyPanelOpen && (
            <motion.div
              className="allergy-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease }}
            >
              <div className="allergy-panel__inner">
                <p className="allergy-panel__label">Filter out dishes containing</p>
                <div className="allergy-panel__chips">
                  {ALLERGEN_OPTIONS.map((allergen) => {
                    const active = selectedAllergens.includes(allergen)
                    return (
                      <button
                        key={allergen}
                        type="button"
                        className={`allergy-chip${active ? ' is-active' : ''}`}
                        onClick={() => toggleAllergen(allergen)}
                        aria-pressed={active}
                      >
                        {allergen}
                      </button>
                    )
                  })}
                </div>
                {selectedAllergens.length > 0 && (
                  <button
                    type="button"
                    className="allergy-panel__clear"
                    onClick={() => setSelectedAllergens([])}
                  >
                    Clear filters
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <label className="menu-search">
          <SearchIcon />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search dish or ingredients.."
            aria-label="Search dish or ingredients"
          />
        </label>

        <div className="menu-tabs-row">
          <button type="button" className="menu-tabs-row__filter" aria-label="Category filters">
            <FilterIcon />
          </button>
          <nav className="menu-tabs" aria-label="Menu categories">
            {categories.map((category) => {
              const active = category.id === activeCategory?.id
              return (
                <button
                  key={category.id}
                  type="button"
                  className={`menu-tab${active ? ' is-active' : ''}`}
                  onClick={() => setActiveCategoryId(category.id)}
                  aria-pressed={active}
                >
                  {category.title}
                </button>
              )
            })}
          </nav>
        </div>

        <main className="menu-content">
          <h2 className="menu-content__title">{activeCategory?.title}</h2>

          <ul className="menu-cards">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const suitable = isSuitable(item, selectedAllergens)
                return (
                  <motion.li
                    key={item.id}
                    className="menu-card"
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, delay: index * 0.04, ease }}
                  >
                    <div className="menu-card__header">
                      <h3 className="menu-card__name">{item.name}</h3>
                      <span
                        className={`suitability-badge${
                          suitable ? ' is-suitable' : ' is-unsuitable'
                        }`}
                      >
                        {suitable ? <SuitableIcon /> : <WarningIcon />}
                        {suitable ? 'Suitable' : 'Not Suitable'}
                      </span>
                    </div>
                    <p className="menu-card__ingredients">
                      <span className="menu-card__ingredients-label">Ingredient :</span>{' '}
                      {item.ingredients.join(', ')}
                    </p>
                  </motion.li>
                )
              })}
            </AnimatePresence>
          </ul>

          {filteredItems.length === 0 && (
            <p className="menu-empty">No dishes match your search or filters.</p>
          )}
        </main>
      </div>
    </div>
  )
}

/** Slightly lift canopy over the page background for card surfaces */
function colorMixSafe(canopy: string, background: string) {
  return `color-mix(in srgb, ${canopy} 72%, ${background})`
}
