import type { Shoe } from "src/types/types";

export const shoes: Shoe[] = [
    {
        shoeName: 'BlueBolt',
        price: 104.95,
        shoesize: [
            42, 43,44
        ],
        description:
            'Sei schnell wie der Blitz mit BlueBolt!',
        img: 'blue/blue.jpg'
    },
    {
        shoeName: 'GreenGait',
        price: 84.99,
        shoesize: [
            42, 43,44
        ],
        description:
            'Für jeden der die Natur liebt, Green Gait!',
        img: 'green/green.jpg'
    },
    {
        shoeName: 'OceanOctave',
        price: 99.95,
        shoesize: [
            42, 43,44
        ],
        description:
            'Rennen am Strand mit OceanOctave!',
        img: 'greenblue/greenblue.jpg'
    },
    {
        shoeName: 'OrangeOpportunity',
        price: 73.81,
        shoesize: [
            42, 43,44
        ],
        description:
            'Nutze jede Gelegenheit mit OrangeOpportunity!',
        img: 'orange/orange.png'
    },
    {
        shoeName: 'ThunderingTornado',
        price: 63.63,
        shoesize: [
            42, 43,44
        ],
        description:
            'Renne jedem Sturm davon mit ThunderingTornado!',
        img: 'orangeblue/orangeblue.jpg'
    },
    {
        shoeName: 'PinkPassion',
        price: 74.99,
        shoesize: [
            42, 43,44
        ],
        description:
            'Zeige deine Leidenschaft mit PinkPassion!',
        img: 'pink/pink.jpg'
    },
    {
        shoeName: 'RedRider',
        price: 124.95,
        shoesize: [
            42, 43,44
        ],
        description:
            'Schneller als jedes Pferd, RedRider!',
        img: 'red/red.jpg'
    },
    {
        shoeName: 'SilverSpeeder',
        price: 99.95,
        shoesize: [
            42, 43,44
        ],
        description:
            'Durchbrich die Schallmauer mit SilverSpeeder!',
        img: 'silver/silver.jpg'
    },
    {
        shoeName: 'SnowSlider',
        price: 60.00,
        shoesize: [
            42, 43,44
        ],
        description:
            'Gleite durch den Schnee mit SnowSpeeder!',
        img: 'white/white.jpg'
    },
];

export async function get() {
    return {
        body: shoes
    }
    
}