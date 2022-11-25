<script>
	import { test, key } from '$lib/stores/localskeletonStore';

	let showPat = false;
	let showCopy = false;
	let showWithout = false;
	let hideAmarillo = true;
	// $: upper = ($test.code + '').toUpperCase;
</script>

<main class="grid grid-cols-4  p-10 w-full">
	<div class="col-span-3 card card-body w-full p-10">
		<article class="prose dark:prose-invert prose-sm prose-white w-full">
		

			<h1><strong><u>Migration Overview - {$test.name} </u></strong></h1>
			<br />
			<p>
				<strong>Registration Information: </strong><br />
				Registration Name: {$test.name}<br />
				School Registration Number: {$test.license_num}<br />
				Client Code: {$test.code}<br />
				{$test.date}<br />
			</p>

			<p>
				Default Accessit Library login details:<br />
				Username: <strong>Administrator</strong><br />
				Password: <strong>{$test.code}</strong><br />
			</p>

			<p>Web App address: https://us.accessit.online/{$test.code}</p>

			<p>
				We have migrated your data from your current application into Accessit Library as it was
				supplied to us and based on our discussions and on the migration documents provided.
			</p>

			<p>
				The migrated data will be reviewed with your trainer as part of your training and the
				Helpdesk Support staff are also on hand to advise on simple ways to organise your data
				within Accessit. Any issues will be discussed and clarified with them and once we know what
				is required, these can be quickly addressed by the Migrations team.
			</p>

			{#if hideAmarillo}
				<p>
					<strong>Patrons: </strong><br />
					We migrated <strong> {$test.patronT}</strong> active patrons. <br />
				</p>

				{#if showPat}
					<p>
						There are <strong> {$test.pat_set} </strong> sets (<strong>
							{$test.pat_all}
						</strong>patrons) of duplicate patron barcodes – these will need to be reviewed and
						addressed locally to permit appropriate circulation for these patrons.
					</p>
				{/if}

				<p>
					In Accessit patrons are organized into <strong>Patron Categories </strong>which are used
					to define lending allowances, this will be discussed as part of your training.
				</p>
			{/if}

			<p>
				<strong> RESOURCES: </strong> <br />
				We migrated <strong> {$test.resourceT} </strong> resource records and
				<strong> {$test.copyT} </strong>current copy records.<br />
			</p>
			{#if showWithout}
				<p>
					There are <strong> {$test.no_copy} </strong> resources without copies – these may be websites,
					eBooks, or resources that had their copies written off or deleted.
				</p>
			{/if}

			<p>
				There are <strong> {$test.lost} </strong> copies that have been tagged as Lost.
			</p>

			<p>Your trainer will review these copies/resources with you in training.</p>

			{#if showCopy}
				<p>
					There are <strong> {$test.copy_set} </strong> sets (<strong> {$test.copy_all} </strong> Copies)
					of duplicate Copy barcodes – these will need to be reviewed and addressed locally to permit
					appropriate circulation for these Copies.
				</p>
			{/if}
			<!-- if resources without copies -->
			<!-- 
            <p>
                {@html {dupCopy}}
            </p> -->

			<p>
				In Accessit resources are organized into <strong>Collections</strong> which are used to define
				lending rules - again these will be reviewed with your trainer.
			</p>

			<p>
				<strong>Customer Support Portal</strong> - here you will find video clips, articles and FAQ responses
				on Accessit. This is also the place where you can lodge a Ticket with your specific concern and
				a Helpdesk Support member will follow through on the matter with you.
			</p>
		</article>
	</div>

	<div class="flex flex-col card card-body h-min p-10 ml-10">
		<h3 class="flex justify-center">Show/Hide</h3>

		<ul class="list">
			<li>
				<input type="checkbox" on:click={() => (showCopy = !showCopy)} />
				<label for="" class="ml-10"> Duplicate Copies</label>
			</li>
			<li>
				<input type="checkbox" on:click={() => (showPat = !showPat)} />
				<label for="">Duplicate Patrons</label>
			</li>
			<li>
				<input type="checkbox" on:click={() => (showWithout = !showWithout)} />
				<label for="">Resources without Copies</label>
			</li>
			<li>
				<input type="checkbox" on:click={() => (hideAmarillo = !hideAmarillo)} />
				<label for="">Hide Patrons</label>
			</li>

			<!-- ... -->
		</ul>
	</div>
</main>

<style>
	strong {
		color: skyblue;
	}
</style>
