<script>
    import { test } from "$lib/stores/localskeletonStore";
    let train = new Date($test.training_date).toDateString()
    let install = new Date($test.install_date).toDateString()
    

</script>
<div class="grid grid-cols-2 m-10 space-x-10">
    
    <div class="card card-body">
        <h4>Email to School</h4>
        <hr />
        <strong>Subject</strong>: {$test.name} Migration Update <br /> <br />
        Good Afternoon, <br /> <br />
        We’d like to let you know that your data has been processed by our Migrations
        team. Thank you for providing all the information required to complete this step.
        <br />
        Planned Dates: <br>
        Remote install: {install}. You will be working
        with our technician, {$test.installer}. He will assist with the Client
        Install and if you have used Circul8r, the import of that data. <br />
        Remote training: {train}. You have purchased {$test.training}h
        of remote training, your trainer is {$test.trainer}. <br />
        {#if $test.country == "AU"}
            Support can be reached at support@accessitlibrary.com or 1800 707 561. {$test.installer}
            can be reached at ext. 3, and {$test.trainer} can be reached at ext. 2.
            <br />
            Kind regards, <br />
            Flynn Whakaari <br />
        {:else if $test.country == "NZ"}
            <p>
                Support can be reached at support@accessitlibrary.com or 0800 542
                727. {$test.installer} can be reached at ext. 3, and {$test.trainer}
                can be reached at ext. 2. <br />
    
            </p>
        {/if}
        <br>
        Kind regards, <br />
        <button type="submit" class="float-right btn bg-warning-400 btn-base">
            Send Migration Update Email to School?
        </button><br />
        </div>
    
        <div class="card card-body">
   
        <h4>Email to SCIS</h4>
        <hr />
        <strong>Subject: </strong>{$test.name} -AccessIT + SCIS  <br><br>
        Good afternoon, <br>
    
        {$test.name} have purchased Accessit, due for install {train}. I would like to check if they have a SCIS subscription, if so could I please have the API credentials. <br>
       <br> {$test.name}<br>
        {$test.address} <br>
        {$test.phone}<br> <br>
    
        Please return the credentials to this email address if they have a SCIS subscription <br>
        Thank you, <br> <br>
        <br>
        <button type="submit" class=" float-right btn bg-warning-400 btn-base ">
            Send SCIS Email 3 Days Before Training? ({train})</button
        >
    </div>

</div>


