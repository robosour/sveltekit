<script>
    import Notes from "./Notes.svelte";
    import { test } from "$lib/stores/localskeletonStore";
    import Checklist from "./Checklist.svelte";
    import CopyBac from "./CopyBac.svelte";
    import PatBac from "./PatBac.svelte";
    import TidyForm from "./TidyForm.svelte";

    let x = $test.license.split("\n");
</script>

<div class="grid grid-cols-3">
    <div class="">

        <TidyForm />
    </div>
    <div>
        <div>
            <ul class="list">
                <li>
                    <span>&#127979;</span>
                    <span class="flex-auto">{$test.address}</span>
                </li>
                <li>
                    <span>&#128222;</span>
                    <span class="flex-auto">{$test.phone}</span>
                </li>
                <li>
                    <span class="flex-auto">{x[1]} // {x[2]} // {x[3]} // {x[4]}</span>
                </li>

                <!-- ... -->
            </ul>
            <hr />
            <div class="card card-body m-5">
                <div class="card card-body m-2 bg-red-200">
                    <h6 class="text-center">Expected:</h6>
                    <strong>Resources</strong> : {$test.resources}<br />
                    <strong>Copies</strong> : {$test.copies}<br />
                    <strong>Patrons</strong>: {$test.patrons}<br />
                    <strong>On Loan</strong>: {$test.on_loan}<br />
                </div>
         
            </div>

            
        </div>
        <div class="grid grid-cols-2">
            <div>
                {#if $test.patron_bc.length > 0}
                    <!-- content here -->
                    <PatBac />
                {/if}
            </div>
            <div>
                {#if $test.copy_bc.length > 0}
                    <!-- content here -->
                    <CopyBac />
                {/if}
            </div>

        </div>
    </div>

    <div class="flex flex-col card card-body  mr-10 leading-none">
        <h3 class="flex justify-center">Tidy Checklist</h3>
        <hr />
        <ul class="list">
            <li>
                <input type="checkbox" bind:checked={$test.tidy1} />
                <label for="" class="ml-10"> Favourites </label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.tidy2} />
                <label for="" class="ml-10"> Campus Set-up </label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.tidy3} />
                <label for="" class="ml-10"> Compare data with expected</label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.tidy4} />
                <label for="" class="ml-10"> Check Patron Barcodes</label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.tidy5} />
                <label for="" class="ml-10"> Check Copy Barcodes</label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.tidy6} />
                <label for="" class="ml-10"> Test connections</label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.tidy12} />
                <label for="" class="ml-10">
                    Save Migration Notes Report (oml & pdf)
                </label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.tidy7} />
                <label for="" class="ml-10">
                    Authority Files Tidy => Location Report
                </label>
          
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.tidy8} />
                <label for="" class="ml-10">
                    Collections tidy => Collection Report
                </label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.tidy9} />
                <label for="" class="ml-10"> Run Financials </label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.tidy10} />
                <label for="" class="ml-10"> Run ais_deletestats </label>
            </li>
            <li>
                <input type="checkbox" bind:checked={$test.tidy11} />
                <label for="" class="ml-10">
                    Clear most used & quit (CTRL + Q)
                </label>
            </li>
            <!-- ... -->
        </ul>
    </div>
</div>
