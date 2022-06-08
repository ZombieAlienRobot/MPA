<script context="module" lang="ts">
	import { itemsInCart, cartContents, priceTotal } from './stores/cart';
	import type { CartItem, Shoe } from 'src/types/types';
</script>

<script lang="ts">

	export let cartItems = $cartContents;
	let priceSum = 0;
	cartItems.forEach((element) => {
		priceSum += element.shoe.price;
	});
	priceTotal.set(priceSum)

	function emptyCart() {
		cartContents.empyCart()
	}

</script>

<main>
	<table>
		<tr>
			<th />
			<th>Artikel</th>
			<th>Menge</th>
			<th>Artikelpreis</th>
            <th>Summe Artikel</th>
		</tr>

		{#each cartItems as item}
			<tr>
				<td class="cartImage"><img src="/shoes/{item.shoe.img}" alt="running shoe" /></td>
				<td class="itemName"><b>{item.shoe.shoeName}, {item.size}</b></td>
				<td class="itemQuantity">{item.amount}</td>
				<td class="itemPrice">{item.shoe.price}</td>
                <td class="sumItem">{item.shoe.price * item.amount}</td>
			</tr>
		{/each}
	</table>
    <h3>Summe ({$itemsInCart} Artikel) {priceSum}€</h3>
    <a href="/orderPage"><button on:click={emptyCart}>Bestellung aufgeben</button></a>
</main>

<style>
    table {
        margin-top: 2rem;
        border-spacing: 0;
    }

    th {
        background-color: lightgrey;
        padding: 0.3rem;
    }
    .cartImage {
        padding: 1rem;
        width: 120px;
    }
    .itemName {
        width: 200px;
        text-align: center;
    }

    .itemQuantity {
        text-align: center;
        width: 100px;
    }

    .itemPrice {
        text-align: center;
        width: 100px;
    }

    .sumItem {
        text-align: center;
    }

    img {
        width: 100px;
		object-fit: contain;
	}

    button {
		background-color: navy;
		border: white 1px solid;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		font-size: 16px;
		margin-top: 1rem;
		cursor: pointer;
	}
</style>
