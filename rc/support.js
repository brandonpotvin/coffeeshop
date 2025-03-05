// Determine Page
var currentUrlSearch = window.location.search
console.log(currentUrlSearch)

if(currentUrlSearch.includes("admin_form")){
  var page = "admin_form"
} 
console.log(page)

// Click Technical Support Needed
document.querySelector("#id-__chk__add_support_RC_1")?.click();

//Select Complete
let selectElement = document.querySelector("#sams_aa_complete-tr > td.data.col-5 > span > span > select");
selectElement.selectedIndex = 2;  // Indexes start at 0, so 1 selects the second option
selectElement.dispatchEvent(new Event("change"));  // Trigger change event
