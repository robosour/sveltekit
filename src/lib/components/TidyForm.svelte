<script type="ts">
	import { test } from "$lib/stores/localskeletonStore";
	import PatBac from "./PatBac.svelte";
	import CopyBac from "./CopyBac.svelte";
</script>

<h3
	class="flex justify-center p-5 border border-dotted text-black bg-amber-200 rounded-xl"
>
	Tidy Notes
</h3>
<div class="grid grid-cols-1 mr-10">
	<div>
		<div class="ml-10">
			<label class="label mt-4 is-inline-flex " for="code"
				>AccessIT Tidy Port:
			</label>
			<input
				type="text"
				bind:value={$test.tidy}
				class="rounded text-pink-500"
			/>
			<label for=""># of Copies - Daily Summary</label>
			<input type="text" bind:value={$test.copyT} />
			<label for=""># of Patrons - Daily Summary</label>
			<input type="text" bind:value={$test.patronT} />
			<label for=""># of Resources - (CTRL + J)</label>
			<input type="text" bind:value={$test.resourceT} />
			<label for=""># of Resources without Copies - (Find ->)</label>
			<input type="text" bind:value={$test.no_copy} />
			<label for=""># of Lost copies - (CTRL + S)</label>
			<input type="text" bind:value={$test.lost} />
		</div>
		<div class="grid grid-cols-3">
			<div class="ml-10">
				<br /> <button class="btn btn-ringed-warning">Patrons</button>
			</div>
			<div class="ml-5 space-x-2">
				<label for="">Sets</label>
				<input type="text" bind:value={$test.pat_set} />
			</div>
			<div class="ml-5 space-x-2">
				<label for="">Total</label>
				<input type="text" bind:value={$test.pat_all} />
			</div>
		</div>
		<div class="grid grid-cols-3">
			<div class="ml-10">
				<br />
				<button class="btn btn-ringed-warning">Copies</button>
				<!-- <span class="badge bg-primary-500 badge-xl">Skeleton</span> -->
				<!-- <label for="">Copies</label> -->
			</div>
			<div class="ml-5 space-x-2">
				<label for="">Sets </label>
				<input type="text" bind:value={$test.copy_set} />
			</div>
			<div class="ml-5 space-x-2">
				<label for="">Total</label>
				<input type="text" bind:value={$test.copy_all} />
			</div>
		</div>
	</div>
</div>
