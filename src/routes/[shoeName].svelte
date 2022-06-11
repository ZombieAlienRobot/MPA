<script context="module" lang="ts">
	import type { CartItem, Shoe } from 'src/types/types';

	export async function load({ fetch, params }) {
		const { shoeName } = params;
		const response = await fetch(`/api/${shoeName}`);

		return {
			status: response.status,
			props: {
				shoe: response.ok && (await response.json())
			}
		};
	}
</script>

<script lang="ts">
	export let shoe: Shoe;
	let amounts = [1, 2, 3, 4, 5];
	let selectedAmount = 1;
	let selectedShoeSize = shoe.shoesize[0];

	/* async function addToCart() {
		let selectedCartItem: CartItem = { shoe, amount: 0, size: 0 };
		selectedCartItem.amount = selectedAmount;
		selectedCartItem.size = selectedShoeSize;
		const submit = await fetch(`/api/cart`, {
			method: 'POST',
			body: JSON.stringify(selectedCartItem)
		});
	} */
</script>

<main>
	<div class="container">
		<div class="showcase">
			<img src="/shoes/{shoe.img}" alt="running shoe" />
		</div>
		<div class="productinfo">
			<h2>{shoe.shoeName}</h2>
			<h3>{shoe.price} €</h3>
			<form 
			action="api/cart"
			method="post"
			>
				<input type="hidden" name="shoe" value={JSON.stringify(shoe)}>
				<div class="select">
					<label for="sizeSelect">Größe</label>
					<select bind:value={selectedShoeSize} id="sizeSelect" name="sizeSelect">
						{#each shoe.shoesize as shoeSize}
							<option value={shoeSize}>
								{shoeSize}
							</option>
						{/each}
					</select>
				</div>
				<div>
					<label for="amountSelect">Anzahl</label>
					<select bind:value={selectedAmount} id="amountSelect" name="amountSelect">
						{#each amounts as amount}
							<option value={amount}>
								{amount}
							</option>
						{/each}
					</select>
				</div>
				<button type="submit">Zum Warenkorb hinzufügen</button>
			</form>
		</div>
	</div>
	<div class="productdescription">
		<h3>Beschreibung</h3>
		<p>{shoe.description}</p>
	</div>
</main>

<style>
	.container {
		margin-top: 2rem;
		margin-left: 25%;
		display: inline-flex;
	}

	.showcase {
		margin-right: 2em;
		border: 1px solid lightgray;
	}

	.productinfo form {
		padding-bottom: 1em;
	}
	.productinfo {
		display: inline-block;
	}

	.productdescription {
		margin-left: 25%;
		margin-top: 1rem;
		border-top: 2px solid grey;
		max-width: 50%;
	}

	img {
		width: 25rem;
		object-fit: contain;
	}

	select {
		margin: 0.3rem;
		text-align: center;
		width: 5rem;
		height: 2rem;
		cursor: pointer;
	}

	label {
		display: inline-block;
		width: 3rem;
		font-weight: bold;
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
