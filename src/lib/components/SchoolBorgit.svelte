<script>
	import { test, key } from '$lib/stores/localskeletonStore';
	import Checklist from './Checklist.svelte';

	let b = [
		' Set-Up and stage 1',
		'Stage 2 - Brooklyn Files Screen ',
		'Checkboxes (Stage 235)',
		'Author Eyeball (Stage 240)',
		'Subject Eyeball (Stage 244)',
		'Keyword Eyeball (Stage 246) ',
		'Campus Eyeball (Stage 248)',
		'Media Eyeball (Stage 290)',
		'Wrap Up / Attach Database'
	];
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
		<br />
		<p>
			<strong>Brooklyn type selection:</strong>
			{$test.districtName}
			{$test.type} School<br />
			<strong>ODIN: </strong>{$test.country}
			{$test.type}
			<span class="badge bg-primary-200">
				Note: High = Secondary // Middle = ?? // Elementary = Primary
			</span><br />
			<strong>Select Country:</strong>
			{$test.country}<br />
			<strong>Select School Type: </strong>{$test.type} <br />
			If School : Delete history and date <br />
			<strong>Set Financial Year Start Date: </strong>{$test.fin_date}<br />
		</p>
		<hr />
	</div>

	<div class="card card-body m-10 w-min bg-accent-100">
		<h5>Data Checker</h5>
		<hr />
		<p class="p-5">
			<span class="badge bg-primary-300 text-lg m-3"> Resources : {$test.resources}</span><br />
			<span class="badge bg-primary-300 text-lg m-3"> Copies : {$test.copies}</span><br />
			<span class="badge bg-primary-300 text-lg m-3"> Patrons: {$test.patrons}</span><br />
			<span class="badge bg-primary-300 text-lg m-3"> On Loan: {$test.on_loan}</span><br />
		</p>
	</div>

	<div class="flex flex-col card card-body  mr-10">
		<h3 class="flex justify-center">Permissions</h3>

		<ul class="list">
			<li>
				<input type="checkbox" bind:checked={$test.sip2} />
				<label for="" class="ml-10"> SIP2</label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.sms} />
				<label for="" class="ml-10"> SMS</label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.ldap} />
				<label for="" class="ml-10"> AD/LDAP</label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.sso} />
				<label for="" class="ml-10"> SSO</label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.brwsync} />
				<label for="" class="ml-10"> Borrower Sync</label>
			</li>
			<div class="card card-body bg-primary-200">
				Note: If Brw Sync is enabled, remember to check Has Paid when licensing! :)
			</div>
			<br />
			<li>
				<input type="checkbox" bind:checked={$test.biometrics} />
				<label for="" class="ml-10"> Biometrics</label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.ar} />
				<label for="" class="ml-10"> Accelerated Reader</label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.fingerprint} />
				<label for="" class="ml-10"> Fingerprint Support </label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.autocomplete_lite} />
				<label for="" class="ml-10"> Autocomplete Lite</label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.autocomplete_full} />
				<label for="" class="ml-10"> Autocomplete Full</label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.anonbrwHistory} />
				<label for="" class="ml-10"> Anonymise Borrower History on Return</label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.phone_app} />
				<label for="" class="ml-10"> Phone App</label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.kiosk} />
				<label for="" class="ml-10"> Kiosk App</label>
			</li>

			<li>
				<input type="checkbox" bind:checked={$test.unioncatalogue} />
				<label for="" class="ml-10"> Union Catalogue - Allow Access</label>
			</li>
			<!-- ... -->
		</ul>
	</div>
	<!-- <div>

		<Checklist checks={b} title="Borgit Checklist" />
	</div> -->
</div>

<style>
	strong {
		color: rgb(29, 128, 190);
	}
</style>
