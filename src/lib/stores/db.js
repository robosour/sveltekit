import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(3).stores({
  friends: '&code, name,  districtName, url, status, address, notes, training, country, phone, contact, email, installer, trainer, type, lms, fin_date, patrons, patron_bc, resources, copy_bc, copies, on_loan, borgit, tidy, dup_pat, dup_copy, no_copy, license, match, license_num, copyT, resourceT, lost, patronT, date, delete, training_date, install_date, pat_all, pat_set, copy_all, copy_set, hop, skip, jump, lic1, lic2, lic3, lic4, prep1, prep2, prep3, prep4, tidy1, tidy2, tidy3, tidy4, tidy5, tidy6, tidy7, tidy8, tidy9, tidy10, tidy11, tidy12, deliver1, deliver2, deliver3, deliver4, deliver5, deliver6, deliver7, deliver8, deliver9, pb1, pb2, pb3, pb4, cb1, cb2, cb3, cb4, cb5, cb6, cb7, cb8, cb9, cb10, cb11, cb12, borg1, borg2, borg3, borg4, borg5, borg6, borg7, borg, sip2, sms, ldap, sso, brwsync, biometrics, ar, fingerprint, autocomplete_lite, autocomplete_full, anonbrwHistory, kiosk, unioncatalogue, phone_app',
});
