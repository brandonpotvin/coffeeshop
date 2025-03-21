//Select Yes to AI Invitation
document.querySelector("#opt-ai_new_sams_1").click()

//Select Complete
let selectElement = document.querySelector("#sams_aa_complete-tr > td.data.col-5.greenhighlight > span > span > select");
selectElement.selectedIndex = 2;  // Indexes start at 0, so 1 selects the second option
selectElement.dispatchEvent(new Event("change"));  // Trigger change event
