<script>
	import { test } from "$lib/stores/localskeletonStore";
	let train = new Date($test.training_date).toDateString()
    let install = new Date($test.install_date).toDateString()
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
	<div class="card card-body m-10">
        <h4>Email to School</h4>
        <hr />
        <strong>Subject</strong>: {$test.name} Migration Update <br /> <br />
        Good Afternoon, <br /> <br />
        We’d like to let you know that your data has been processed by our Migrations
        team. Thank you for providing all the information required to complete this step.
        <br />
        Planned Dates: <br>
        Remote install: {install}. You will be working
        with our technician, {$test.installer}. He will assist with the Client
        Install and if you have used Circul8r, the import of that data. <br />
        Remote training: {train}. You have purchased {$test.training}h
        of remote training, your trainer is {$test.trainer}. <br />
        {#if $test.country == "AU"}
            Support can be reached at support@accessitlibrary.com or 1800 707 561. {$test.installer}
            can be reached at ext. 3, and {$test.trainer} can be reached at ext. 2.
            <br />
            Kind regards, <br />
            Flynn Whakaari <br />
        {:else if $test.country == "NZ"}
            <p>
                Support can be reached at support@accessitlibrary.com or 0800 542
                727. {$test.installer} can be reached at ext. 3, and {$test.trainer}
                can be reached at ext. 2. <br />
    
            </p>
        {/if}
        <br>
        Kind regards, <br />
        <button type="submit" class="float-right btn bg-warning-400 btn-base">
            Send Migration Update Email to School?
        </button><br />
        </div>
</div>

<style>
	strong {
		color: rgb(29, 128, 190);
	}
</style>
