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
      { name: 'Installation', price: 450, duration: '2h 30m', img: 'https://frohub.com/what-are-hair-weaves/' },
      { name: 'Weave Wash', price: 150, duration: '1h', img: 'https://www.youtube.com/watch?v=Kn4JSP_7O00' },
      { name: 'Treatment', price: 200, duration: '45m', img: 'https://www.volure.co.za/products/long-peruvian-weave?srsltid=AfmBOop8l3A2aFhs4waQQ4kV8G2h4nPxXaV3JDyptBiqeNxFQn4HqYHt' },
      { name: 'iPondo', price: 250, duration: '1h 30m', img: 'https://www.instagram.com/p/CKY0A6wAFZ4/' }
    ]
  },
  {
    id: 'dreadlocks',
    title: 'Dreadlocks Services',
    type: 'locs',
    items: [
      { name: 'Dreadlocks styles', price: 350, duration: '2h', img: 'https://i.pinimg.com/564x/af/91/60/af91607030590390d5374fd4c55ec397.jpg' },
      { name: 'Dreadlocks wash', price: 120, duration: '45m', img: 'https://www.reddit.com/r/Dreadlocks/comments/1iuaufq/how_often_do_you_shampoo_your_dreads/' },
      { name: 'Dreadlocks treatment', price: 180, duration: '1h', img: 'https://images.fresha.com/locations/location-profile-images/592246/5221122/14ac0c64-f954-42b5-9a2c-a1c52fbef59a.jpg?class=venue-gallery-mobile&f_width=3840' },
      { name: 'Dreadlocks extension', price: 1200, duration: '5h', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMm8PvNgXgRnH27-JFmXzZrl-q-s1TgfXSvA&s' }
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