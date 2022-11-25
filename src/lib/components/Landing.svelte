<script>
	import DistrictModal from './DistrictModal.svelte';
	import EmptyModal from './EmptyModal.svelte';
	import SchoolModal from './SchoolModal.svelte';
</script>
<div class="flex flex-col">
    <div class="card card-body bg-pink-100">
        <h3 class="flex justify-center pt-5">Migrations:</h3>
        
        <div class="flex flex-row p-10 space-x-10 justify-center">
            <DistrictModal />
            <SchoolModal />
            <EmptyModal />
        </div>
    </div>

    <div class="card card-body bg-sky-100">
        <h3 class="flex justify-center pt-5">Utilities:</h3>
        
        <div class="flex flex-row p-10 space-x-10 justify-center">
        
            <form action="/utils/author">
                <button type="submit" class="btn btn-ghost-primary btn-lg  ">Author Parser</button>
            </form>
            <form action="https://accessitlibrary.atlassian.net/wiki/spaces/MIG/overview">
                <button type="submit" class="btn btn-ghost-primary btn-lg  ">F.A.Q.</button>
            </form>
            <!-- <form action="/utils/set-up">
                <button type="submit" class="btn btn-ghost-primary btn-lg  ">Set-Up</button>
            </form> -->
        
        </div>
    </div>
</div>
