<script context="module">
	// for prefetching data
	export async function preload() {
		let res = await this.fetch("data/ca.json");
		let CA_Data = await res.json();

		if (res.ok) {
			return { CA_Data };
		}
	}
</script>

<script>
	import Tab from "../components/assessment-tabs/Ass_Tabs.svelte";
	import CA from "../components/assessment-tabs/CA_tab.svelte";
	import Header from "../components/Header.svelte";

	export let CA_Data; // passed as a prop to CA_tab
	let w; // width of window
	let tabNames = [
		"Attendance",
		"Mark My Attendance",
		"Continuous Assessment",
	];
	let activeTab = "Continuous Assessment";
</script>

<svelte:window bind:innerWidth={w} />

<div class="main">
	<Header title="My Assessment" />
	<div class="tab-names">
		<Tab
			{tabNames}
			{activeTab}
			{w}
			on:tabChange={(e) => (activeTab = e.detail)}
		/>
	</div>

	<!-- Handles tab content -->
	<div class="tab-content">
		{#if activeTab === tabNames[0]}
			<h1>{tabNames[0]}</h1>
		{:else if activeTab === tabNames[1]}
			<h1>{tabNames[1]}</h1>
		{:else if activeTab === tabNames[2]}
			<CA {CA_Data} {w} />
		{/if}
	</div>
</div>

<style lang="scss">
	.main {
		height: 100%;
		width: 100%;
		background: inherit;
		position: relative;
		padding: 0 50px 50px;
		overflow-x: hidden;
	}

	@media screen and (max-width: 1124px) {
		.main {
			padding: 0;

			> div {
				margin: 0 20px 30px;
				overflow: auto;
				position: relative;
			}
		}

		div.tab-names {
			margin-top: 0;
		}
	}

	@media screen and (max-width: 728px) {
		div.tab-names {
			overflow: visible;
		}
		div.tab-content {
			margin: 0 0 40px;
		}
	}
</style>
