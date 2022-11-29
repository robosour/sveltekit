<script>
	import { page } from '$app/stores';
import { db } from "$lib/stores/db";
import { test } from "$lib/stores/localskeletonStore";



  $test.url = $page.url +""


  async function addFriend() {

    try {

      // Add the new friend!
      const code = await db.friends.put({
    name: $test.name,
    districtName: $test.districtName,
    address: $test.address,
    notes: $test.notes,
    url: $test.url,
    status: $test.status,
    training: $test.training,
    country: $test.country,
    phone: $test.phone,
    code: $test.code,
    contact: $test.contact,
    email: $test.email,
    installer: $test.installer,
    trainer: $test.trainer,
    type: $test.type,
    lms: $test.lms,
    fin_date: $test.fin_date,
    patrons: $test.patrons,
    patron_bc: $test.patron_bc,
    resources: $test.resources,
    copy_bc: $test.copy_bc,
    copies: $test.copies,
    on_loan: $test.on_loan,
    borgit: $test.borgit,
    tidy: $test.tidy,
    dup_pat: $test.dup_pat,
    dup_copy: $test.dup_copy,
    no_copy: $test.no_copy,
    license: $test.license,
    match: $test.match,
    license_num: $test.license_num,
    copyT: $test.copyT,
    resourceT: $test.resourceT,
    lost: $test.lost,
    patronT: $test.patronT,
    date: $test.date,
    delete: $test.delete,
    training_date: $test.training_date,
    install_date: $test.install_date ,
    // dupCopy=$test.xxx,
    // withoutCopy = '',
    pat_all: $test.pat_all,
    pat_set: $test.pat_set,
    copy_all: $test.copy_all,
    copy_set: $test.copy_set,
    //uk purchaise teirs
    hop: $test.hop,
    skip: $test.skip,
    jump: $test.jump,

    //licensing
    lic1: $test.lic1,
    lic2: $test.lic2,
    lic3: $test.lic3,
    lic4: $test.lic4,

    //prep checklist
    prep1: $test.prep1,
    prep2: $test.prep2,
    prep3: $test.prep3,
    prep4: $test.prep4,

    //tidy
    tidy1: $test.tidy1,
    tidy2: $test.tidy2,
    tidy3: $test.tidy3,
    tidy4: $test.tidy4,
    tidy5: $test.tidy5,
    tidy6: $test.tidy6,
    tidy7: $test.tidy7,
    tidy8: $test.tidy8,
    tidy9: $test.tidy9,
    tidy10: $test.tidy10,
    tidy11: $test.tidy11,
    tidy12: $test.tidy12,
    //delivery checkloist 
    deliver1: $test.deliver1,
    deliver2: $test.deliver2,
    deliver3: $test.deliver3,
    deliver4: $test.deliver4,
    deliver5: $test.deliver5,
    deliver6: $test.deliver6,
    deliver7: $test.deliver7,
    deliver8: $test.deliver8,
    deliver9: $test.deliver9,

    //Patron Barcodes
    pb1: $test.pb1,
    pb2: $test.pb2,
    pb3: $test.pb3,
    pb4: $test.pb4,
    //copy Barcodes
    cb1: $test.cb1,
    cb2: $test.cb2,
    cb3: $test.cb3,
    cb4: $test.cb4,
    cb5: $test.cb5,
    cb6: $test.cb6,
    cb7: $test.cb7,
    cb8: $test.cb8,
    cb9: $test.cb9,
    cb10: $test.cb10,
    cb11: $test.cb11,
    cb12: $test.cb12,


    //borgit checklist
    borg1: $test.borg1,
    borg2: $test.borg2,
    borg3: $test.borg3,
    borg4: $test.borg4,
    borg5: $test.borg5,
    borg6: $test.borg6,
    borg7: $test.borg7,
    borg: $test.borg,

    // permissions
    sip2: $test.sip2,
    sms: $test.sms,
    ldap: $test.ldap,
    sso: $test.sso,
    brwsync: $test.brwsync,
    biometrics: $test.biometrics,
    ar: $test.ar,
    fingerprint: $test.fingerprint,
    autocomplete_lite: $test.autocomplete_lite,
    autocomplete_full: $test.autocomplete_full,
    anonbrwHistory: $test.anonbrwHistory,
    kiosk: $test.kiosk,
    unioncatalogue: $test.unioncatalogue,
    phone_app: $test.phone_app,

      });

      status = `School ${$test.name} successfully added. Got id ${code}`;
      
      // Reset form:

    } catch (error) {
      status = `Failed to add ${$test.name}: ${error}`;
    }
  }
</script>
<div>

    <button class="btn btn-ghost-tertiary" on:click={addFriend}>Save School</button>

</div>
