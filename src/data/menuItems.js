import keralaBeefFry from '../../img/kerala_beef_fry.png';
import parippuVada from '../../img/parippu_vada.png';
import chicken65 from '../../img/chicken_65.png';
import appamStew from '../../img/appam_with_stew.png';
import fishCurry from '../../img/kerala_fish_curry.png';
import malabarBiryani from '../../img/malabar_biryani.png';
import puttuKadala from '../../img/puttu_and_kadala.png';
import adaPradhaman from '../../img/ada_pradhaman.png';
import paladaPayasam from '../../img/palada_payasam.png';
import karimeenPollichathu from '../../img/karimeen_pollichathu.png';

export const menuItems = [
    {
        id: 1,
        name: "Kerala Beef Fry",
        category: "Starters",
        price: 350,
        description: "Spicy beef stir-fried with coconut slices and curry leaves.",
        image: keralaBeefFry,
        isVegetarian: false
    },
    {
        id: 2,
        name: "Parippu Vada",
        category: "Starters",
        price: 120,
        description: "Crunchy lentil fritters served with coconut chutney.",
        image: parippuVada,
        isVegetarian: true
    },
    {
        id: 3,
        name: "Chicken 65",
        category: "Starters",
        price: 280,
        description: "Deep-fried spicy chicken marinated in ginger, lemon, and red chilies.",
        image: chicken65,
        isVegetarian: false
    },
    {
        id: 4,
        name: "Appam with Stew",
        category: "Mains",
        price: 220,
        description: "Soft rice hoppers served with a creamy vegetable stew.",
        image: appamStew,
        isVegetarian: true
    },
    {
        id: 5,
        name: "Kerala Fish Curry",
        category: "Mains",
        price: 450,
        description: "Spicy and tangy fish curry cooked with kudampuli (cocum) and coconut milk.",
        image: fishCurry,
        isVegetarian: false
    },
    {
        id: 6,
        name: "Malabar Biryani",
        category: "Mains",
        price: 380,
        description: "Aromatic rice layered with spiced chicken and garnished with fried onions.",
        image: malabarBiryani,
        isVegetarian: false
    },
    {
        id: 7,
        name: "Puttu and Kadala",
        category: "Mains",
        price: 180,
        description: "Steamed rice cakes served with spicy black chickpea curry.",
        image: puttuKadala,
        isVegetarian: true
    },
    {
        id: 8,
        name: "Ada Pradhaman",
        category: "Desserts",
        price: 150,
        description: "Traditional sweet pudding made with rice flakes, jaggery, and coconut milk.",
        image: adaPradhaman,
        isVegetarian: true
    },
    {
        id: 9,
        name: "Palada Payasam",
        category: "Desserts",
        price: 160,
        description: "Rich and creamy pink dessert made with rice ada and milk.",
        image: paladaPayasam,
        isVegetarian: true
    },
    {
        id: 10,
        name: "Karimeen Pollichathu",
        category: "Mains",
        price: 250,
        description: "Fresh Pearl Spot fish marinated and cooked in banana leaf.",
        image: karimeenPollichathu,
        isVegetarian: false
    }
];
