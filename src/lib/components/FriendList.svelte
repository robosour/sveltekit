<script>
  import { liveQuery } from "dexie";
import { db } from "$lib/stores/db";
  import { browser } from "$app/environment";


  let friends = liveQuery(
    () => browser
       ? db.friends.toArray()
       : []
  );

</script>

<ul>
  {#if $friends}
    {#each $friends as friend (friend.id)}
      <li>{friend.name}, {friend.code}</li>
    {/each}
  {/if}
</ul>
