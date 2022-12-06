<script lang="ts">
	import EmptyTidy from "./../../../lib/components/EmptyTidy.svelte";
	import Licensing from "$lib/components/Licensing.svelte";
	import EmptyBorgit from "$lib/components/EmptyBorgit.svelte";
	import EmptyPrep from "$lib/components/EmptyPrep.svelte";
	import { test, key } from "$lib/stores/localskeletonStore";
	import { Tab, TabGroup } from "@brainandbones/skeleton";
	import Notes from "$lib/components/Notes.svelte";
	import { writable, type Writable } from "svelte/store";
	import FriendAdder from "$lib/components/FriendAdder.svelte";
	
	// $test.country = ''
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
				<Tab class="w-full justify-center" value="a"
					>Set-Up and Migrate</Tab
				>
				<Tab class="w-full justify-center" value="c">Licensing</Tab>
				<Tab class="w-full justify-center" value="d">Tidy & Deliver</Tab
				>

				<!-- <Tab class="w-full justify-center" value="c">Tidy</Tab> -->
			</div>
		</TabGroup>
	</div>
	<!-- Conditionally display content -->
	{#if $storeTab === "a"}<EmptyPrep />{/if}
	{#if $storeTab === "c"}<EmptyBorgit />{/if}
	{#if $storeTab === "d"}<EmptyTidy />{/if}
	{#if $storeTab === "p"}<Notes />{/if}
</div>
