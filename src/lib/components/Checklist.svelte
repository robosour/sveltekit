<script>
	import { test } from '$lib/stores/localskeletonStore';
</script>

<main>
	<div class="flex flex-col card card-body  mr-10">
		<h3 class="flex justify-center">Preparation Checklist</h3>
		<hr />

		<ul class="list">
			<li>
				<input type="checkbox" bind:checked={$test.prep1} />
				<label for="" class="ml-10"> Migrations Schedule - highlight & assign self </label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.prep2} />
				<label for="" class="ml-10">Print Pre-Migration Form, Purchase Order, etc. </label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.prep3} />
				<label for="" class="ml-10">
					Fill out ticket for physical folder (dated like: 9 September)
				</label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.prep4} />
                <label for="" class="ml-10">

				Write on side of folder (Hosted - School Name - LMS)
				<label for="" class="ml-10" />
			</li>
			<div class="card card-body bg-primary-200">
				Make sure that the school's "as sent" folder contains the right files for the LMS type before starting Borgit
			</div>

			<!-- ... -->
		</ul>
	</div>
</main>
