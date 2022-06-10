<script context="module" lang="ts">
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
	export const priceSum = items.persistSum;
</script>

<main>
	<h1>Vielen Dank für die Bestellung!</h1>

	<p>Gesamter Bestellwert: {priceSum}€</p>
</main>

<style>
	main {
		text-align: center;
		align-content: center;
	}
</style>
