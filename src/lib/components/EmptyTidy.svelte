<script>
	import { test } from '$lib/stores/localskeletonStore';
	import { GradientHeading } from '@brainandbones/skeleton';
</script>

<div class="grid grid-cols-2">
	<div class="card card-body m-10 h-min">
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

		<div class="flex flex-col card card-body  mr-10">
			<h3 class="flex justify-center">Tidy Checklist</h3>
			<hr />

			<ul class="list">
				<li>
					<input type="checkbox" bind:checked={$test.prep1} />
					<label for="" class="ml-10">Favourites</label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.prep2} />
					<label for="" class="ml-10">Campus Set-up</label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.prep3} />
					<label for="" class="ml-10"> Test Connections </label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.prep4} />
					<label for="" class="ml-10">
						Run ais_deletestats <label for="" class="ml-10" />
					</label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.prep4} />
					<label for="" class="ml-10">
						Clear Most Used and quit (CTRL + Q) <label for="" class="ml-10" />
					</label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.prep4} />
					<label for="" class="ml-10">
						Run ais_deletestats <label for="" class="ml-10" />
					</label>
				</li>
				<!-- ... -->
			</ul>
		</div>
	</div>
</div>

<style>
	strong {
		color: rgb(29, 128, 190);
	}
</style>
