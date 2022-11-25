<script>
	import PMF from './PMF.svelte';
	import Checklist from './Checklist.svelte';
	let a = [
		' Migrations Schedule - highlight & assign self ',
		'Print Pre-Migration Form, Purchase Order, etc.',
		'Fill out ticket for physical folder (dated like: 9 Sep)',
		'Write on side of folder (Hosted - School Name - LMS) '
	];
</script>

<div class="grid grid-cols-2">
	<div>
		<PMF />
	</div>

	<div>
		<Checklist checks={a} title="Preparation Checklist" />
	</div>
</div>
