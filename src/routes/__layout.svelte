<script lang="ts">
    import { itemsInCart} from "./stores/cart"
</script>

<nav>
    <a href=".">HOME</a>
    <a href="/cart" class="cart">Warenkorb {$itemsInCart} </a>
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