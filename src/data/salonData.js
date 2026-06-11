export const SALON_SERVICES = [
  {
    id: 'styling-maintenance',
    title: 'Styling & Maintenance',
    type: 'maintenance',
    items: [
      { 
        name: 'Wax & style', 
        price: 300, 
        duration: '1h 45m', 
        images: [
          '/styles-1.jpg', 
          '/styles-2.jpg', 
          '/styles-3.jpg', 
          '/styles-4.jpg', 
          '/styles-5.jpg', 
          '/styles-6.jpg', 
          '/styles-7.jpg', 
          '/styles-8.jpg', 
          '/styles-9.jpg'
        ] 
      },
      { 
        name: 'Woolen/Brazilian twist', 
        price: 600, 
        duration: '3h', 
        images: [
          '/brazilian-twist-1.jpg', 
          '/brazilian-twist-2.jpg', 
          '/brazilian-twist-3.jpg', 
          '/brazilian-twist-4.jpg'
        ] 
      },
      { 
        name: 'Crochet', 
        price: 350, 
        duration: '1h 30m', 
        images: ['/crochet-1.jpg', '/crochet-2.jpg'] 
      }
    ]
  },
  {
    id: 'extensions-color',
    title: 'Extensions & Chemical Work',
    type: 'chemical',
    items: [
      { 
        name: 'Extensions', 
        price: 1200, 
        duration: '5h', 
        images: ['/extension-1.jpg', '/extension-2.jpg', '/extension-3.jpg'] 
      },
      { 
        name: 'Hair color', 
        price: 400, 
        duration: '2h', 
        images: ['/hair-color-1.jpg', '/hair-color-2.jpg', '/hair-color-3.jpg', '/hair-color-4.jpg'] 
      }
    ]
  },
  {
    id: 'starter-options',
    title: 'Starter Services & Coloring',
    type: 'starters',
    items: [
      { 
        name: 'Crochet Start', 
        price: 300, 
        duration: '2h 30m', 
        images: ['/crochet-start-1.jpg', '/crochet-start-2.jpg'] 
      },
      { 
        name: 'Wax Start', 
        price: 300, 
        duration: '2h', 
        images: ['/wax-start.jpg'] 
      },
      { 
        name: 'Dye Only (Black)', 
        price: 300, 
        duration: '1h 15m', 
        images: ['/black-dye.jpeg', '/black-dye-2.jpeg'] 
      }
    ]
  }
];

export const LOOKBOOK_ITEMS = SALON_SERVICES.flatMap(category => 
  category.items.map((item, idx) => ({
    id: `${category.id}-${idx}`,
    title: item.name,
    category: category.type,
    price: item.price,
    duration: item.duration,
    images: item.images,
    description: `Premium professional ${item.name.toLowerCase()} session tailored for healthy dreadlock care at ADD-A-LOOK.`
  }))
);