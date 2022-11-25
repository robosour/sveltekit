<script lang="ts">
	import Notes from '$lib/components/Notes.svelte';
	import Reroute from '$lib/components/Reroute.svelte';
	import Tidy from '$lib/components/Tidy.svelte';
	import Borgit from '$lib/components/DistricBorgit.svelte';
	import EmptyBorgit from '$lib/components/EmptyBorgit.svelte';
	import EmptyPrep from '$lib/components/EmptyPrep.svelte';
	import Licensing from '$lib/components/Licensing.svelte';
	import Pmf from '$lib/components/PMF.svelte';
	import { test } from '$lib/stores/localskeletonStore';
	import { Tab, TabGroup } from '@brainandbones/skeleton';
	import { writable, type Writable } from 'svelte/store';
	// $test.country = '';
	const storeTab: Writable<string> = writable('a');
</script>

<div class="sticky top-0">
	<!-- <div class="float-right justify-end mr-20">
		<button  class="flex btn bg-primary-500 btn-base text-white btn-lg">Save</button>
	
	</div> -->
	<div>
		<h2 class=" flex font-sans justify-center mt-10 ">{$test.name} - {$test.code}</h2>
		<br />
	</div>

	<div class="">
		<TabGroup selected={storeTab}
			><div class="flex flex-cols w-full">
				<Tab class="w-full justify-center" value="a">Preparation</Tab>
				<Tab class="w-full justify-center" value="b">Borgit {$test.borgit}</Tab>
				<Tab class="w-full justify-center" value="c">Licensing</Tab>
				<Tab class="w-full justify-center" value="d">Tidy {$test.tidy}</Tab>
				<Tab class="w-full justify-center" value="g">Migration Notes</Tab>
				<Tab class="w-full justify-center" value="p">Notes</Tab>

				<!-- <Tab class="w-full justify-center" value="c">Tidy</Tab> -->
			</div>
		</TabGroup>
	</div>

	<!-- Conditionally display content -->
	{#if $storeTab === 'a'}<Pmf />{/if}
	{#if $storeTab === 'b'}<Borgit />{/if}

	{#if $storeTab === 'c'}
		<Licensing />>
	{/if}
	{#if $storeTab === 'd'}<Tidy />{/if}
	{#if $storeTab === 'g'}<Reroute />{/if}
	{#if $storeTab === 'p'}<Notes />{/if}
</div>
