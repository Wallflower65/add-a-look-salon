// Weave installation images
import installationImg from '../assets/installation.jpg';
import washImg from '../assets/wwash.jpg';
import treatmentImg from '../assets/wtreatment.jpg';
import ipondoImg from '../assets/iphondo.jpg'; // <-- CHANGE THIS FROM .jpeg TO .jpg

// Dreadlocks images - Check these extensions carefully against your sidebar!
import locStylesImg from '../assets/dstyles.jpg';       // CHANGE FROM .jpeg TO .jpg
import locWashImg from '../assets/dwash.jpg';           // Keeps .jpg
import locTreatmentImg from '../assets/dtreatment.jpeg'; // Keeps .jpeg
import locExtensionImg from '../assets/dextension.jpeg'; // Keeps .jpeg

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
      { name: 'Dreadlocks styles', price: 350, duration: '2h', img: locStylesImg },
      { name: 'Dreadlocks wash', price: 120, duration: '45m', img: locWashImg },
      { name: 'Dreadlocks treatment', price: 180, duration: '1h', img: locTreatmentImg },
      { name: 'Dreadlocks extension', price: 1200, duration: '5h', img: locExtensionImg }
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