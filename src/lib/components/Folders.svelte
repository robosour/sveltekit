<script>
	import Checklist from "./Checklist.svelte";

    let d = [
"Pre-Migration form checked",
"Working folder contains:",
"Migration notes odt ",
"Brooklyn folder in code with bi_brooklyn folder etc.",
"Final folder in school has:",
"Collection Usage Report",
"Location Usage Report",
"School Migration Notes (as PDF)",
"Brooklyn folder with Brooklyn.mdf & Brooklyn_Log.ldf",
"Clients folder contains Zip",
    ];
    let e = [
"(UK/US) Sharepoint: Upload the 3 report files ",
"delete zipped folder from schools ",
"Move school folder code to z done after putting z in front ",
"Migrations Schedule : Cut row and move to bottom ",
"Post in teams - relevant country",
"Onboarding Portal - Update Job",
"Send email (AU/NZ, myself; UK/US, automatic on OB)",
    ];
</script>

<div class="grid grid-cols-2">
<div>
    <div>
        <div class="col-span-3 card card-body w-full p-10">
            <article
                class="prose dark:prose-invert prose-sm prose-white w-full"
            >
              Email Script, Teams script, scis, 
              have folder checklist be folder icons with routing
            </article>
        </div>
    </div>
</div>

    <div>
        <ol class="list">
            <li>
                <span>&#128193;</span>
                <span class="flex-auto">Working</span>
                
            </li>
            <!-- ... -->
        </ol>
        <!-- <Checklist checks={d} title="Folder Checklist"></Checklist> -->
        <!-- <Checklist checks={e} title="Delivery Checklist"></Checklist> -->
    </div>
</div>
