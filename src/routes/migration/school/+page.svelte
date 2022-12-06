<script lang="ts">
	import Licensing from "$lib/components/Licensing.svelte";
	import Notes from "$lib/components/Notes.svelte";
	import Pmf from "$lib/components/PMF.svelte";
	import SchoolBorgit from "$lib/components/SchoolBorgit.svelte";
	import Tidy from "$lib/components/Tidy.svelte";
	import { test, key } from "$lib/stores/localskeletonStore";
	import { Tab, TabGroup } from "@brainandbones/skeleton";
	import { writable, type Writable } from "svelte/store";
	import Deliver from "$lib/components/Deliver.svelte";
	import MigNotesBase from "$lib/components/MigNotesBase.svelte";
	import Email from "$lib/components/Email.svelte";
	import FriendAdder from "$lib/components/FriendAdder.svelte";
	// $test.country = '';
	const storeTab: Writable<string> = writable("a");
</script>
<svelte:head>
	<title>{$key}</title>
</svelte:head>
<div class="sticky top-0">
	<!-- <div class="float-right justify-end mr-20">
		<button  class="flex btn bg-primary-500 btn-base text-white btn-lg">Save</button>
	
	</div> -->
	<div><div class="float-right mr-20">
		<FriendAdder></FriendAdder>
	</div>
		<h2 class=" flex font-sans justify-center mt-10 ">
			{$test.code} - {$test.name} - {$test.lms}
		</h2>
		<br />
	</div>
	<div class="">
		<TabGroup selected={storeTab}
			><div class="flex flex-cols w-full">
				<Tab class="w-full justify-center" value="a">Preparation</Tab>
				<Tab class="w-full justify-center" value="b"
					>Borgit {$test.borgit}</Tab
				>
				<Tab class="w-full justify-center" value="c">Licensing</Tab>
				<Tab class="w-full justify-center" value="d"
					>Tidy {$test.tidy}</Tab
				>
				<Tab class="w-full justify-center" value="g"
					>Migration Notes</Tab
				>
				<Tab class="w-full justify-center" value="h">Deliver</Tab>
				{#if $test.country == "AU" || $test.country == "NZ"}
				<Tab class="w-full justify-center" value="l">Email Scripts</Tab>
				{/if}
				<Tab class="w-full justify-center" value="p">Notes</Tab>
				<!-- <Tab class="w-full justify-center" value="c">Tidy</Tab> -->
			</div>
		</TabGroup>
	</div>
	<!-- Conditionally display content -->
	{#if $storeTab === "a"}<Pmf />{/if}
	{#if $storeTab === "b"}<SchoolBorgit />{/if}
	{#if $storeTab === "c"}
		<Licensing />>
	{/if}
	{#if $storeTab === "d"}<Tidy />{/if}
	{#if $storeTab === "g"}<MigNotesBase />{/if}
	{#if $storeTab === "h"}<Deliver />{/if}
	{#if $storeTab === "l"}<Email></Email>{/if}
	{#if $storeTab === "p"}<Notes />{/if}
</div>
