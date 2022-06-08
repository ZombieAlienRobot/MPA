<script lang="ts" context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api');

		if (res.ok) return { props: { shoes: await res.json() } };
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script lang="ts">
	import type { Shoe } from 'src/types/types';

	export let shoes: Shoe[];
</script>

<main>
	{#each shoes as {shoeName, img, price}}
		<a href={`/${shoeName}`} class="box">
			<img src="/shoes/{img}" alt="running shoe" />
			<h2>{shoeName} </h2>
            <h2>{price} €</h2>
		</a>
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.box {
        text-align: center;
		padding: 0.25rem;
		margin: 1.5rem;
		color: black;
        text-decoration: none;
		box-shadow: 4px 5px 11px 2px lightgray;
	}
	.box:hover {
		box-shadow: 4px 5px 11px 10px lightgray;
	}
	img {
		width: 15rem;
		object-fit: contain;
	}
</style>
