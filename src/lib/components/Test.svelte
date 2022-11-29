<script>
    import { page } from "$app/stores";
    import { key, test } from "$lib/stores/localskeletonStore";
    // const reg = /=(.*)/
    // let s = "http://localhost:5173/migration?cd=found"
    // let m = s.match(reg)
    // onMount(async () => {
    // 	// $key =(m[1])
    //     test.subscribe
    //     // $test.code=key +""
    // });
</script>

<p>Current URL: {$page.url}</p>
<!-- {m[1]} -->

<input type="text" bind:value={$key} />
<input type="text" bind:value={$test.name} />
<input type="text" bind:value={$test.id} />
{$key}
{$test.id}
{$test.name}
{$test.code}
