<script>
	import { goto } from "@sapper/app";

	let id, password;
	function handleSubmit() {
		console.log({ id, password });

		goto("dashboard");
	}
</script>

<svelte:head>
	<title>Student Portal | Baze University Abuja</title>
</svelte:head>
<div class="wrapper">
	<section class="left" />

	<section class="right">
		<div class="content-wrapper">
			<div class="logo-wrapper">
				<img src="images/baze-logo.png" alt="" />
				<h1>BAZE UNIVERSITY ABUJA</h1>
			</div>

			<div class="form-header">
				<h1>Log In</h1>
				<p>
					Enter your ID and Password to gain acees to Your stuent
					portal
				</p>
			</div>

			<form on:submit|preventDefault={handleSubmit}>
				<span class="label"> ID </span>
				<input type="text" placeholder="Student ID" bind:value={id} />

				<span class="label"> Password </span>
				<input
					type="text"
					placeholder="Enter your Password"
					bind:value={password}
				/>

				<button class="cta">Sign In</button>
			</form>
			<p class="remarks">
				Easily access information and links to online resources and
				services you need for your stay on campus.
			</p>
		</div>
	</section>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		height: 100%;
		display: grid;
		position: absolute;
		top: 0;
		left: 0;
		grid-template-columns: 1fr 1fr;
	}

	.left {
		background: inherit;
	}

	.right {
		background: #ffffff;
		box-shadow: -2px 0px 10px #dfe2ea;
		border-radius: var(--basic-radius);
		padding: 20px 0 50px;
	}

	.content-wrapper {
		margin: 0 100px;
	}

	.logo-wrapper {
		width: fit-content;
		padding: 30px 20px;
		margin: 0 auto;
		display: grid;
		place-items: center;

		img {
			height: 100px;
		}

		h1 {
			font-size: var(--font-size-mid);
			font-weight: var(--semibold);
			text-align: center;
			margin-top: 10px;
		}
	}

	.form-header {
		h1 {
			font-size: calc(var(--font-size-big) + 5px);
			font-weight: var(--bold);
		}
		p {
			margin: 5px 0 30px;
			font-family: var(--poppins);
			font-size: var(--font-size-smaller);
			font-weight: var(--regular);
		}
	}

	input,
	button {
		display: block;
		outline: none;
	}

	form {
		--input-border: #d4d5d9;
		--input-active-border: #6273e9;
		--placeholder: #a9acb3;

		.label {
			font-size: var(--font-size-small);
			font-weight: var(--semibold);
			display: block;
			margin-bottom: 5px;
		}

		input {
			width: 100%;
			padding: 10px 15px;
			border-radius: var(--little-radius);
			border: 2px solid var(--input-border);
			color: var(--font-color);
			font-size: var(--font-size-small);
			font-weight: var(--regular);
			font-family: var(--font-family);
			margin-bottom: 20px;

			&::placeholder {
				font-size: var(--font-size-smaller);
				font-weight: var(--regular);
				color: var(--placeholder);
			}

			&:focus {
				border: 2px solid var(--input-active-border);
				font-family: var(--font-family);
			}
		}

		.cta {
			--box-shadow: 0px 2px 10px #535968b3;
			width: 100%;
			padding: 10px;
			color: #ffffff;
			cursor: pointer;
			background: var(--input-active-border);
			font-size: var(--font-size-small);
			font-weight: var(--bold);
			border: none;
			border-radius: var(--little-radius);
			margin-bottom: 20px;
			box-shadow: var(--box-shadow);
		}
	}

	.remarks {
		font-family: var(--poppins);
		font-size: var(--font-size-smaller);
		font-weight: var(--regular);
		text-align: center;
	}

	@media screen and (max-width: 768px) {
		.wrapper {
			display: flex;
			flex-direction: column;
			overflow: scroll;
		}

		.form-header h1 {
			text-align: center;
		}
	}
</style>
