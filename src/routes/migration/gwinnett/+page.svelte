<script lang="ts">
	import Checklist from "$lib/components/Checklist.svelte";
	import Deliver from "$lib/components/Deliver.svelte";
	import Borgit from "$lib/components/DistricBorgit.svelte";
	import Folders from "$lib/components/Folders.svelte";
	import Licensing from "$lib/components/Licensing.svelte";
	import LoadDistric from "$lib/components/LoadDistric.svelte";
    import MigNotesBase from "$lib/components/MigNotesBase.svelte";
	import Notes from "$lib/components/Notes.svelte";
	import Tidy from "$lib/components/Tidy.svelte";
	import { test } from "$lib/stores/localskeletonStore";
	import { Tab, TabGroup } from "@brainandbones/skeleton";
import FriendAdder from "$lib/components/FriendAdder.svelte"
	import { writable, type Writable } from "svelte/store";
    import Pmf from "$lib/components/PMF.svelte";
	import GwinnettPrep from "$lib/components/GwinnettPrep.svelte";
    import GwinnetMigNotes from "$lib/components/GwinnetMigNotes.svelte";

	const storeTab: Writable<string> = writable("a");
</script>

<div class="sticky top-0">
	<!-- <div class="float-right justify-end mr-20">
		<button  class="flex btn bg-primary-500 btn-base text-white btn-lg">Save</button>
	
	</div> -->
	<div><div class="float-right mr-20">
		<FriendAdder></FriendAdder>
	</div>
		<h2 class=" flex font-sans justify-center mt-10 ">
			{$test.code} - {$test.name} - Gwinnett 
			<!-- TODO: figure out what the deliver title is in teamas -->
		</h2>
		<br />
		
	</div>

	<div class="">
		<TabGroup selected={storeTab}
			><div class="flex flex-cols w-full">
				<Tab class="w-full justify-center" value="a">Preparation</Tab>
				<Tab class="w-full justify-center" value="b">Licensing</Tab>
				<Tab class="w-full justify-center" value="d"
					>Tidy {$test.tidy}</Tab
				>
				<Tab class="w-full justify-center" value="g"
					>Migration Notes</Tab
				>
				<Tab class="w-full justify-center" value="h">Deliver</Tab>
				<Tab class="w-full justify-center" value="p">Notes</Tab>
				<!-- <Tab class="w-full justify-center" value="e">Detach & Folders</Tab>
				<Tab class="w-full justify-center" value="f">Deliver</Tab>
				<Tab class="w-full justify-center" value="j">Complete</Tab> -->
			</div>
		</TabGroup>
	</div>
	<!-- Conditionally display content -->
	{#if $storeTab === "a"}<GwinnettPrep />{/if}
	{#if $storeTab === "b"}<Licensing />{/if}
	{#if $storeTab === "c"}
		<Borgit />
	{/if}
	{#if $storeTab === "d"}<Tidy />{/if}
	{#if $storeTab === "e"}<Folders />{/if}
	{#if $storeTab === "f"}<Checklist />{/if}
	{#if $storeTab === "g"}<GwinnetMigNotes />{/if}
	{#if $storeTab === "h"}<Deliver />{/if}
	{#if $storeTab === "p"}<Notes />{/if}
	{#if $storeTab === "j"}Change status, get update for scis, remove day after
		training complete{/if}
</div>
