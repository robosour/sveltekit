<script>

    import { test } from "$lib/stores/localskeletonStore";
</script>
<h3>Put any notes about the school here: </h3>
<div class="w-1/2">
    <textarea bind:value={$test.notes} cols="30" rows="10" />


</div>
