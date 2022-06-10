import type { CartItem } from "src/types/types";

export let cart = new Array<CartItem>();
export let totalAmount = 0;
export let priceSum = 0;
export let persistSum = 0;

export async function get() {

    updateValues();

    return {
        body: {
            cartItems: cart,
            totalAmount: totalAmount,
            priceSum: priceSum,
            persistSum: persistSum
        }
    }
}

export async function post({ request }) {
    const cartItem = await request.json();

    if (!cart.find(element => element.shoe.shoeName === cartItem.shoe.shoeName && element.size === cartItem.size)) {
        cart.push(cartItem)
    } else {
        let index = cart.findIndex(element => element.shoe.shoeName === cartItem.shoe.shoeName && element.size === cartItem.size);
        cart[index].amount += cartItem.amount;
    }

    updateValues()

    return {
        body: cart
    }

}

export async function del() {
    cart.splice(0, cart.length);
    totalAmount = 0;
    persistSum = priceSum;

    return {
        body: {
            cartItems: cart,
            totalAmount: totalAmount,
            priceSum: priceSum
        }
    }
}

function updateValues() {
    priceSum = 0;
    totalAmount = 0;
    cart.forEach((element) => {
		priceSum += element.shoe.price * element.amount;
        totalAmount += element.amount;
	});
}