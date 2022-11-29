<script>
    import { test } from "$lib/stores/localskeletonStore";
    import Email from "./Email.svelte";
</script>

<main class="grid grid-cols-2 p-5 space-x-7 ">

    <div class=" card card-body ">
        <h4 class="flex justify-center">School Folder Complete</h4>
        <hr />
        <p>
            <strong>{$test.code}</strong>
        </p>
        <p><strong>├ as sent </strong></p>
        <p>│ ├ data</p>
        <p>│ │ ├ ...</p>
        <p><strong>├ working </strong></p>
        <p>│ ├ {$test.code}</p>
        <p>│ │ ├ bi_brooklyn</p>
        <p>│ │ │ ├ Brooklyn_{$test.code}.mdf</p>
        <p>│ │ │ ├ Brooklyn_{$test.code}_Log.ldf</p>
        <p>│ │ ├ /....</p>
        <p>│ │ ├ {$test.name} Migration Notes.odt</p>
        <p><strong>└ final</strong></p>
        <p>│ ├ {$test.code}</p>
        <p>│ │ ├ Brooklyn.mdf</p>
        <p>│ │ ├ Brooklyn_Log.ldf</p>
        <p>│ ├ {$test.name} Migration Notes.pdf</p>
        <p>│ ├ Collection Usage Report.pdf</p>
        <p>│ ├ Location Usage Report.pdf</p>
        <p>- {$test.code}.zip <mark>(goes in clients folder)</mark></p>
    </div>

    <div class="card card-body">
        <h3 class="flex justify-center">Delivery Checklist</h3>
        <hr />
        <ul class="list">
            <li>
                <input type="checkbox" bind:checked={$test.deliver1} />
                <label for="" class="ml-10"> Safely Detach DB </label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.deliver2} />
                <label for="" class="ml-10">
                    Move Brooklyns to school folder and rename
                </label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.deliver4} />
                <label for="" class="ml-10">
                    Zip School Brooklyns and Cut to clients folder</label
                >
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.deliver3} />
                <label for="" class="ml-10">
                    Check school folder complete</label
                >
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
            {#if $test.country == "AU" || $test.country == "NZ"}
                <li>
                    <input type="checkbox" bind:checked={$test.deliver7} />
                    <label for="" class="ml-10">
                        Send email with attached reports</label
                    >
                </li>
                <li>
                    <input type="checkbox" bind:checked={$test.deliver9} />
                    <label for="" class="ml-10"> Send SCIS Email</label>
                </li>
                <!-- content here -->
            {:else}
                <!-- else content here -->
                <li>
                    <input type="checkbox" bind:checked={$test.deliver7} />
                    <label for="" class="ml-10">
                        Upload report files to Sharepoint</label
                    >
                </li>
            {/if}
            <li>
                <input type="checkbox" bind:checked={$test.deliver8} />
                <label for="" class="ml-10"> Post in Teams</label>
            </li>
            <!-- ... -->
        </ul>

    </div>
</main>
