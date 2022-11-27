<script lang="ts">
    import Author from "$lib/stores/Author";
    const company_list = [
        "magazine",
        "press",
        "department",
        "firm",
        "publish",
        "company",
        "co.",
        "harcourt",
        "communications",
        "school",
        "inc",
    ];

    var pure = "";
    var eachRow = [""];
    var transformed = [""];
    var show = false;
    const re = /^(\w*, \w*)/g;
    const semi_last = /( ; $)/g;
    const by_regex = /(\w*. by)/g;
    const first_by = /(^by)/g;
    const re_first_last = /^(\w* \w*)/g;


    function transform() {
        transformed = JSON.parse(JSON.stringify(eachRow));

        for (var i = 0; i < transformed.length; i++) {
            let current_row = transformed[i].toLowerCase();

            if (company_list.some((v) => current_row.includes(v))) {
                current_row = current_row.replace("by", "")  + "✔️"

                //if the row is a company
            } else {
                current_row = current_row.replace("and", ";");
                current_row = current_row.replace("  ", " ");

                current_row = current_row.replace("]", "");
                current_row = current_row.replace("[", "");
                current_row = current_row.replace(" by", "@#");
                current_row = current_row.replace(".", " ");
                current_row = current_row.replace("with", "");
                current_row = current_row.replace("&", ";");
                current_row = current_row.replace(" et ", ";Et ");
                current_row = current_row.replace(" Et ", ";Et ");
                current_row = current_row.replace(".et", ";Et ");
                if (current_row.includes(";")) {
                    let cr = current_row.split(";"); //if there are multiple authors

                    cr = cr.filter((word) => word.trim().length > 0);

                    var current_transformed = "";
                    for (var x in cr) {
                        let auth = new Author(cr[x], 0, 0, "/");
                        current_transformed += auth.transformed + " ; ";
                    }
                    current_row = current_transformed;
                } else {
                    var current = new Author(current_row, 0, 0, "/");
                    current_row = current.transformed;
                }
            }
            // to capitalise after transformation
            var trans_cap = current_row.split(" ");
            for (let x in trans_cap) {
                if(trans_cap[x].length == 1 && trans_cap[x].match(/\w/)){
                    trans_cap[x] += "."
                }
                trans_cap[x] =
                    trans_cap[x].charAt(0).toUpperCase() +
                    trans_cap[x].slice(1);
            }

            transformed[i] = trans_cap.join(" ")
            // transformed[i] =current_row
            transformed[i] = transformed[i].replace(",,", ",")

            if (transformed[i].match(semi_last)) {
                // remove ; from end of string
                transformed[i] = transformed[i].slice(0, -2);
            }

            show = true;
        }
    }

    function load() {
        eachRow = pure.split("\n");
        for (var i = 0; i < eachRow.length; i++) {
            eachRow[i] = eachRow[i].split("\t")[2];
            // console.log(eachRow[i]);
        }
        transform();
    }
</script>

<h3>Paste eyeball text here:</h3>
<div class="w-1/2">
    <textarea bind:value={pure} />
    <button on:click={load}> Load</button>
</div>
<div class="grid grid-cols-2">
    <div>
        {#each eachRow as item}
            <!-- content here -->{item.split(";")}<br />
        {/each}
    </div>

    <div>
        <button on:click={transform}>Transform</button>
        {#if show}
            {#each transformed as item}
                {#if !item.includes("working")}
                    <mark>{item}</mark>
                {:else}
                    {item}
                    <!-- else content here -->

                    <!-- content here -->
                {/if}

                <!-- content here -->
                <br />
                <!-- {item.replace("and", ";")}<br> -->
            {/each}
            <!-- content here -->
        {/if}
    </div>
</div>
