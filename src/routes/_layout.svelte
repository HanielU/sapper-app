<script>
	import Nav from "../components/Nav.svelte";
	import { store } from "../components/store.js";
	export let segment;

	let navOpen;
	let navWidth = 0;

	// destructuring the store data into their respective names
	// wont work if the store property names don't match the names used for destructuring
	$: store.subscribe(({ open, width }) => {
		navOpen = open;
		navWidth = width === 247 ? width : 247;
	});
</script>

<div class="wrapper" class:notloggedin={segment === undefined}>
	<Nav {segment} />

	<main class:open={navOpen} style="--nav-width: {navWidth}px">
		<slot />
	</main>
</div>

<style lang="scss">
	.wrapper {
		height: 100%;
		width: 100%;
		position: relative;
		display: grid;
		grid-template-columns: minmax(200px, 0.22fr) 1fr;

		&.notloggedin {
			display: block;
		}
	}

	main {
		height: 100vh;
		width: 100%;
		background: #f7f6fb;
		overflow: hidden;
	}

	@media screen and (max-width: 1124px) {
		.wrapper {
			display: block;
		}

		main {
			transition: 0.45s;
			z-index: 2;

			&.open {
				border-radius: var(--advanced-radius);
				transform: translateX(var(--nav-width));
			}
		}
	}

	// handles overlapping nav animation
	@media screen and (max-width: 728px) {
		main.open {
			transform: translateX(calc(var(--nav-width) - 15px)) scale(0.9);
		}
	}
</style>
