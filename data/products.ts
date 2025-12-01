export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: string
  benefits?: string[]
  nutritionInfo?: {
    purity: string
    origin: string
    shelfLife: string
  }
  batchNumber?: string
  usageSuggestions?: string[]
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Raw Forest Honey 500 g',
    price: 450,
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500&fit=crop&q=80',
    description: 'Pure, unprocessed forest honey collected from wild beehives. Rich in natural enzymes and antioxidants.',
    category: 'Honey',
    benefits: [
      '100% raw and unprocessed',
      'No preservatives or additives',
      'Rich in antioxidants',
      'Natural antibacterial properties',
      'Sourced from wild forest beehives'
    ],
    nutritionInfo: {
      purity: '100% Pure',
      origin: 'Wild Forest',
      shelfLife: '2 years'
    },
    batchNumber: 'A102',
    usageSuggestions: [
      'Add to warm water with lemon for morning detox',
      'Use as natural sweetener in tea and beverages',
      'Apply on toast or roti for breakfast',
      'Mix with turmeric for immunity boost'
    ],
  },
  {
    id: '2',
    name: 'Desi Cow Ghee 1 kg',
    price: 850,
    image: 'https://images.unsplash.com/photo-1603561596112-0d4c87e7e16a?w=500&h=500&fit=crop&q=80',
    description: 'Traditional desi cow ghee made using age-old methods. Pure, golden, and aromatic.',
    category: 'Ghee',
    benefits: [
      'Made from desi cow milk',
      'Traditional bilona method',
      'Rich in healthy fats',
      'High smoke point for cooking',
      'Aids digestion and immunity'
    ],
    nutritionInfo: {
      purity: '100% Pure',
      origin: 'Desi Cow Milk',
      shelfLife: '1 year'
    },
    batchNumber: 'B205',
    usageSuggestions: [
      'Use for traditional Indian cooking',
      'Add to dal and sabzi for rich flavor',
      'Apply on roti or paratha',
      'Use in Ayurvedic preparations'
    ],
  },
  {
    id: '3',
    name: 'Organic Honey 1 kg',
    price: 750,
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500&fit=crop&q=80',
    description: 'Certified organic honey from pesticide-free farms. Pure, natural, and sustainably sourced.',
    category: 'Honey',
    benefits: [
      'Certified organic',
      'No pesticides or chemicals',
      'Sustainably sourced',
      'Rich in vitamins and minerals',
      'Supports local beekeepers'
    ],
    nutritionInfo: {
      purity: '100% Organic',
      origin: 'Organic Farms',
      shelfLife: '2 years'
    },
    batchNumber: 'C301',
    usageSuggestions: [
      'Daily consumption for health benefits',
      'Natural energy booster',
      'Skin and hair care applications',
      'Culinary uses in desserts and beverages'
    ],
  },
  {
    id: '4',
    name: 'Herbal Honey 500 g',
    price: 550,
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500&fit=crop&q=80',
    description: 'Honey infused with natural herbs. Enhanced with tulsi, ginger, and other medicinal herbs.',
    category: 'Honey',
    benefits: [
      'Infused with natural herbs',
      'Tulsi and ginger extracts',
      'Boosts immunity naturally',
      'Soothes throat and cough',
      'Traditional Ayurvedic blend'
    ],
    nutritionInfo: {
      purity: '100% Natural',
      origin: 'Herbal Infusion',
      shelfLife: '18 months'
    },
    batchNumber: 'D408',
    usageSuggestions: [
      'Consume during cold and cough',
      'Take with warm water before bed',
      'Use as natural cough syrup',
      'Add to herbal teas'
    ],
  },
  {
    id: '5',
    name: 'Natural Jaggery 1 kg',
    price: 180,
    image: 'https://images.unsplash.com/photo-1603561596112-0d4c87e7e16a?w=500&h=500&fit=crop&q=80',
    description: 'Pure, unrefined jaggery made from organic sugarcane. Rich in iron and minerals.',
    category: 'Sweeteners',
    benefits: [
      'Unrefined and natural',
      'Rich in iron and minerals',
      'No chemical processing',
      'Better than white sugar',
      'Sustains energy levels'
    ],
    nutritionInfo: {
      purity: '100% Natural',
      origin: 'Organic Sugarcane',
      shelfLife: '1 year'
    },
    batchNumber: 'E512',
    usageSuggestions: [
      'Use as natural sweetener in tea',
      'Add to traditional Indian sweets',
      'Consume with ghee for energy',
      'Use in baking and cooking'
    ],
  },
  {
    id: '6',
    name: 'Spice Mix – Naturally Roasted',
    price: 320,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=500&fit=crop&q=80',
    description: 'Handcrafted spice blend with naturally roasted spices. No artificial flavors or preservatives.',
    category: 'Spices',
    benefits: [
      'Naturally roasted spices',
      'No artificial flavors',
      'Handcrafted blend',
      'Rich in antioxidants',
      'Enhances flavor naturally'
    ],
    nutritionInfo: {
      purity: '100% Natural',
      origin: 'Handcrafted Blend',
      shelfLife: '6 months'
    },
    batchNumber: 'F616',
    usageSuggestions: [
      'Use in curries and gravies',
      'Add to rice dishes',
      'Season vegetables and dals',
      'Marinate vegetables and tofu'
    ],
  },
  {
    id: '7',
    name: 'Organic Eggs (12 pcs)',
    price: 120,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&h=500&fit=crop&q=80',
    description: 'Fresh organic eggs from free-range hens. Rich in protein and essential nutrients.',
    category: 'Eggs',
    benefits: [
      'Free-range organic eggs',
      'Rich in protein and omega-3',
      'No antibiotics or hormones',
      'Fresh from farm daily',
      'High in vitamins and minerals'
    ],
    nutritionInfo: {
      purity: '100% Organic',
      origin: 'Free-Range Farm',
      shelfLife: '2 weeks'
    },
    batchNumber: 'G720',
    usageSuggestions: [
      'Perfect for breakfast omelettes',
      'Use in baking and cooking',
      'Boiled eggs for protein boost',
      'Scrambled eggs with vegetables'
    ],
  },
  {
    id: '8',
    name: 'Toor Dal (Pigeon Peas) 1 kg',
    price: 150,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=500&fit=crop&q=80',
    description: 'Organic toor dal, rich in protein and fiber. Perfect for traditional Indian dals and curries.',
    category: 'Pulses',
    benefits: [
      '100% organic and natural',
      'High in protein and fiber',
      'No pesticides or chemicals',
      'Rich in iron and folate',
      'Supports heart health'
    ],
    nutritionInfo: {
      purity: '100% Organic',
      origin: 'Organic Farms',
      shelfLife: '1 year'
    },
    batchNumber: 'H825',
    usageSuggestions: [
      'Traditional toor dal curry',
      'Sambar preparation',
      'Dal tadka and dal fry',
      'Protein-rich meal option'
    ],
  },
  {
    id: '9',
    name: 'Moong Dal (Split Green Gram) 1 kg',
    price: 140,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=500&fit=crop&q=80',
    description: 'Organic moong dal, easy to digest and packed with nutrients. Light and nutritious.',
    category: 'Pulses',
    benefits: [
      'Easy to digest',
      'High protein content',
      'Low in calories',
      'Rich in fiber and vitamins',
      'Perfect for weight management'
    ],
    nutritionInfo: {
      purity: '100% Organic',
      origin: 'Organic Farms',
      shelfLife: '1 year'
    },
    batchNumber: 'I930',
    usageSuggestions: [
      'Moong dal khichdi',
      'Dal fry and dal tadka',
      'Moong dal halwa',
      'Light and healthy meals'
    ],
  },
  {
    id: '10',
    name: 'Chana Dal (Split Bengal Gram) 1 kg',
    price: 160,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=500&fit=crop&q=80',
    description: 'Organic chana dal, rich and nutty flavor. High in protein and essential minerals.',
    category: 'Pulses',
    benefits: [
      'High protein content',
      'Rich in fiber',
      'Good source of iron',
      'Supports muscle health',
      'Keeps you full longer'
    ],
    nutritionInfo: {
      purity: '100% Organic',
      origin: 'Organic Farms',
      shelfLife: '1 year'
    },
    batchNumber: 'J1035',
    usageSuggestions: [
      'Chana dal curry',
      'Dal tadka preparation',
      'Chana dal halwa',
      'Protein-rich vegetarian meals'
    ],
  },
  {
    id: '11',
    name: 'Masoor Dal (Red Lentils) 1 kg',
    price: 130,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=500&fit=crop&q=80',
    description: 'Organic masoor dal, cooks quickly and is rich in protein. Perfect for everyday meals.',
    category: 'Pulses',
    benefits: [
      'Quick cooking time',
      'High protein and fiber',
      'Rich in iron and folate',
      'Supports digestive health',
      'Heart-healthy option'
    ],
    nutritionInfo: {
      purity: '100% Organic',
      origin: 'Organic Farms',
      shelfLife: '1 year'
    },
    batchNumber: 'K1140',
    usageSuggestions: [
      'Masoor dal curry',
      'Dal tadka and dal fry',
      'Quick weekday meals',
      'Nutritious soup preparation'
    ],
  },
  {
    id: '12',
    name: 'Urad Dal (Black Gram) 1 kg',
    price: 170,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=500&fit=crop&q=80',
    description: 'Organic urad dal, creamy and rich. Essential for traditional Indian dishes like dal makhani.',
    category: 'Pulses',
    benefits: [
      'Creamy texture',
      'High protein content',
      'Rich in calcium and iron',
      'Supports bone health',
      'Traditional Indian staple'
    ],
    nutritionInfo: {
      purity: '100% Organic',
      origin: 'Organic Farms',
      shelfLife: '1 year'
    },
    batchNumber: 'L1245',
    usageSuggestions: [
      'Dal makhani preparation',
      'Urad dal curry',
      'Idli and dosa batter',
      'Traditional North Indian dishes'
    ],
  },
  {
    id: '13',
    name: 'Rajma (Kidney Beans) 1 kg',
    price: 180,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=500&fit=crop&q=80',
    description: 'Organic kidney beans, large and flavorful. Perfect for rajma curry and salads.',
    category: 'Pulses',
    benefits: [
      'High protein content',
      'Rich in fiber',
      'Good source of iron',
      'Supports heart health',
      'Keeps blood sugar stable'
    ],
    nutritionInfo: {
      purity: '100% Organic',
      origin: 'Organic Farms',
      shelfLife: '1 year'
    },
    batchNumber: 'M1350',
    usageSuggestions: [
      'Rajma curry with rice',
      'Kidney bean salad',
      'Protein-rich meals',
      'Traditional Punjabi dishes'
    ],
  },
  {
    id: '14',
    name: 'Chickpeas (Kabuli Chana) 1 kg',
    price: 160,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=500&fit=crop&q=80',
    description: 'Organic chickpeas, versatile and nutritious. Perfect for chole, hummus, and salads.',
    category: 'Pulses',
    benefits: [
      'High protein and fiber',
      'Rich in vitamins and minerals',
      'Supports weight management',
      'Good for heart health',
      'Versatile cooking ingredient'
    ],
    nutritionInfo: {
      purity: '100% Organic',
      origin: 'Organic Farms',
      shelfLife: '1 year'
    },
    batchNumber: 'N1455',
    usageSuggestions: [
      'Chole (chickpea curry)',
      'Hummus preparation',
      'Chickpea salad',
      'Roasted chickpeas snack'
    ],
  },
  {
    id: '15',
    name: 'Organic Eggs (30 pcs)',
    price: 280,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&h=500&fit=crop&q=80',
    description: 'Fresh organic eggs from free-range hens. Family pack with premium quality assurance.',
    category: 'Eggs',
    benefits: [
      'Free-range organic eggs',
      'Rich in protein and omega-3',
      'No antibiotics or hormones',
      'Fresh from farm daily',
      'Family pack - great value'
    ],
    nutritionInfo: {
      purity: '100% Organic',
      origin: 'Free-Range Farm',
      shelfLife: '2 weeks'
    },
    batchNumber: 'O1560',
    usageSuggestions: [
      'Perfect for family breakfast',
      'Baking and cooking',
      'Protein-rich meals',
      'Daily nutrition boost'
    ],
  },
]
