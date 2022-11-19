<template>
	<div class="container">
		<h1>What is the type of your property ?</h1>
		<div class="cards-container">
			<div class="cards">
				<div class="card" @click="nextPage('listed property')">
					<img src="../assets/listed-building.jpeg" alt="">
					<h1>Listed Property</h1>
				</div>

				<div class="card" @click="nextPage('conservation area')">
					<img src="../assets/conserved-house.jpeg" alt="">
					<h1>Conservation Area</h1>
				</div>

				<div class="card" @click="nextPage('standard')">
					<img src="../assets/standard-house.jpeg" alt="">
					<h1>Standard</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'LandingPage',

		methods: {
			nextPage(name) {
				this.$emit('next-page', {data: {name: name}, pageIndex: 0});
			}
		}
	}

</script>

<style lang="scss">

  div.container {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 3rem;
		padding: 2rem;

		h1 {
			text-transform: uppercase;
			font-weight: 700;
			font-size: 2.5rem;
			letter-spacing: 2px;
			margin-top: 3rem;
		}

		.cards-container {
			width: 100%;
		}

		.cards {
			margin: 0 20rem;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
			grid-gap: 1rem;
			padding: 1rem;

			.card {
				display: flex;
				flex-direction: column;
				border-radius: 8px;
				gap: 1rem;
				background-color: whitesmoke;
				padding: 2rem 1.5rem;
				animation: background-color 3s linear;
				align-items: center;
				justify-content: space-between;

				h1 {
					color: black;
					text-transform: uppercase;
					font-weight: 600;
					font-size: 1.5rem;
					letter-spacing: 2px;
					text-align: center;
				}

				img {
					width: 100px;
					aspect-ratio: 1 / 1;
				}
			}

			.card:hover {
				background-color: lightgrey;
			}
		}
  }


	@media (min-width: 320px) and (max-width: 812px) {
		div.container h1 {
			margin-top: 1rem;
		}

		div.container .cards {
			margin: 0;
		}
	}

</style>