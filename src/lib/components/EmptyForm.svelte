<script type="ts">
    import { test, key } from "$lib/stores/localskeletonStore";
    function click() {
        match_num = license.match(/Number =(.*)/);
        if (match_num != null) {
            $test.license_num = match_num[1];
            // {$test.license_num} = match_num[1];
        }
        match_date = license.match(/Ending[\s\S]*/);
        if (match_date != null) {
            $test.date = match_date[0];
            // {$test.date} = match_date[0];
        }
    }
    let match_num: RegExpMatchArray | null;
    let match_date: RegExpMatchArray | null;
    let license: string;
    let selected_country = "";
    let url= "https://www.google.com/search?q=" + $test.name.replace(" ", "+") +"+"+ $test.country
</script>

<!-- <button on:click={update}>Click</button> -->
<div>
    <h3
        class="flex justify-center p-5 border text-black border-dotted bg-amber-200 rounded-xl"
    >
        School Details:
    </h3>
    <form autocomplete="off" class="grid grid-cols-2 mr-10">
        <div class="mr-10">
            <label class="label mt-4 is-inline-flex" for="last-name">
                School Name:
            </label>
            <input
                type="text"
                bind:value={$test.name}
                class="rounded text-pink-500"
            />
        </div>
        <div class="mr-10">
            <label class="label mt-4 is-inline-flex" for="code"
                >Client Code:
            </label>
            <input
                disabled
                type="text"
                bind:value={$test.code}
                class="rounded text-pink-500"
            />
        </div>

        <div class="mr-10">
            <label class="label mt-4 is-inline-flex" for="code"
                >Address: <a href={url}>Search</a>
            </label>
            <input
                type="text"
                bind:value={$test.address}
                class="rounded text-pink-500"
            />
        </div>
        <div class="mr-10">
            <label class="label mt-4 is-inline-flex" for="code">Phone: </label>
            <input
                type="text"
                bind:value={$test.phone}
                class="rounded text-pink-500"
            />
        </div>
        <div class="mr-10">
            <label class="label mt-4 is-inline-flex" for="code"
                >Country:
            </label>
            <select
                bind:value={$test.country}
                class="form-select rounded-md"
                name=""
                id=""
            >
                <option value="AU">AU</option>
                <option value="NZ">NZ</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
                <option value="EU">EU/ Other</option>
            </select>
        </div>
        <div class="mr-10">
            <label class="label mt-4 is-inline-flex" for="code">Type: </label>
            <input
                type="text"
                bind:value={$test.type}
                class="rounded text-pink-500"
            />
        </div>

        <div class="mr-10">
            <label class="label mt-4 is-inline-flex" for="code"
                >Financial Date:
            </label>
            <input
                type="date"
                bind:value={$test.fin_date}
                class="rounded text-pink-500"
            />
        </div>
        <div class="mr-10">
            <label class="label mt-4 is-inline-flex" for="code"
                >Training Hours:
            </label>
            <input
                type="text"
                bind:value={$test.training}
                class="rounded text-pink-500"
            />
        </div>
        <div class="mr-10">
            <label class="label mt-4 is-inline-flex" for="code"
                >Install date:
            </label>
            <input
                type="date"
                bind:value={$test.install_date}
                class="rounded text-pink-500"
            />
        </div>
        <div class="mr-10">
            <label class="label mt-4 is-inline-flex" for="code"
                >Training date:
            </label>
            <input
                type="date"
                bind:value={$test.training_date}
                class="rounded text-pink-500"
            />
        </div>

        <!-- content here -->

        <div class="mr-10">
            <label class="label mt-4 is-inline-flex" for="code"
                >Installer:
            </label>
            <select
                bind:value={$test.installer}
                class="form-select rounded-md"
                name=""
                id=""
            >
                <option value="Brett">Brett</option>
                <option value="Juan">Juan</option>
                <option value="Billy">Billy</option>
            </select>
        </div>
        <div class="mr-10">
            <label class="label mt-4 is-inline-flex" for="code"
                >Trainer:
            </label>
            <select
                bind:value={$test.trainer}
                class="form-select rounded-md"
                name=""
                id=""
            >
                <option value="Christine H">Christine H </option>
                <option value="Sarah">Sarah</option>
                <option value="Pamela">Pamela</option>
                <option value="Christine C">Christine C </option>
                <option value="Karen">Karen</option>
            </select>
        </div>

        <div class="mr-10">
            <label class="label mt-4 is-inline-flex" for="code">LMS: </label>
            <input
                type="text"
                bind:value={$test.lms}
                class="rounded text-pink-500"
            />
        </div>

        <div class="mr-10">
            <label class="label mt-4 is-inline-flex " for="code"
                >Borgit #:
            </label>
            <input
                type="text"
                bind:value={$test.borgit}
                class="rounded text-pink-500"
            />
        </div>
    </form>
</div>
<br />
<hr />
