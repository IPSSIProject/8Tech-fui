import souris from '../assets/souris.jpg';
import clavier from '../assets/clavier.jpg';
import display from '../assets/ecran.jpg';
import casque from '../assets/corsair.png';
import gpu from '../assets/carte-graphique.jpg';
import cpu from '../assets/i9.jpg';

export const productList = [
    {
        id: 'azesd25',
        name: 'Processeur Intel i9',
        category_id: '2',
        subcategory_id: '15',
        brand: 'Intel',
        price: '1052',
        promotion: false,
        image: cpu,
    },
    {
        id: 'gqe488',
        name: 'Carte graphique RTX',
        category_id: '2',
        subcategory_id: '15',
        brand: 'Asus',
        price: '850',
        promotion: true,
        image: gpu,
    },
    {
        id: 'fdsac45',
        name: 'Casque sans fil',
        category_id: '3',
        subcategory_id: '15',
        brand: 'Corsair',
        price: '180',
        promotion: false,
        image: casque,
    },
    {
        id: 'fetjh85',
        name: 'Ecran incurvé',
        category_id: '3',
        subcategory_id: '15',
        brand: 'NaN',
        price: '370',
        promotion: false,
        image: display,
    },
    {
        id: 'luyu45',
        name: 'Clavier mécanique sans fil',
        category_id: '3',
        subcategory_id: '15',
        brand: 'Roccat',
        price: '235',
        promotion: true,
        image: clavier,
    },
    {
        id: 'rrths',
        name: 'Souris sans fil gamer',
        category_id: '3',
        subcategory_id: '15',
        brand: 'Logitech',
        price: '150',
        promotion: false,
        image: souris,
    },
];

export const apiCategoryList = [
    {
        id: '2',
        name: 'Composants',
    },
    {
        id: '3',
        name: 'Périphériques',
    },
];

export const categoryList = [
    {
        value: '2',
        label: 'Composants',
    },
    {
        value: '3',
        label: 'Périphériques',
    }
]