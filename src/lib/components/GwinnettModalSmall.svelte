<script>
	import { test, key } from "$lib/stores/localskeletonStore";
	import { Modal } from "flowbite-svelte";
	let code = "";
	let formModal = false;
	let formData = { slug: "" };
	// function clicky() {
	//     addToArray();
	// }
	$: formData.slug =
		$key +
		""
			.toLocaleLowerCase()
			.replace(/[^a-z0-9]/g, "-")
			.replace(/(^-+)|(-+$)/g, "");
</script>

<button
	on:click={() => (formModal = true)}
	type="submit"
	class="btn  btn-base btn-ringed-accent ">+ Gwinnett Migration</button
>
<Modal bind:open={formModal} size="xs" autoclose={false}>
	<form class="flex flex-col space-y-6" action="/migration/gwinnett/">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">
			Start a new Gwinnett Migration
		</h3>
		<label for="cd">School Code:</label>
		<input size="50" id="cd" type="text" name="cd" bind:value={$key} />
		<button type="submit" class="btn bg-primary-500 btn-base text-white"
			>Begin</button
		>
	</form>
</Modal>
<!-- <Intermediary initial_code={formData.cd} /> -->
