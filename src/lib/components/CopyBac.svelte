<script lang="ts">
    import { test } from "$lib/stores/localskeletonStore";
    const regexBC = /(\w\d+)/g;
    const copy: string = $test.copy_bc;
    var copy_extracted = Array.apply("-", Array(5)).map(function () {});
    let count = copy.match(regexBC)?.length;
    copy_extracted = copy.match(regexBC);
    copy_extracted.fill("-", count, 11);
</script>

<div class="flex flex-col card card-body  mr-10">
    <h4 class="flex justify-center">Copy Barcodes:</h4>
    <hr />
    <ul class="list">
        <li>
            <input type="checkbox" bind:checked={$test.cb1} />
            <label for="" class="ml-10"> {copy_extracted[0]}</label>
        </li>
        <li>
            <input type="checkbox" bind:checked={$test.cb2} />
            <label for="" class="ml-10"> {copy_extracted[1]}</label>
        </li>
        <li>
            <input type="checkbox" bind:checked={$test.cb3} />
            <label for="" class="ml-10"> {copy_extracted[2]}</label>
        </li>
        <li>
            <input type="checkbox" bind:checked={$test.cb4} />
            <label for="" class="ml-10"> {copy_extracted[3]}</label>
        </li>
        <!-- ... -->
    </ul>
</div>
