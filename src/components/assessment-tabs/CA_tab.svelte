<script>
	export let CA_Data, w;
</script>

<svelte:head>
	<title>Continuous Assessment</title>
</svelte:head>

{#if w < 728}
	<!-- mobile table view -->
	<div class="ca">
		{#await CA_Data}
			<h2>Loading Please Wait..</h2>
		{:then ca_data}
			<!-- destructured ca_data -->
			{#each ca_data as { M_code, M_name, CA_score, CA_marked, CA_percentage }}
				<div class="ca-grid">
					<div class="ca-group">
						<h3>Module Code</h3>
						<div class="ca-grid__data">{M_code}</div>
					</div>

					<div class="ca-group">
						<h3>Module Name</h3>
						<div class="ca-grid__data">{M_name}</div>
					</div>

					<div class="ca-group">
						<h3>CA Score</h3>
						<div class="ca-grid__data">{CA_score}</div>
					</div>

					<div class="ca-group">
						<h3>CA Marked</h3>
						<div class="ca-grid__data">{CA_marked}</div>
					</div>

					<div class="ca-group">
						<h3>CA Percentage</h3>
						<div class="ca-grid__data">{CA_percentage}</div>
					</div>
				</div>
			{/each}
		{/await}
	</div>
{:else}
	<!-- Normal table view -->
	<div class="ca">
		<div class="ca__header">
			<h3>Module Code</h3>
			<h3>Module Name</h3>
			<h3>CA Score</h3>
			<h3>CA Marked</h3>
			<h3>CA Percentage</h3>
		</div>

		{#await CA_Data}
			<h2>Loading Please Wait..</h2>
		{:then ca_data}
			<!-- destructured ca_data -->
			{#each ca_data as { M_code, M_name, CA_score, CA_marked, CA_percentage }}
				<div class="ca-grid">
					<div class="ca-grid__data">{M_code}</div>
					<div class="ca-grid__data">{M_name}</div>
					<div class="ca-grid__data">{CA_score}</div>
					<div class="ca-grid__data">{CA_marked}</div>
					<div class="ca-grid__data">{CA_percentage}</div>
				</div>
			{/each}
		{/await}
	</div>
{/if}

<style lang="scss">
	.ca {
		width: max(700px, 100%);

		&-grid,
		&__header {
			display: grid;
			grid-template-columns: 0.7fr 1fr repeat(3, 0.7fr);
			padding: 14px 30px;
			border-bottom: 0.3px solid rgba(83, 89, 104, 0.5);
		}

		&__header h3 {
			font-size: var(--font-size-small);
			font-weight: var(--bold);
			margin-right: 20px;
		}

		&-grid {
			&:last-child {
				border-bottom: none;
			}

			&__data {
				&:first-child {
					text-transform: uppercase;
				}

				font-size: var(--font-size-smaller);
				font-weight: var(--semibold);
				display: flex;
				align-items: center;
				margin-right: 20px;
			}
		}
	}

	@media screen and (max-width: 728px) {
		.ca {
			width: 100%;

			&-grid {
				display: block;
				border-bottom: 2px solid rgb(83, 89, 104);
				padding: 0 0 20px;
				margin-bottom: 14px;
			}

			&-group {
				display: flex;
				align-items: center;
				padding: 0 10px 0 25px;

				&:not(:last-child) {
					border-bottom: 0.3px solid rgba(83, 89, 104, 0.5);
				}

				> h3,
				> div {
					width: 100%;
					height: 100%;
					font-size: var(--font-size-small);
					font-weight: var(--bold);
					margin-right: 20px;
					padding: 14px 0;
				}
			}
		}
	}
</style>
