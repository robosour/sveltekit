<script type="ts">
	import { test, key } from "$lib/stores/localskeletonStore";
	import Checklist from "./Checklist.svelte";
	import EmptyForm from "./EmptyForm.svelte";
	import Permissions from "./Permissions.svelte";
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

<!-- <button on:click={update}>Click</button> -->
<div class="grid grid-cols-3 space-x-5">
	<div>
		<EmptyForm />
	</div>
	<div>
		<Permissions />
		<div>
			<Checklist />
		</div>
	</div>
	<div>
		<h3
			class="flex justify-center p-5 border text-black border-dotted bg-amber-200 rounded-xl"
		>
			Pre-Migration Form
		</h3>
		<form autocomplete="off" class="grid grid-cols-2 mr-10">
			<div class="mr-10">
				<label class="label mt-4 is-inline-flex" for="code"
					>Patron Barcodes:
				</label>
				<input
					type="text"
					bind:value={$test.patron_bc}
					class="rounded text-pink-500"
				/>
			</div>
			<div class="mr-10">
				<label class="label mt-4 is-inline-flex" for="code"
					># of Patrons:
				</label>
				<input
					type="text"
					bind:value={$test.patrons}
					class="rounded text-pink-500"
				/>
			</div>
			<div class="mr-10">
				<label class="label mt-4 is-inline-flex" for="code"
					>Copy Barcodes:
				</label>
				<input
					type="text"
					bind:value={$test.copy_bc}
					class="rounded text-pink-500"
				/>
			</div>
			<div class="mr-10">
				<label class="label mt-4 is-inline-flex" for="code"
					># of Copies:
				</label>
				<input
					type="text"
					bind:value={$test.copies}
					class="rounded text-pink-500"
				/>
			</div>
			<div class="mr-10">
				<label class="label mt-4 is-inline-flex" for="code"
					>On Loan:
				</label>
				<input
					type="text"
					bind:value={$test.on_loan}
					class="rounded text-pink-500"
				/>
			</div>
			<div class="mr-10">
				<label class="label mt-4 is-inline-flex" for="code"
					># of Resources:
				</label>
				<input
					type="text"
					bind:value={$test.resources}
					class="rounded text-pink-500"
				/>
			</div>
			<div class="mr-10">
				<label class="label mt-4 is-inline-flex" for="code"
					>Delete all By date:
				</label>
				<input
					type="text"
					bind:value={$test.delete}
					class="rounded text-pink-500"
				/>
			</div>
		</form>
	</div>
</div>
