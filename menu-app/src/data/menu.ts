import type { MenuCategory } from '../types/theme'

export const restaurantName = 'The Foresters'
export const restaurantTagline = 'Open kitchen grill'

export const menuCategories: MenuCategory[] = [
  {
    id: 'starters',
    title: 'Starter & Bites',
    items: [
      {
        id: 's1',
        name: 'Woodland Mushroom Soup',
        ingredients: ['Wild mushrooms', 'Thyme cream', 'Toasted sourdough'],
        price: '£8.50',
        allergens: ['Gluten', 'Milk'],
      },
      {
        id: 's2',
        name: 'Smoked Trout Pâté',
        ingredients: [
          'Smoked trout',
          'Horseradish crème fraîche',
          'Pickled cucumber',
          'Rye crisps',
        ],
        price: '£9.50',
        allergens: ['Fish', 'Milk', 'Gluten'],
      },
      {
        id: 's3',
        name: 'Charred Asparagus',
        ingredients: ['Asparagus', 'Soft egg', 'Brown butter crumbs', 'Lemon zest'],
        price: '£8.00',
        allergens: ['Egg', 'Milk', 'Gluten'],
      },
      {
        id: 's4',
        name: 'Garden Leaf Salad',
        ingredients: ['Mixed leaves', 'Apple', 'Walnut oil', 'Cider vinaigrette'],
        price: '£7.50',
        allergens: ['Nuts', 'Sulphites'],
      },
    ],
  },
  {
    id: 'mains',
    title: 'Main Course',
    items: [
      {
        id: 'm1',
        name: 'Foresters Grill Steak',
        ingredients: [
          'Dry-aged sirloin',
          'Bone marrow butter',
          'Watercress',
          'House fries',
        ],
        price: '£28.00',
        allergens: ['Milk'],
      },
      {
        id: 'm2',
        name: 'Herb-Crusted Lamb',
        ingredients: [
          'Lamb rump',
          'Rosemary jus',
          'Crushed new potatoes',
          'Seasonal greens',
        ],
        price: '£24.50',
        allergens: ['Gluten', 'Sulphites'],
      },
      {
        id: 'm3',
        name: 'Pan-Roasted Sea Bass',
        ingredients: ['Sea bass', 'Fennel purée', 'Brown shrimp butter', 'Samphire'],
        price: '£22.00',
        allergens: ['Fish', 'Crustaceans', 'Milk'],
      },
      {
        id: 'm4',
        name: 'Forest Mushroom Risotto',
        ingredients: ['Arborio rice', 'Aged parmesan', 'Truffle oil', 'Chives'],
        price: '£16.50',
        allergens: ['Milk'],
      },
    ],
  },
  {
    id: 'hot-beverages',
    title: 'Hot Beverages',
    items: [
      {
        id: 'hb1',
        name: 'Foresters Hot Chocolate',
        ingredients: ['Dark chocolate', 'Steamed milk', 'Whipped cream'],
        price: '£4.20',
        allergens: ['Milk', 'Soya'],
      },
      {
        id: 'hb2',
        name: 'Spiced Forest Tea',
        ingredients: ['Black tea', 'Cinnamon', 'Orange peel', 'Honey'],
        price: '£3.50',
        allergens: [],
      },
      {
        id: 'hb3',
        name: 'Flat White',
        ingredients: ['Espresso', 'Steamed milk'],
        price: '£3.80',
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
        ingredients: [
          'Dark chocolate',
          'Molten centre',
          'Salted caramel ice cream',
        ],
        price: '£8.50',
        allergens: ['Egg', 'Milk', 'Gluten', 'Soya'],
      },
      {
        id: 'd2',
        name: 'Apple & Blackberry Crumble',
        ingredients: ['Apple', 'Blackberry', 'Oat topping', 'Vanilla custard'],
        price: '£7.50',
        allergens: ['Gluten', 'Milk'],
      },
      {
        id: 'd3',
        name: 'Honey Panna Cotta',
        ingredients: ['Cream', 'Local blossom honey', 'Roasted hazelnuts'],
        price: '£7.00',
        allergens: ['Milk', 'Nuts'],
      },
    ],
  },
]
