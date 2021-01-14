<script context="module">
	// for prefetching data
	export async function preload() {
		const statData = await this.fetch("data/quickstats.json");
		const studData = await this.fetch("data/studdetails.json");
		const ALL_Data = [await statData.json(), await studData.json()];

		if (statData.ok && studData.ok) {
			return { ALL_Data };
		}
	}
</script>

<script>
	import Header from "../components/Header.svelte";
	export let ALL_Data;
</script>

<svelte:head>
	<title>My Dashboard</title>
</svelte:head>

<div class="main">
	<Header title="My Dashboard" />

	<!-- Main Content Wrapper -->
	<div class="content-grid">
		<!-- Quick statistics -->
		<section class="quick-stats bg">
			{#await ALL_Data[0]}
				<h3 class="await">Please wait...</h3>
			{:then quickStats}
				<!-- destructured statData -->
				{#each quickStats as { bg, path, title, number }}
					<div class="stat">
						<div class="icon-bg" style="--icon-bg: {bg}">
							<img src={path} alt="" />
						</div>
						<div class="stat__text-wrapper">
							<p class="stat__title">{title}</p>
							<span class="stat__value"> {number} </span>
						</div>
					</div>
				{/each}
			{/await}
		</section>

		<!-- Cumulative grade point average -->
		<section class="cumul-pt-avg bg">
			<h1>Cumulative Grade point Average</h1>
			<span>0</span>
		</section>

		<!-- Student details -->
		<section class="stud bg">
			{#await ALL_Data[1]}
				<h3>Please wait...</h3>
			{:then studDetails}
				<!-- destructured studData -->
				{#each studDetails as { title, value }}
					<div class="stud-detail">
						<h4 class="stud-detail__title">{title}</h4>
						<h2 class="stud-detail__value">{value}</h2>
					</div>
				{/each}
			{/await}
		</section>

		<!-- Student performance graph -->
		<section class="stud-performance bg">
			<div class="stud-performance__title">
				<h1>Student Performance Graph</h1>
				<h4>Max Performance 4</h4>
			</div>
		</section>
	</div>
</div>

<style lang="scss">
	.main {
		height: 100%;
		width: 100%;
		position: relative;
		background: inherit;
		padding: 0 50px 50px;
		overflow-y: auto;
	}

	.content-grid {
		margin-top: 5px;
		display: grid;
		grid-template-columns: 1.5fr 0.7fr;
		grid-template-rows: 0.5fr 0.25fr 1.5fr;
		grid-template-areas:
			"head head"
			"cuml details"
			"perf details";
		grid-gap: 30px;
	}

	.bg {
		background: #ffffff;
		box-shadow: var(--box-shadow);
		border-radius: var(--advanced-radius);
	}

	.quick-stats {
		width: 100%;
		padding: 40px 30px;
		display: flex;
		justify-content: space-evenly;
		grid-area: head;
	}

	.stat {
		display: flex;
		align-items: center;
		justify-content: space-evenly;

		&:not(:last-child) {
			margin-right: 20px;
			border-right: 2px solid #f8fafc;
			padding-right: 20px;
		}

		.icon-bg {
			padding: 20px;
			background: var(--icon-bg);
			border-radius: 50%;
			width: fit-content;
			display: grid;
			place-items: center;
			margin-right: 20px;

			img {
				height: var(--qs-icon-regular);
			}
		}

		&__title {
			font-size: var(--font-size-smaller);
			font-weight: var(--semibold);
		}

		&__value {
			font-size: calc(var(--font-size-mid) + 1px);
			font-weight: var(--extrabold);
		}
	}

	.cumul-pt-avg {
		grid-area: cuml;
		text-align: center;
		padding: 16px;

		h1 {
			font-size: var(--font-size-mid);
			font-weight: var(--semibold);
		}

		span {
			font-size: var(--font-size-big);
			font-weight: var(--extrabold);
		}
	}

	.stud {
		grid-area: details;
		padding: 30px;

		&-detail {
			border-bottom: 1px solid rgba(83, 89, 104, 0.2);

			&:not(:last-child) {
				margin-bottom: 20px;
			}

			&__title {
				font-size: var(--font-size-smallest);
				font-weight: var(--semibold);
			}

			&__value {
				font-size: var(--font-size-small);
				font-weight: var(--bold);
			}
		}
	}

	.stud-performance {
		grid-area: perf;
		padding: 0;

		&__title {
			width: 100%;
			padding: 20px 20px 10px;
			text-align: center;
			border-bottom: 1px solid rgba(83, 89, 104, 0.3);

			h1 {
				font-size: var(--font-size-mid);
				font-weight: var(--semibold);
			}

			h4 {
				font-size: var(--font-size-smaller);
				font-weight: var(--regular);
			}
		}
	}

	@media screen and (max-width: 1280px) {
		.main {
			padding: 0px;
		}

		.content-grid {
			grid-template-columns: 1.3fr 0.8fr;
			margin: 10px 30px 30px;
		}

		.stat {
			&:not(:last-child) {
				margin-right: 15px;
				border-right: 2px solid #f8fafc;
				padding-right: 15px;
			}

			.icon-bg {
				padding: 18px;
				margin-right: 15px;
			}
		}
	}

	@media screen and (max-width: 728px) {
		.content-grid {
			display: block;

			> section {
				margin-bottom: 30px;
			}
		}

		.await {
			background: #ffffff;
			box-shadow: var(--box-shadow);
			border-radius: var(--advanced-radius);
			padding: 20px;
		}

		.quick-stats {
			flex-direction: column;
			background: none;
			box-shadow: none;
			padding: 0;
		}

		.stat {
			justify-content: initial;
			padding: 20px 30px;
			background: #ffffff;
			box-shadow: var(--box-shadow);
			border-radius: var(--advanced-radius);

			&:not(:last-child) {
				border-right: none;
				margin-right: 0;
				margin-bottom: 20px;
			}
			&__title {
				font-size: var(--font-size-small);
			}
			&__value {
				font-size: calc(var(--font-size-mid) + 2px);
			}
		}

		.stud-performance {
			height: 300px;
		}

		.stud-detail {
			&__title {
				font-size: calc(var(--font-size-smaller) + 1px);
			}
			&__value {
				font-size: var(--font-size-mid);
			}
		}
	}
</style>
