<script lang="ts">
	import Checklist from './Checklist.svelte';
	import { test } from '$lib/stores/localskeletonStore';
	import Permissions from './Permissions.svelte';

	function click() {
		match_num = license.match(/Number =(.*)/);
		if (match_num != null) {
			$test.license_num = match_num[1];
			// {$test.license_num} = match_num[1];
		}
		match_date = license.match(/Ending[\s\S]*/);
		if (match_date != null) {
			$test.date = match_date[0];

			// {$test.date} = match_date[0];
		}
	}
	let match_num: RegExpMatchArray | null;
	let match_date: RegExpMatchArray | null;
	let license: string;
	let d = [
		'Misc Tab => change details and Disable Automatic Updates',
		'Permissions Set',
		'Generate License, double check date'
	];
</script>

<div class="grid grid-cols-3">
    <div class="flex flex-col card card-body  mr-10">
		<h3 class="flex justify-center">Licensing Checklist</h3>
		<hr>

		<ul class="list">
			<li>
				<input type="checkbox" bind:checked={$test.lic1} />
				<label for="" class="ml-10">Misc Tab => change details and Disable Automatic Updates </label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.lic2} />
				<label for="" class="ml-10"> Permissions Set </label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.lic3} />
				<label for="" class="ml-10"> Generate License, double check date</label>
			</li>
            <div class="card card-body bg-primary-200">				
                
                Input the school code on borgit and transfer folder from Migrations to the school's working folder :)
            </div>
			
	
			<!-- ... -->
		</ul>
	</div>
	<!-- <div>
		<Checklist checks={d} title="Licensing Checklist" />
	</div> -->
    <div>
        <Permissions></Permissions>
    </div>
	<div class="">
		<label class="grid justify-center" for="">Paste License here:</label>
		<textarea class="form-textarea w-11/12  h-96 rounded " bind:value={license} />
		<button on:click={click} class=" btn btn-ghost-accent w-11/12">Save License</button>
	</div>
</div>

