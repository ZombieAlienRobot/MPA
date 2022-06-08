export type Shoe = {
    shoeName: string;
    price: number;
    shoesize: number[];
    description: string;
    img: String;
};

export type CartItem = {
    shoe: Shoe,
    amount: number,
    size: number
}