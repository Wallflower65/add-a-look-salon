export const STYLISTS = {
  Siba: { name: 'Siba', phone: '27810966434' },
  Melz: { name: 'Melz', phone: '27684628614' }
};

export const SALON_SERVICES = [
  {
    id: 'installation',
    title: 'Hair Installation',
    type: 'weave',
    items: [
      { name: 'Installation', price: 450, duration: '2h 30m', img: '/installation.jpg' },
      { name: 'Weave Wash', price: 150, duration: '1h', img: '/wwash.jpg' },
      { name: 'Treatment', price: 200, duration: '45m', img: '/wtreatment.jpg' },
      { name: 'iPondo', price: 250, duration: '1h 30m', img: '/iphondo.jpg' }
    ]
  },
  {
    id: 'dreadlocks',
    title: 'Dreadlocks Services',
    type: 'locs',
    items: [
      { name: 'Dreadlocks styles', price: 350, duration: '2h', img: '/dstyles.jpg' },
      { name: 'Dreadlocks wash', price: 120, duration: '45m', img: '/wash.jpeg' },
      { name: 'Dreadlocks treatment', price: 180, duration: '1h', img: '/dtreatment.jpeg' },
      { name: 'Dreadlocks extension', price: 1200, duration: '5h', img: '/dextension.jpeg' }
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
    image: item.img,
    description: `Professional premium ${item.name.toLowerCase()} service tailored perfectly at ADD-A-LOOK parlour.`
  }))
);