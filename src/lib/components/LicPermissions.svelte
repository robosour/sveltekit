<script>
    import { test } from "$lib/stores/localskeletonStore";
    let list = [
        $test.sip2,
        $test.sms,
        $test.sso,
        $test.ldap,
        $test.brwsync,
        $test.biometrics,
        $test.ar,
        $test.fingerprint,
        $test.autocomplete_full,
        $test.autocomplete_lite,
        $test.anonbrwHistory,
        $test.phone_app,
        $test.kiosk,
        $test.unioncatalogue,
    ];
</script>

<div class="flex flex-col card card-body  mr-10 ">
    <h3 class="flex justify-center ">Permissions</h3>
    <hr />
    {#if $test.hop}
        <div
            class="card card-body bg-warning-200 dark:bg-warning-200 dark:text-black"
        >
            Hop
        </div>
   {/if}
    {#if $test.skip}
        <div
            class="card card-body bg-warning-200 dark:bg-warning-200 dark:text-black"
        >
            Skip
        </div>
        <!-- content here -->
      {/if}
    {#if $test.jump}
        <div
            class="card card-body bg-warning-200 dark:bg-warning-200 dark:text-black"
        >
            Jump
        </div>
        <!-- content here -->
     {/if}
    <hr />

    {#if $test.sip2}
        <br>+ SIP2
        <!-- content here -->
        <br />{/if}

    {#if $test.sms}
        <br>+ SMS
        <!-- content here -->
        <br />{/if}

    {#if $test.ldap}
        <br>+ AD/LDAP
        <!-- content here -->
        <br />{/if}

    {#if $test.sso}
        <br>+ SSO
        <!-- content here -->
        <br />{/if}

    {#if $test.brwsync}
        <br>+ Borrower Sync
        <!-- content here -->
        <br />{/if}

    {#if $test.biometrics}
        <br>+ Biometrics
        <!-- content here -->
        <br />{/if}

    {#if $test.ar}
        <br>+ Accelerated Reader
        <!-- content here -->
        <br />{/if}

    {#if $test.fingerprint}
        <br>+ Fingerprint Support
        <!-- content here -->
        <br />{/if}

    {#if $test.autocomplete_lite}
        <br>+ Auto-Complete Lite
        <!-- content here -->
        <br />{/if}

    {#if $test.autocomplete_full}
        <br>+ Auto-Complete Full
        <!-- content here -->
        <br />{/if}

    {#if $test.anonbrwHistory}
        <br>+ Anonymise Borrower History
        <!-- content here -->
        <br />{/if}

    {#if $test.phone_app}
        <br>+ Phone App
        <!-- content here -->
        <br />{/if}

    {#if $test.kiosk}
        <br>+ Kiosk App
        <!-- content here -->
        <br />{/if}

    {#if $test.unioncatalogue}
        <br>+ Union Catalogue
        <!-- content here -->
        <br />{/if}
    {#if $test.brwsync}
        <div
            class="card card-body bg-primary-200 dark:bg-primary-200 dark:text-black"
        >
            Remember to check 'Has Paid'
        </div>
        <!-- content here -->
    {/if}
</div>
