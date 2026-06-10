export const STYLISTS = {
  Siba: {
    name: 'Siba',
    phone: '27810966434'
  },
  Melz: {
    name: 'Melz',
    phone: '27684628614'
  }
};

export const SALON_SERVICES = [
  {
    id: 'installation',
    title: 'Hair Installation',
    type: 'weave',
    items: [
      { name: 'Installation', price: 450, duration: '2h 30m', img: 'https://images.unsplash.com/photo-1605497746445-97d1b0a9e844?auto=format&fit=crop&q=80&w=600' },
      { name: 'Weave Wash', price: 150, duration: '1h', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600' },
      { name: 'Treatment', price: 200, duration: '45m', img: 'https://images.unsplash.com/photo-1620331702296-1280042181f0?auto=format&fit=crop&q=80&w=600' },
      { name: 'iPondo', price: 250, duration: '1h 30m', img: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  {
    id: 'dreadlocks',
    title: 'Dreadlocks Services',
    type: 'locs',
    items: [
      { name: 'Dreadlocks styles', price: 350, duration: '2h', img: 'https://images.unsplash.com/photo-1567894192231-d22d9c134990?auto=format&fit=crop&q=80&w=600' },
      { name: 'Dreadlocks wash', price: 120, duration: '45m', img: 'https://images.unsplash.com/photo-1601814933824-fd0b574dd592?auto=format&fit=crop&q=80&w=600' },
      { name: 'Dreadlocks treatment', price: 180, duration: '1h', img: 'https://images.unsplash.com/photo-1595959183075-c1d09e77b34b?auto=format&fit=crop&q=80&w=600' },
      { name: 'Dreadlocks extension', price: 1200, duration: '5h', img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600' }
    ]
  }
];

// Dynamically flatten the services to build the lookbook catalog array automatically
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