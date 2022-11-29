<script lang="ts">
	import Borgit from "$lib/components/DistricBorgit.svelte";
	import Folders from "$lib/components/Folders.svelte";
    import MigNotesBase from "$lib/components/MigNotesBase.svelte";
	import Preparation from "$lib/components/Preparation.svelte";
	import Tidy from "$lib/components/Tidy.svelte";
	import { test } from "$lib/stores/localskeletonStore";
	import { Tab, TabGroup } from "@brainandbones/skeleton";
	import { writable, type Writable } from "svelte/store";
	import Checklist from "../../lib/components/Checklist.svelte";

	let e = [
		"(UK/US) Sharepoint: Upload the 3 report files ",
		"delete zipped folder from schools ",
		"Move school folder code to z done after putting z in front ",
		"Migrations Schedule : Cut row and move to bottom ",
		"Post in teams - relevant country",
		"Onboarding Portal - Update Job",
		"Send email (AU/NZ, myself; UK/US, automatic on OB)",
	];
	const storeTab: Writable<string> = writable("a");
</script>

<svelte:head>
	<title>-Project</title>
</svelte:head>
<div class="sticky top-0">
	<!-- <div class="float-right justify-end mr-20">
		<button  class="flex btn bg-primary-500 btn-base text-white btn-lg">Save</button>
	
	</div> -->
	<div>
		<h2 class=" flex font-sans justify-center mt-10 ">
			{$test.name} - {$test.code} 
		</h2>
	
		<br />
	</div>

	<div class="">
		<TabGroup selected={storeTab}
			><div class="flex flex-cols w-full">
				<Tab class="w-full justify-center" value="a">Preparation</Tab>
				<Tab class="w-full justify-center" value="c">Borgit</Tab>
				<Tab class="w-full justify-center" value="d">Tidy</Tab>
				<Tab class="w-full justify-center" value="g"
					>Migration Notes</Tab
				>
				<Tab class="w-full justify-center" value="e"
					>Detach & Folders</Tab
				>
				<Tab class="w-full justify-center" value="f">Deliver</Tab>
				<Tab class="w-full justify-center" value="j">Complete</Tab>
			</div>
		</TabGroup>
	</div>
	<!-- Conditionally display content -->
	{#if $storeTab === "a"}<Preparation />{/if}
	{#if $storeTab === "c"}
		<Borgit />
	{/if}
	{#if $storeTab === "d"}<Tidy />{/if}
	{#if $storeTab === "e"}<Folders />{/if}
	{#if $storeTab === "f"}<Checklist title="Deliver" checks={e} />{/if}
	{#if $storeTab === "g"}<MigNotesBase />{/if}
	{#if $storeTab === "j"}Change status, get update for scis, remove day after
		training complete{/if}
</div>

