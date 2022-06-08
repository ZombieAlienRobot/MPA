import { writable } from "svelte/store";
import type { CartItem, Shoe } from "src/types/types";

export const itemsInCart = writable(0);

export const cartContents = createCartContents();

export const priceTotal = writable(0);

function createCartContents() {

    let cartItems = new Array<CartItem>()

    const { subscribe, set, update } = writable(cartItems)

    return {
        subscribe,
        addCartItem(cartItem: CartItem) {
            if (!cartItems.find(element => element.shoe.shoeName === cartItem.shoe.shoeName && element.size === cartItem.size)) {
                cartItems.push(cartItem)
            } else {
                this.increaseAmount(cartItem.amount, cartItem)
            }

        },
        removeCartItem(cartItem: CartItem) {
            let index = cartItems.findIndex(element => element.shoe.shoeName === cartItem.shoe.shoeName && element.size === cartItem.size);
            cartItems.splice(index, 1, cartItem)
        },
        increaseAmount(amount: number, cartItem: CartItem) {
            let index = cartItems.findIndex(element => element.shoe.shoeName === cartItem.shoe.shoeName && element.size === cartItem.size);
            cartItems[index].amount += amount;
        },
        decreaseAmount(amount: number, cartItem: CartItem) {
            let index = cartItems.findIndex(element => element.shoe.shoeName === cartItem.shoe.shoeName && element.size === cartItem.size);
            cartItems[index].amount -= amount;
            if (cartItems[index].amount === 0) {
                this.removeCartItem(cartItem)
            }
        },
        empyCart() {
            cartItems.splice(0, cartItems.length);
            itemsInCart.set(0);
        },
    }

}
