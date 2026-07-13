import type { MenuCategory } from '../types/theme'

export const restaurantName = 'The Foresters'

export const menuCategories: MenuCategory[] = [
  {
    id: 'starters',
    title: 'Starters',
    items: [
      {
        id: 's1',
        name: 'Woodland Mushroom Soup',
        description: 'Wild mushrooms, thyme cream, toasted sourdough',
        price: '£8.50',
        allergens: ['Gluten', 'Milk'],
      },
      {
        id: 's2',
        name: 'Smoked Trout Pâté',
        description: 'Horseradish crème fraîche, pickled cucumber, rye crisps',
        price: '£9.50',
        allergens: ['Fish', 'Milk', 'Gluten'],
      },
      {
        id: 's3',
        name: 'Charred Asparagus',
        description: 'Soft egg, brown butter crumbs, lemon zest',
        price: '£8.00',
        allergens: ['Egg', 'Milk', 'Gluten'],
      },
    ],
  },
  {
    id: 'mains',
    title: 'Mains',
    items: [
      {
        id: 'm1',
        name: 'Foresters Grill Steak',
        description: '28-day dry-aged sirloin, bone marrow butter, watercress',
        price: '£28.00',
        allergens: ['Milk'],
      },
      {
        id: 'm2',
        name: 'Herb-Crusted Lamb',
        description: 'Rosemary jus, crushed new potatoes, seasonal greens',
        price: '£24.50',
        allergens: ['Gluten', 'Sulphites'],
      },
      {
        id: 'm3',
        name: 'Pan-Roasted Sea Bass',
        description: 'Fennel purée, brown shrimp butter, samphire',
        price: '£22.00',
        allergens: ['Fish', 'Crustaceans', 'Milk'],
      },
      {
        id: 'm4',
        name: 'Forest Mushroom Risotto',
        description: 'Arborio rice, aged parmesan, truffle oil, chives',
        price: '£16.50',
        allergens: ['Milk'],
      },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      {
        id: 'd1',
        name: 'Dark Chocolate Fondant',
        description: 'Molten centre, salted caramel ice cream',
        price: '£8.50',
        allergens: ['Egg', 'Milk', 'Gluten', 'Soya'],
      },
      {
        id: 'd2',
        name: 'Apple & Blackberry Crumble',
        description: 'Oat topping, vanilla custard',
        price: '£7.50',
        allergens: ['Gluten', 'Milk'],
      },
      {
        id: 'd3',
        name: 'Honey Panna Cotta',
        description: 'Local blossom honey, roasted hazelnuts',
        price: '£7.00',
        allergens: ['Milk', 'Nuts'],
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    items: [
      {
        id: 'dr1',
        name: 'House Red / White',
        description: 'Glass · Bottle available on request',
        price: '£6.50',
        allergens: ['Sulphites'],
      },
      {
        id: 'dr2',
        name: 'Foresters Ale',
        description: 'Local craft pale ale, citrus finish',
        price: '£5.20',
        allergens: ['Gluten'],
      },
      {
        id: 'dr3',
        name: 'Elderflower Spritz',
        description: 'Prosecco, elderflower, soda, fresh mint',
        price: '£7.50',
        allergens: ['Sulphites'],
      },
    ],
  },
]
