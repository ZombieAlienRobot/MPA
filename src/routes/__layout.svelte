<script context="module" lang="ts">
    import { itemsInCart} from "./stores/cart"
    export async function load({ fetch }) {
		const response = await fetch(`/api/cart`);

		return {
			status: response.status,
			props: {
				items: response.ok && (await response.json())
			}
		};
	}
</script>

<script lang="ts">
    export let items;
    $: totalAmount = items.totalAmount;
</script>

<nav>
    <a href=".">HOME</a>
    <a href="/cart" class="cart">Warenkorb {totalAmount} </a>
</nav>


<slot />

<style>
    nav {
        padding: 1rem;
        box-shadow: -1px 1px 11px 4px #898989;
    }
    a {
        text-decoration: none;
        color: gray;
        margin-right: 1rem;
    }


</style>