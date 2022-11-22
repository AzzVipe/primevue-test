<template>
	<div class="container">
		<h1>What is the purpose of your building ?</h1>
		<div class="cards-container">
			<div class="cards">
				<div class="card" @click="nextPage('listed property')">
					<img src="../assets/commercial-building.png" alt="">
					<h1>Commercial</h1>
				</div>

				<div class="card" @click="nextPage('conservation area')">
					<img src="../assets/house.png" alt="">
					<h1>Domestic</h1>
				</div>
			</div>
		</div>
		<div class="buttons">
			<PrimaryButton icon="pi pi-arrow-left" class="p-button-rounded" @click="prevPage"/>
			<PrimaryButton icon="pi pi-arrow-right" class="p-button-rounded" iconPos="right" @click="nextPage"/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'LandingPage2',

		methods: {
			nextPage() {
				this.$emit('next-page', {pageIndex: 1});
			},
			prevPage() {
				this.$emit('prev-page', {pageIndex: 1});
			}
		}
	}

</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
	}

	.buttons {
		display: flex;
		gap: 2rem;
	}

</style>