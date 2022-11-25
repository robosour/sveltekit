<script>
	import { GradientHeading } from '@brainandbones/skeleton';
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

<div class="grid grid-cols-2">
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
			{$test.country}
			{$test.type}<br />
			<strong>ODIN: </strong>{$test.country}
			{$test.type} <br />
			<!-- <span class="badge bg-primary-200">
					Note: High = Secondary // Middle = ?? // Elementary = Primary
				</span><br /> -->
			<strong>Select Country:</strong>
			{$test.country}<br />
			<strong>Select School Type: </strong>{$test.type} <br />
			<strong>Set Financial Year Start Date: </strong>{$test.fin_date}<br />
		</p>
		<hr />
	</div>

\




</div>

<style>
	strong {
		color: rgb(29, 128, 190);
	}
</style>
