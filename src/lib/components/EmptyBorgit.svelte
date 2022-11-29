<script lang="ts">
	import Checklist from "./Checklist.svelte";
	import { test } from "$lib/stores/localskeletonStore";
	import Permissions from "./Permissions.svelte";
	import LicPermissions from "./LicPermissions.svelte";
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
</script>

<div class="flex  ">
	<div class="card card-body m-5 mt-0 h-min w-1/3">
		<div
			class="card card-body bg-primary-200 dark:bg-primary-200 dark:text-black"
		>
			Make sure that the school's "as sent" folder contains the right
			files for the LMS type before starting Borgit
		</div>
		<h5>Borgit Set-up</h5>
		<hr />
		<p>
			<strong>Choose a Name :</strong>
			{$test.code}<br />
			<strong>Select a source type : </strong>{$test.lms}
		</p>
		<br />
		<hr />
		<h5>Please define the desired Brooklyn file</h5>
		<hr />
		<p>
			<strong>Brooklyn type selection:</strong>
			{$test.districtName}
			{$test.type} <br />
			<strong>ODIN: </strong>
			{$test.districtName}
			{$test.type}
			<br />
			<strong>Select Country:</strong>
			USA<br />
			<strong>Set Financial Year Start Date: </strong>{$test.fin_date}<br
			/>
		</p>
		<hr />
	</div>

	<div class="flex flex-col card card-body  mr-10 h-min w-1/4">
		<h3 class="flex justify-center">Licensing Checklist</h3>
		<hr />
		<ul class="list">
			<li>
				<input type="checkbox" bind:checked={$test.lic1} />
				<label for="" class="ml-10">Misc Tab => change details </label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.lic4} />
				<label for="" class="ml-10">Disable Automatic Updates </label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.lic2} />
				<label for="" class="ml-10"> Permissions Set </label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.lic3} />
				<label for="" class="ml-10">
					Generate License, double check date</label
				>
			</li>
			<div
				class="card card-body bg-primary-200 dark:bg-primary-200 dark:text-black"
			>
				Input the school code on borgit and <br /> transfer folder from Migrations
				to the school's working folder :)
			</div>
			<!-- ... -->
		</ul>
	</div>
	<!-- <div>
		<Checklist checks={d} title="Licensing Checklist" />
	</div> -->
	<div>
		<!-- <Permissions></Permissions> -->
		<LicPermissions />
	</div>

	<div class="w-1/5">
		<textarea
			class="form-textarea w-11/12  h-96 rounded "
			placeholder="Paste License Here"
			bind:value={license}
		/>
		<button on:click={click} class=" btn btn-ghost-accent w-11/12"
			>Save License</button
		>
	</div>
</div>
<style>
	strong{
		color: rgb(41, 184, 241);
	}
</style>