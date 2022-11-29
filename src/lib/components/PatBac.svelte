<script lang="ts">
	import { test } from "$lib/stores/localskeletonStore";

	const regexBC = /(\w\d+)/g;
	const patrons: string = $test.patron_bc;
	var patron_extracted = patrons.match(regexBC);
</script>

<div class="flex flex-col card card-body  mr-10">
	<h4 class="flex justify-center">Patron Barcodes:</h4>
	<hr />
	<ul class="list">
		<li>
			<input type="checkbox" bind:checked={$test.pb1} />
			<label for="" class="ml-10"> {patron_extracted[0]}</label>
		</li>
		<li>
			<input type="checkbox" bind:checked={$test.pb2} />
			<label for="" class="ml-10"> {patron_extracted[1]}</label>
		</li>
		<li>
			<input type="checkbox" bind:checked={$test.pb3} />
			<label for="" class="ml-10"> {patron_extracted[2]}</label>
		</li>
		<li>
			<input type="checkbox" bind:checked={$test.pb4} />
			<label for="" class="ml-10"> {patron_extracted[3]}</label>
		</li>
		<!-- ... -->
	</ul>
</div>
