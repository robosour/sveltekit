<script lang="ts">
	import { test } from '$lib/stores/localskeletonStore';
	import { GradientHeading } from '@brainandbones/skeleton';
	let text: string;

	const regexBC = /(\w\d+)/g;
	const patrons: string = $test.patron_bc;
	var patron_extracted = patrons.match(regexBC);

	const copy: string = $test.copy_bc;

	var copy_extracted= Array.apply(('-'), Array(5)).map(function () {}) 
    let count = copy.match(regexBC)?.length

	 copy_extracted = copy.match(regexBC);
    copy_extracted.fill(('-'), count, 11)



</script>

<div>
	<ul class="list">
		<li>
			<span>&#127979;</span>
			<span class="flex-auto">{$test.address}</span>
		</li>
		<li>
			<span>&#128222;</span>
			<span class="flex-auto">{$test.phone}</span>
		</li>
		<!-- ... -->
	</ul>
</div>

<div class="grid grid-cols-2 p-10">
	<div class="flex flex-col card card-body  mr-10">
		<h3 class="flex justify-center">Patron Barcodes:</h3>
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
    <div class="flex flex-col card card-body  mr-10">
        <h3 class="flex justify-center">Copy Barcodes:</h3>
        <hr>

        <ul class="list">
            <li>
                <input type="checkbox" bind:checked={$test.cb1} />
                <label for="" class="ml-10"> {copy_extracted[0] }</label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.cb2} />
                <label for="" class="ml-10"> {copy_extracted[1] }</label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.cb3} />
                <label for="" class="ml-10"> {copy_extracted[2] }</label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.cb4} />
                <label for="" class="ml-10"> {copy_extracted[3] }</label>
            </li>
            <!-- <li>
                <input type="checkbox" bind:checked={$test.cb5} />
                <label for="" class="ml-10"> {copy_extracted[4] }</label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.cb6} />
                <label for="" class="ml-10"> {copy_extracted[5] }</label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.cb7} />
                <label for="" class="ml-10"> {copy_extracted[6] }</label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.cb8} />
                <label for="" class="ml-10"> {copy_extracted[7] }</label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.cb9} />
                <label for="" class="ml-10"> {copy_extracted[8] }</label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.cb10} />
                <label for="" class="ml-10"> {copy_extracted[9] }</label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.cb11} />
                <label for="" class="ml-10"> {copy_extracted[10] }</label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.cb12} />
                <label for="" class="ml-10"> {copy_extracted[11] }</label>
            </li> -->


          
            <!-- ... -->
        </ul>
    </div>
</div>
