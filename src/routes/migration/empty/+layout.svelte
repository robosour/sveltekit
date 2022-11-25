<script lang="ts">
	import { key , test} from "$lib/stores/localskeletonStore";
	import { page } from '$app/stores';
	import { onMount } from "svelte";
		import { GradientHeading } from "@brainandbones/skeleton";
		const reg = /cd=(.*)/
		let s = $page.url +""
		let m = s.match(reg)
	
		onMount( () => {
			$key =(m[1])
			$test.code=$key +""

		});
	</script>
	
	
	<slot><!-- optional fallback --></slot>
	