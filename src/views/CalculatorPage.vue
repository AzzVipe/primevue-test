<template>
	<main>
		<section class="header">
			<h1>Calculate Electricity Cost</h1>
		</section>
		<section class="body">
			<div class="input-box">
				<div class="input-field">
					<label for="minmax">Standard Tariff</label>
					<InputNumber inputId="minmax" v-model="st" :min="0" :max="1" 
						:minFractionDigits="2" :maxFractionDigits="5" showButtons :step="0.05" 
						mode="currency" currency="GBP" />
				</div>
				<div class="input-field">
					<label for="minmax">S/C Rate</label>
					<InputNumber inputId="minmax" v-model="scr" :min="0" :max="1" 
						:minFractionDigits="2" :maxFractionDigits="5" showButtons :step="0.05" 
						mode="currency" currency="GBP" />
				</div>
				<div class="input-field">
					<label for="minmax">Consumption KWh</label>
					<InputNumber inputId="minmax" v-model="ckwh" :min="100" :max="20000" mode="decimal" />
				</div>
				<div class="input-field">
					<label for="percent">Inflation</label>
					<InputNumber inputId="percent" v-model="inflation" suffix="%" :min="0" :max="100"
						showButtons :step="1" />
				</div>
				<div class="input-field">
					<label for="year">Number Of Year</label>
					<InputNumber inputId="year" v-model="year" :min="0" :max="100" mode="decimal" 
						showButtons :step="1"/>
				</div>
				<p v-if="errorMsg != null">{{ errorMsg }}</p>
				<PrimaryButton label="Calculate" @click="calculateGraph"/>
			</div>
			<div class="box">
				<MyChart v-if="showBar == true" type="bar" :data="basicData" :options="basicOptions" />
			</div>
		</section>
	</main>
</template>

<script>

export default {
	name: 'CalculatorPage',

	data() {
		return {
			st: null,
			scr: null,
			ckwh: null,
			year: null,
			inflation: null,
			errorMsg: null,
			showBar: false,
			basicData: {
				labels: null,
				datasets: [
				{
					label: 'Total Electricity Bill',
					backgroundColor: '#42A5F5',
					data: null
				}
				]
			},
		}
	},
	methods: {
		calculateGraph() {
			this.errorMsg = null;
			if (this.st == null || this.scr == null || this.ckwh == null 
				|| this.inflation == null || this.year == null) {
				this.errorMsg = "* Fill all parameters";

				return;
			}

			let tempArray = Array.of(this.year);
			this.basicData.labels = Array.of(this.year);

			const annualCost = this.st * this.ckwh;
			const scCost = this.scr * 365;
			let subTotal = (annualCost + scCost) * 105/100;

			for (var i = 0; i < this.year; i++) {
				tempArray[i] = subTotal.toFixed(2);
				let increaseAmount = subTotal * this.inflation / 100;
				subTotal = subTotal + increaseAmount;

				this.basicData.labels[i] = i + 1;
			}

			this.basicData.datasets[0].data = tempArray;
			this.showBar = true;
			console.log(this.basicData);
		}
	}
}

</script>

<style lang="scss" scoped>
	main	{
		display: flex;
		flex-direction: column;
		padding: 2rem 5rem;
		gap: 5rem;
		min-height: 100vh;
		align-items: center;
	}
	section.header {
		h1 {
			text-transform: uppercase;
			letter-spacing: 2px;
			font-size: 2.5rem;
			font-weight: 800;
		}
	}

	section.body {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.box {
		display: flex;
		align-items: center;

		.p-chart {
			min-width: 1000px;
		}
	}

	.input-box {
		align-self: flex-start;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.input-field {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media (min-width: 320px) and (max-width: 812px) {
		main	{
			display: flex;
			flex-direction: column;
			padding: 2rem;
			gap: 2rem;
			min-height: 100vh;
			align-items: center;
		}

		section.header h1 {
			text-transform: uppercase;
			letter-spacing: 1.2px;
			font-size: 1.6rem;
			line-height: 1.3;
			font-weight: 700;
		}
		
		section.body {
			flex-direction: column;
			gap: 2rem;

			.input-box {
				margin-right: auto;
				margin-left: auto;
			}

			.box {
				min-width: 100%;

				.p-chart {
					aspect-ratio: 1 / 1;
					min-width: 100%;
				}
			}
		}
	}

</style>