<script>
	import { createEventDispatcher } from "svelte";
	import { slide } from "svelte/transition";
	export let activeTab, tabNames, w;

	let open = false;
	const dispatch = createEventDispatcher();
	const toggleOpen = () => (open = !open);
	// takes tab: current tab item as an argument for dispatching
	function handleTabChange(tab) {
		dispatch("tabChange", tab);
	}
</script>

{#if w < 728}
	<!-- select wrapper -->
	<div class="tab-select-wrapper" on:click={toggleOpen}>
		<!-- main select -->
		<div class="tab-select" class:open>
			<!-- The trigger that is clciked and whose value is replaced -->
			<div class="tab-select__trigger">
				<span>{activeTab}</span>
				<div class="arrow">
					<img src="images/select-arrow.svg" alt="" />
				</div>
			</div>

			<!-- Options for the select -->
			{#if open}
				<div class="tab-options" transition:slide={{ duration: 450 }}>
					{#each tabNames as tab}
						<div
							class="tab-option"
							class:active={tab === activeTab}
							on:click={handleTabChange(tab)}
						>
							{tab}
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
{:else}
	<!-- when screen is larger than 728px -->
	<div class="tab-header">
		{#each tabNames as tab}
			<h3
				class:active={tab === activeTab}
				on:click={handleTabChange(tab)}
			>
				{tab}
			</h3>
		{/each}
	</div>
{/if}

<style lang="scss">
	.tab-header {
		width: 100%;
		display: flex;
		align-items: center;
		position: relative;
		padding: 20px 0;
	}

	h3 {
		font-size: var(--font-size-small);
		font-weight: var(--regular);
		border-radius: var(--little-radius);
		cursor: pointer;
		margin-right: 20px;
		padding: 12px 30px;
		height: fit-content;
		z-index: 2;

		// gets rid of annoying blue highlight color when clicked on mobile view
		-webkit-tap-highlight-color: transparent;

		&.active {
			background: #fff;
			box-shadow: var(--box-shadow);
		}
	}

	@media screen and (max-width: 728px) {
		.tab-select-wrapper {
			position: relative;
			user-select: none;
		}

		.tab-select__trigger,
		.tab-option {
			font-size: var(--font-size-small);
			font-weight: var(--regular);
			cursor: pointer;
			padding: 12px 30px;
			height: fit-content;
			z-index: 2;

			// gets rid of annoying blue highlight color when clicked on mobile view
			-webkit-tap-highlight-color: transparent;
		}

		.tab-select {
			position: relative;
			display: flex;
			flex-direction: column;

			&__trigger {
				display: flex;
				background: #fff;
				align-items: center;
				justify-content: space-between;
				font-weight: var(--semibold);
				border-radius: var(--little-radius);
				transition: all 550ms;
				border: 1px solid rgba(83, 89, 104, 1);
			}

			&.open &__trigger {
				transition: all 250ms;
				border-bottom-left-radius: 0px;
				border-bottom-right-radius: 0px;
			}
		}

		.tab-options {
			width: 100%;
			display: block;
			background: #fff;
			top: 100%;
			left: 0;
			padding: 10px 0;
			border: 1px solid rgba(83, 89, 104, 1);
			border-top: 0px;
			border-bottom-left-radius: var(--little-radius);
			border-bottom-right-radius: var(--little-radius);
		}

		.tab-option.active {
			// removes active option from sight
			display: none;
		}

		.arrow {
			transition: 450ms;
			display: flex; // for some reason it centers the arrow image

			img {
				height: 20px;
			}
		}

		.open .arrow {
			transform: rotate(180deg);
		}
	}
</style>
