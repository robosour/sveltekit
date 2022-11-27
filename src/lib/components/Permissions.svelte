<script>
	import { test } from "$lib/stores/localskeletonStore";
</script>

<div class="flex flex-col card card-body  mr-10 ">
	<h3 class="flex justify-center">Permissions</h3>
	<hr />

	<ul class="list">
		<div class="flex leading-none">
			<div class="leading-none">
				<li class="">
					<input type="checkbox" bind:checked={$test.sip2} />
					<label for="" class="ml-10"> SIP2</label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.sms} />
					<label for="" class="ml-10"> SMS</label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.ldap} />
					<label for="" class="ml-10"> AD/LDAP</label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.sso} />
					<label for="" class="ml-10"> SSO</label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.brwsync} />
					<label for="" class="ml-10"> Borrower Sync</label>
				</li>

				<li>
					<input type="checkbox" bind:checked={$test.biometrics} />
					<label for="" class="ml-10"> Biometrics</label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.ar} />
					<label for="" class="ml-10"> Accelerated Reader</label>
				</li>
			</div>
			<div>
				<li>
					<input type="checkbox" bind:checked={$test.fingerprint} />
					<label for="" class="ml-10"> Fingerprint Support </label>
				</li>
				<li>
					<input
						type="checkbox"
						bind:checked={$test.autocomplete_lite}
					/>
					<label for="" class="ml-10"> Autocomplete Lite</label>
				</li>
				<li>
					<input
						type="checkbox"
						bind:checked={$test.autocomplete_full}
					/>
					<label for="" class="ml-10"> Autocomplete Full</label>
				</li>
				<li>
					<input
						type="checkbox"
						bind:checked={$test.anonbrwHistory}
					/>
					<label for="" class="ml-10"> Anonymise Brw History</label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.phone_app} />
					<label for="" class="ml-10"> Phone App</label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.kiosk} />
					<label for="" class="ml-10"> Kiosk App</label>
				</li>
				<li>
					<input
						type="checkbox"
						bind:checked={$test.unioncatalogue}
					/>
					<label for="" class="ml-10"> Union Catalogue</label>
				</li>
			</div>
	
		</div>
		<hr />


		<div class="flex ">
			{#if $test.country == ("UK" || "uk")}
			
				<li>
					<input type="checkbox" bind:checked={$test.hop} />
					<label for="" class="ml-10"> Hop</label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.skip} />
					<label for="" class="ml-10"> Skip</label>
				</li>
				<li>
					<input type="checkbox" bind:checked={$test.jump} />
					<label for="" class="ml-10"> Jump</label>
				</li>
			{/if}
		</div>
		<!-- ... -->
	</ul>
</div>
