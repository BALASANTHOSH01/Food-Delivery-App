import grill_Chicken from './images/grill_chicken.jpg'; //MostlyOrdered
import curd_Rice from './images/curd_rice.jpg';
import Burger from './images/burger.jpg';
import cuision from './images/cuision_special.jpg';


import samosa from '../Assets/images/samosa.jpg';
import sandwich from '../Assets/images/sandwich.jpg';
import Chicken_puffs from '../Assets/images/chicken_puffs.jpg';
import ponda from '../Assets/images/ponda_vadai.jpg';

export const mostlyordered = [
    {
        id:41,
        name:"Tasty herbal burger",
        image:Burger ,
        category:"mostly-ordered",
        old_price:500 ,
        new_price:499 ,
    },
    {
        id:42,
        name:"Grill chicken & sauce",
        image:grill_Chicken ,
        category:"mostly-ordered",
        old_price:599 ,
        new_price:899 ,
    },
    {
        id:43,
        name:"curd rice with pickle",
        image:curd_Rice ,
        category:"mostly-ordered",
        old_price:299 ,
        new_price:300 ,
    },
    {
        id:44,
        name:"North indians special cuision",
        image:cuision ,
        category:"mostly-ordered",
        old_price:450 ,
        new_price:550 ,
    },
];

export const dataset_kerala=[
    {
        id:45,
        name:"samosa with tomato sauce",
        image:samosa ,
        category:"Snacks",
        old_price:199 ,
        new_price:250 ,
    },
    {
        id:46,
        name:"chicken sandwich with sauce",
        image: sandwich,
        category:"Snacks",
        old_price:299 ,
        new_price: 199,
    },
    {
        id:47,
        name:"Bonda & coconut chutney",
        image:ponda ,
        category:"Snacks",
        old_price: 99,
        new_price: 200,
    },
    {
        id:48,
        name:"Family pack chicken puffs",
        image:Chicken_puffs ,
        category:"Snacks",
        old_price: 400,
        new_price: 499,
    },
    
];
