<script>
	import { test } from "$lib/stores/localskeletonStore";
	import Notes from "./Notes.svelte";
	let train = new Date($test.training_date).toDateString();
	let install = new Date($test.install_date).toDateString();
</script>

<div class="flex flex-row">
	<div class="m-10 h-min">
		<div class="flex flex-col card card-body  mr-10">
			<h3 class="flex justify-center">Tidy Checklist</h3>
			<hr />
			<ul class="list">
				<li>
					<input type="checkbox" bind:checked={$test.tidy1} />
					<label for="" class="ml-10">Favourites</label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.tidy2} />
					<label for="" class="ml-10">Campus Set-up</label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.tidy3} />
					<label for="" class="ml-10"> Test Connections </label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.tidy4} />
					<label for="" class="ml-10">
						Run ais_deletestats <label for="" class="ml-10" />
					</label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.tidy5} />
					<label for="" class="ml-10">
						Clear Most Used and quit (CTRL + Q) <label
							for=""
							class="ml-10"
						/>
					</label>
				</li>
				<!-- ... -->
			</ul>
		</div>
	</div>
	<div class="card card-body mt-10">
		<h3 class="flex justify-center">Delivery Checklist</h3>
		<hr />
		<ul class="list">
			<li>
				<input type="checkbox" bind:checked={$test.deliver1} />
				<label for="" class="ml-10"> Safely Detach DB </label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.deliver4} />
				<label for="" class="ml-10">
					Zip School Brooklyns and Cut to clients folder</label
				>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.deliver2} />
				<label for="" class="ml-10">
					Move Brooklyns to school final folder and rename
				</label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.deliver5} />
				<label for="" class="ml-10"> Move school to z -Done</label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.deliver6} />
				<label for="" class="ml-10">
					Update Migrations Spreadsheet, Cut row and Move to bottom</label
				>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.deliver8} />
				<label for="" class="ml-10"> Post in Teams</label>
			</li>
			<hr />
			<ul class="list">
				<li>
					<span>&#127979;</span>
					<span class="flex-auto">{$test.address}</span>
				</li>
				<li>
					<span>&#128222;</span>
					<span class="flex-auto">{$test.phone}</span>
				</li>
				<!-- ... -->
			</ul>
			<!-- ... -->
		</ul>
	</div>
	<div>
		<div class="m-10">
		<h3>Put any notes about the school here:</h3>

			<textarea bind:value={$test.notes} cols="30" rows="10" />
		</div>
	</div>
</div>

<style>
	strong {
		color: rgb(29, 128, 190);
	}
</style>
