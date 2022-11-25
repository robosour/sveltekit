<script>
	import { test, key } from '$lib/stores/localskeletonStore';
	import BorgitChecklist from './BorgitChecklist.svelte';
	import Checklist from './Checklist.svelte';
</script>

<div class="flex w-max">
	<div class="card card-body m-10">
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
			{$test.country}
			{$test.type} <br />
			<strong>ODIN: </strong>	{$test.districtName}
			{$test.type}
			<br />
			<strong>Select Country:</strong>
			{$test.country}<br />
			<strong>Delete History:</strong>
			{$test.delete}<br />
			<strong>Set Financial Year Start Date: </strong>{$test.fin_date}<br />
		</p>
		<hr />
	</div>

	<div class="card card-body m-10 w-min bg-accent-100">
		<h5>Data Checker</h5>
		<hr />
		<p class="p-5">
			<span class="badge bg-primary-300 text-lg m-3 text-black"> Resources : {$test.resources}</span><br />
			<span class="badge bg-primary-300 text-lg m-3 text-black"> Copies : {$test.copies}</span><br />
			<span class="badge bg-primary-300 text-lg m-3 text-black"> Patrons: {$test.patrons}</span><br />
			<span class="badge bg-primary-300 text-lg m-3 text-black"> On Loan: {$test.on_loan}</span><br />
		</p>
	</div>
	<div class="p-10">
		<BorgitChecklist />

	</div>
</div>

<style>
	strong {
		color: rgb(29, 128, 190);
	}
</style>
