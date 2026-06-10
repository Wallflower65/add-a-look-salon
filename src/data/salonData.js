// 1. Import your local images with the exact matching extensions from your sidebar
import installationImg from '../assets/installation.jpg'; // This one is .jpg in your sidebar
import washImg from '../assets/wwash.jpg';                // This one is .jpg in your sidebar
import treatmentImg from '../assets/wtreatment.jpg';      // This one is .jpg in your sidebar
import ipondoImg from '../assets/iphondo.jpeg';           // CHANGED TO .jpeg to match your sidebar exactly!

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
      { name: 'Installation', price: 450, duration: '2h 30m', img: installationImg },
      { name: 'Weave Wash', price: 150, duration: '1h', img: washImg },
      { name: 'Treatment', price: 200, duration: '45m', img: treatmentImg },
      { name: 'iPondo', price: 250, duration: '1h 30m', img: ipondoImg }
    ]
  },
  {
    id: 'dreadlocks',
    title: 'Dreadlocks Services',
    type: 'locs',
    items: [
      { name: 'Dreadlocks styles', price: 350, duration: '2h', img: 'https://i.pinimg.com/564x/af/91/60/af91607030590390d5374fd4c55ec397.jpg' },
      { name: 'Dreadlocks wash', price: 120, duration: '45m', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxuqqw0cD-3kIwUbAiFOKQnOwDRYGpCSH7AQ&s' },
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