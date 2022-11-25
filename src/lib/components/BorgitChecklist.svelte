<script>
    import { test } from "$lib/stores/localskeletonStore";
</script>

	<div class="flex flex-col card card-body  mr-10">
		<h3 class="flex justify-center">Borgit Checklist</h3>
		<hr>

		<ul class="list">
			<li>
				<input type="checkbox" bind:checked={$test.borg1} />
				<label for="" class="ml-10"> Set-Up and Stage One </label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.borg2} />
				<label for="" class="ml-10"> Stage 2 - Brooklyn Files Screen </label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.borg3} />
				<label for="" class="ml-10"> Compare numbers with expected:</label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.borg4} />
				<label for="" class="ml-10"> Author Eyeball</label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.borg5} />
				<label for="" class="ml-10"> Keyword Eyeball</label>
			</li>
			<li>
				<input type="checkbox" bind:checked={$test.borg6} />
				<label for="" class="ml-10"> Media Eyeball</label>
			</li>
            <div class="card card-body bg-primary-200">				
				License the school on Customer Database to continue :)
            
            </div>
	
	
			<!-- ... -->
		</ul>
	</div>
