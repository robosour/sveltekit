<script>
    const input =""
</script>
<main class="mt-10">
    
    <label for="textarea">What type of spaced do you want to transform?</label>
    <select
        type="select"
        bind:value={type}
        class="form-select px-4 py-3 rounded w-auto"
    >
        <option value="Author">Author</option>
        <option value="Keyword">Keyword</option>
    </select>
    
    <label for="textarea">Paste the spaced:</label>
    <textarea  bind:value={input} class="form-textarea px-4 py-3 rounded w-xl" />
    <div class="grid grid-cols-2 p-10">
        <div>
            <p>{type}</p>
        </div>
        <div>
            <button on:click={simplify} class="btn btn-ghost-primary">Simplify</button>
        </div>
        <div>
            <p>
                <select
                    bind:value={selection}
                    class="form-select  px-4 py-3 rounded-full"
                    on:click={checkAll}
                >
                    <option value="kj">Remove Valid Authors</option>
                    <option value="bzjhbds" />
                    <option value="sdhkjbk">klsjks</option>
                </select>
            </p>
        </div>
        <div>
            <p>{output} spaced={spaced.length} semi={semi.length} comma={comma.length} </p>
        </div>
        <div>
            {print}
            <br>
            {#each author_array as author}
                {author} <br>
                 <!-- content here -->
            {/each}
            <!-- <p>{spli.length} </p> -->
        </div>
    </div>
</main>

