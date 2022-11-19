<template>
	<div class="container">
		<p>Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Sit optio autem eius. Hic illum tenetur consectetur qui, architecto quis perferendis facilis veniam? Facilis sed ab commodi, dicta recusandae similique placeat?</p>

		<div class="buttons">
			<PrimaryButton label="Back" class="pi pi-arrow-left" @click="prevPage"/>
			<PrimaryButton label="Next" class="pi pi-arrow-right" iconPos="right" @click="nextPage"/>
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