// In UMP Check Users is in SAMS and an Inviation for LEVEL 2 users has been seng

  // Is User in SAMS = Yes
  document.querySelector("#opt-sams_1").click()

  // Have you initiated a SAMS invitation for Level II
  document.querySelector("#opt-sams_level_ii_1")

  //Select Complete
  let selectElement = document.querySelector("#sams_aa_complete-tr > td.data.col-5 > span > span > select");
  selectElement.selectedIndex = 2;  // Indexes start at 0, so 1 selects the second option
  selectElement.dispatchEvent(new Event("change"));  // Trigger change event
