<script>
	import PMF from "./PMF.svelte";
	import Checklist from "./Checklist.svelte";
	import EmptyForm from "./EmptyForm.svelte";
	import Preparation from "./Preparation.svelte";
	import Permissions from "./Permissions.svelte";
	import EmptyBorgit from "./EmptyBorgit.svelte";
	let a = [
		" Migrations Schedule - highlight & assign self ",
		"Print Pre-Migration Form, Purchase Order, etc.",
		"Fill out ticket for physical folder (dated like: 9 September eg.)",
		"Write on side of folder (Hosted - School Name - LMS) ",
	];
</script>

<div class="grid grid-cols-3 p-3 space-x-5">
	<div>
		<EmptyForm />
	</div>
	<div>
		<Permissions />
	</div>
	<div class="flex flex-col w-auto">
		<Checklist />
	</div>
</div>
