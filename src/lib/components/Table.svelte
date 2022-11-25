<script lang="ts">
	import { writable, type Writable } from "svelte/store";

	import {
		// Utilities
		dataTableHandler,

		dataTableSort,
		// Svelte Actions
		tableInteraction, type DataTableModel
	} from "@brainandbones/skeleton";

	const sourceData = [
		{ code: "STJ28", name: "ST James", task:"Migrating" },
		{ code: "STJ28", name: "ST James", task:"Migrating" },
		{ code: "STJ28", name: "ST James", task:"Migrating" },
		{ code: "STJ28", name: "ST James", task:"Migrating" },
		{ code: "STJ28", name: "ST James", task:"Migrating" },
		{ code: "STJ28", name: "ST James", task:"Migrating" },

	];

	const dataTableModel: Writable<DataTableModel> = writable({
		// The original unfiltered source data.
		source: sourceData,
		// The filtered source data, shown in UI.
		filtered: sourceData,
		// Optional: An array of selected row objects.
		selection: [],
		// Optional: The current search term.
		search: "",
		// Optional: The current sort key.
		sort: "",
		// Optional: The Paginator component settings.
		pagination: { offset: 0, limit: 10, size: 0, amounts: [1, 2, 5, 10] },
	});

	// Automatically handles search, sort, etc when the model updates.
	dataTableModel.subscribe((v) => dataTableHandler(v));
</script>

<div class="grid justify-items-center w-full">
	<!-- <div class="p-10">
		<input
			bind:value={$dataTableModel.search}
			type="search"
			placeholder="Search..."
		/>
	</div> -->

	<div class="table-container ml-20 w-10/12 mr-20 ">
		<table class="table table-hover bg-amber-100" use:tableInteraction>
			<thead
				on:click={(e) => {
					dataTableSort(e, dataTableModel);
				}}
				on:keypress
			>
				<tr class="bg-amber-200">
					<th data-sort="code">Code</th>
					<th data-sort="name">  School Name</th>
					<th data-sort="task">Currently...</th>
					<!-- ... -->

					<!-- ... --->
				</tr>
			</thead>
			<tbody>
				{#each $dataTableModel.filtered as row, rowIndex}
					<tr >
						<td>{row.code}</td>
						<td>
							<a href="/migration?cd=28">{row.name}</a>
				</td>
						<td>{row.task}</td>
		
						

						<!-- ... --->
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
