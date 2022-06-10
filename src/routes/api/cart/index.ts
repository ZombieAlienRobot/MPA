import type { CartItem } from "src/types/types";

export let cart = new Array<CartItem>();

export async function get() {
    return {
        body: {
            cartItems: cart,
            itemsInCart: cart.length
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

    return {
        body: cart
    }

}

export async function del() {
    cart.splice(0, cart.length);
    

    return {
        body: cart
    }
}