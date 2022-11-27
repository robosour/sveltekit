<script>
	import { test } from '$lib/stores/localskeletonStore';
	import Checklist from "./Checklist.svelte";
    import CopyBac from './CopyBac.svelte';
    import PatBac from './PatBac.svelte';
	import TidyForm from './TidyForm.svelte';

</script>

<div class="grid grid-cols-3">
<div class="">
<TidyForm></TidyForm>
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
            <!-- ... -->
        </ul>
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
    
        <!-- <PatBac></PatBac>
        <CopyBac></CopyBac> -->
    </div>
</div>


<div class="flex flex-col card card-body  mr-10 leading-none">
    <h3 class="flex justify-center">Tidy Checklist</h3>
    <hr>

    <ul class="list">
        <li>
            <input type="checkbox" bind:checked={$test.tidy1} />
            <label for="" class="ml-10"> Favourites            </label>
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
            <label for="" class="ml-10"> Save Migration Notes Report (oml & pdf)            </label>
        </li>
        <li>
            <input type="checkbox" bind:checked={$test.tidy7} />
            <label for="" class="ml-10"> Collections tidy => Collection Report            </label>
        </li>
        <li>
            <input type="checkbox" bind:checked={$test.tidy8} />
            <label for="" class="ml-10"> Authority Files Tidy => Location Report            </label>
        </li>
        <li>
            <input type="checkbox" bind:checked={$test.tidy9} />
            <label for="" class="ml-10"> Run Financials             </label>
        </li>
        <li>
            <input type="checkbox" bind:checked={$test.tidy10} />
            <label for="" class="ml-10"> Run ais_deletestats            </label>
        </li>
        <li>
            <input type="checkbox" bind:checked={$test.tidy11} />
            <label for="" class="ml-10"> Clear most used & quit (CTRL + Q)            </label>
        </li>

        <!-- ... -->
    </ul>
</div>

</div>
