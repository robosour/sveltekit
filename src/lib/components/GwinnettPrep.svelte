<script lang="ts">
	import Permissions from "./Permissions.svelte";
	import { test, key } from "$lib/stores/localskeletonStore";
	let data: string = ""; //pasted row from district spreadsheet
	$: list = data.split("\t");
	function load() {
		// $test.code = $key
		$test.name = list[0];
		$test.address =
			list[9];
		$test.phone = list[10];
		$test.type = list[2];
		$test.lms = "Destiny";
		$test.fin_date = "01/07";
		$test.patrons = list[8];
		$test.patron_bc = list[4];
		$test.resources = list[6];
		$test.copy_bc = list[3];
		$test.copies = list[7];
		$test.on_loan = list[5];
        $test.sso=true;
        $test.brwsync=true;
        $test.phone_app=true;
        $test.kiosk=true;
        $test.unioncatalogue=true;

	}
</script>

<div class="grid grid-cols-2 p-5 ml-5 mr-5">
	<div class="w-11/12">
		<div class="mr-10">
			<label class="label mt-4 is-inline-flex" for="code"
				>Borgit #:
			</label>
			<input
				type="text"
				bind:value={$test.borgit}
				class="rounded text-pink-500"
			/>
		</div>
		<p>Paste details here:</p>
		<textarea bind:value={data} cols="30" rows="10" />
		<button class="btn btn-ghost-accent " on:click={load}>Load</button>
	</div>

	<div>
		<h3>{$test.code}</h3>
		<hr />
		<strong>Name =</strong>
		{$test.name} <br />
		<strong>Type =</strong>
		{$test.type}<br />
		<strong>LMS = </strong>{$test.lms}<br />
		<strong>Address =</strong>
		{$test.address}<br />
		<strong>Phone =</strong>
		{$test.phone}<br />
		<strong>Financial Date =</strong>
		{$test.fin_date}<br />
		<strong>Patron Barcodes =</strong>
		{$test.patron_bc}<br />
		<strong># of Patrons = </strong>{$test.patrons}<br />
		<strong># of copies =</strong>
		{$test.copies}<br />
		<strong>Copy Barcodes =</strong>{$test.copy_bc}<br />
		<strong>Resources on loan = </strong>{$test.on_loan}<br />
		<strong># of Resources =</strong>{$test.resources}<br />
		<hr />
	</div>
</div>

<style>
	strong {
		color: rgb(29, 128, 190);
	}
</style>
