import { writable } from 'svelte-local-storage-store'
import { get } from 'svelte/store'
export var key = writable('key', 'init')



// First param `preferences` is the local storage key.
// Second param is the initial value.
export let test = writable(get(key), {
    id: (''),
    name: (''),
    districtName: "",
    address: (''),
    notes: (''),
    training: (''),
    country: (''),
    phone: (''),
    code: (''),
    type: (''),
    lms: (''),
    fin_date: (''),
    patrons: (''),
    patron_bc: (''),
    resources: (''),
    copy_bc: (''),
    copies: (''),
    on_loan: (''),
    borgit: (''),
    tidy: (''),

    dup_pat: (''),
    dup_copy: (''),
    no_copy: (''),
    license: (''),
    match: (''),
    license_num: (''),
    copyT: (''),
    resourceT: (''),
    lost: (''),
    patronT: (''),
    date: (''),
    delete: ('-'),
    training_date: ('-'),
    install_date: ('-'),
    // dupCopy=(''),
    // withoutCopy = '',
    pat_all: (''),
    pat_set: (''),
    copy_all: (''),
    copy_set: (''),

    //uk purchaise teirs
    hop: false,
    skip: false,
    jump: false,


    //licensing
    lic1: false,
    lic2: false,
    lic3: false,
    lic4: false,


    //prep checklist
    prep1: false,
    prep2: false,
    prep3: false,
    prep4: false,



    //tidy
    tidy1: false,
    tidy2: false,
    tidy3: false,
    tidy4: false,
    tidy5: false,
    tidy6: false,
    tidy7: false,
    tidy8: false,
    tidy9: false,
    tidy10: false,
    tidy11: false,
    tidy12: false,

    //delivery checkloist 
    deliver1:false,
    deliver2:false,
    deliver3:false,
    deliver4:false,
    deliver5:false,
    deliver6:false,
    deliver7:false,
    deliver8:false,


    //Patron Barcodes
    pb1: false,
    pb2: false,
    pb3: false,
    pb4: false,
    //copy Barcodes
    cb1: false,
    cb2: false,
    cb3: false,
    cb4: false,
    cb5: false,
    cb6: false,
    cb7: false,
    cb8: false,
    cb9: false,
    cb10: false,

    cb11: false,

    cb12: false,




    //borgit checklist
    borg1: false,
    borg2: false,
    borg3: false,
    borg4: false,
    borg5: false,
    borg6: false,
    borg7: false,
    borg: false,


    // permissions
    sip2: false,
    sms: false,
    ldap: false,
    sso: false,
    brwsync: false,
    biometrics: false,
    ar: false,
    fingerprint: false,
    autocomplete_lite: false,
    autocomplete_full: false,
    anonbrwHistory: false,
    kiosk: false,
    unioncatalogue: false,
    phone_app: false,



})

