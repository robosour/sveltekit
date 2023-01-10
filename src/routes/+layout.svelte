<script lang="ts">
	import GwinnettModalSmall from './../lib/components/GwinnettModalSmall.svelte';
	import EmptyModalSmall from "./../lib/components/EmptyModalSmall.svelte";
	// import "@brainandbones/skeleton/themes/theme-seafoam.css";
	import "../theme.postcss"; // <--
	import DistrictModalSmall from "$lib/components/DistrictModalSmall.svelte";
	import SchoolModalSmall from "$lib/components/SchoolModalSmall.svelte";
	import { AppBar, AppShell, GradientHeading, LightSwitch } from "@brainandbones/skeleton";
	import "@brainandbones/skeleton/styles/all.css";
	import { writable, type Writable } from "svelte/store";
	import "../app.postcss";
    import GwinnettModal from "$lib/components/GwinnettModal.svelte";
    import GwinnetModalSmall from "$lib/components/GwinnetModalSmall.svelte";
	let formModal = false;
	const storeTab: Writable<string> = writable("a");
	let place =""
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4 " slotLead="rounded-md">
	<!-- Header -->
	<svelte:fragment slot="header">
		<!-- Insert the App Bar: -->
		<AppBar class=" rounded-b-3xl shadow-md shadow-emerald-50 ">
			<svelte:fragment slot="lead">
				<GradientHeading tag="h3"
					><a href="/">workflo2</a></GradientHeading
				>
			</svelte:fragment>
			<GradientHeading
				class="flex justify-center"
				tag="h1"
				direction="bg-gradient-to-r"
				from="from-accent-500"
				to="to-primary-900"
			>
				<a href="/">
					&#10024; Migrations Hub &#10024;</a
				></GradientHeading
			>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
		<!-- --- -->
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<nav class="list-nav">
			<ul>
				<!-- <li>
					<DistrictModalSmall title={"District"}>/</DistrictModalSmall
					>
				</li> -->
				<li>

					<GwinnetModalSmall/>

				</li>
				<li>
					<SchoolModalSmall title={"School"} />
				</li>
				<li>
					<EmptyModalSmall title={"Empty"} />
				</li>
				<li>
					<a href="/utils/author" target="_blank">Author Parser</a>
				</li>
				<!-- <li><a href="/utils/barcodes" target="_blank">Barcodes</a></li> -->
				<li>
					<a
						href="https://accessitlibrary.atlassian.net/wiki/spaces/MIG/overview"
						>F.A.Q</a
					>
				</li>
			</ul>
		</nav>
		<!-- --- -->
	</svelte:fragment>
	<!-- Page Content Slot -->
	<slot />
</AppShell>
