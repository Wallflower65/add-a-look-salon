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
        description: 'A classic precision retwist using premium molding gel to lock down clean roots, paired with a neat, professional style of your choice.',
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
        description: 'Expertly twisting your hair utilising premium wool extensions or protective Brazilian wraps for an ultra-clean, stylish, and long-lasting textured protective look.',
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
        description: 'A highly precise maintenance session using an ultra-fine crochet needle to seamlessly draw in stray hairs and instantly tighten your dreadlocks right from the roots.',
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
        description: 'Extend your hair seamlessly using premium, previously used 100% natural dreadlock extensions for instant length, realistic thickness, and a beautifully matured appearance.',
        images: ['/extension-1.jpg', '/extension-2.jpg', '/extension-3.jpg'] 
      },
      { 
        name: 'Hair color', 
        price: 400, 
        duration: '2h', 
        description: 'A safe, high-end lifting and bleaching treatment designed to cleanly lighten your locs as the foundational first step to achieving vibrant custom color expressions.',
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
        description: 'Begin your dreadlock journey instantly using the advanced interlocking crochet technique for immediate, solid loc structures that bypass the loose unraveling phase.',
        images: ['/crochet-start-1.jpg', '/crochet-start-2.jpg'] 
      },
      { 
        name: 'Wax Start', 
        price: 300, 
        duration: '2h', 
        description: 'Kickstart clean, uniform dreadlocks using professional molding gel paired with neat parting splits to establish healthy, structured cultivation patterns.',
        images: ['/wax-start.jpg'] 
      },
      { 
        name: 'Dye Only (Black)', 
        price: 300, 
        duration: '1h 15m', 
        description: 'A rich, deep black conditioning dye treatment designed to safely restore uniform color, eliminate dullness, and add a striking obsidian shine to your locs.',
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
    description: item.description
  }))
);