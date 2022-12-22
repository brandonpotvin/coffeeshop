// Perform varoius tasks related to user managemenet portal

// Copies the user email to user for SAMS search
// If form is complete copies new record ID and closes form
// If on the Record Home Page, renames record

function readFromClipboard(){
  navigator.clipboard
  .readText()
  .then((copiedText) => {
          alert(copiedText)
          document.querySelector("#new-record-name").value = copiedText //paste new record id

 });
}

// Determine Page
var currentUrlSearch = window.location.search
console.log(currentUrlSearch)

if(currentUrlSearch.includes("sams_aa")){
  var page = "sams_aa"
} else if 
  (currentUrlSearch == "?pid=1500&id=1&arm=1"){                     
  var page = "record_home_page" 
} else if 
  (currentUrlSearch == "?pid=1500&id=1&msg=edit"){
  var page = "record_home_page" 
} else {
  var page = "Other"
}

console.log(page)

if(page == "sams_aa"){
  // Get form status, if complete copy record_id otherwise copy email
  var formStatus = document.querySelector("#sams_aa_complete-tr > td.data.col-5 > span > span > select").value

  console.log("Form Status: ", formStatus)

  function copyToClipboard(clip) {
    var copyText = clip;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        console.log("Copied " + clip + " to clipboard");
    });
  }

  // Get Email
  var email_address = document.querySelector("#user_info_1-tr > td > div > div > center > table > tbody > tr:nth-child(3) > td:nth-child(2) > p > b > span.piping_receiver.piperec-4200-user_email").textContent
  console.log("Email Address: ", email_address)

  // Get RecordID
  var environment = document.querySelector("#warning_rename_3-tr > td > div > div > table > tbody > tr > td > div > center > p > b > span.piping_receiver.piperec-4200-access_env-value").textContent
  var recordId = email_address + "_" + environment
  console.log("Record ID: ", recordId)
  sessionStorage.setItem("record_id", recordId)

  if(formStatus == 2){
    copyToClipboard(recordId)
    //Click Save and Exit
    document.querySelector("#submit-btn-saverecord > span").click()
    } else {
      copyToClipboard(email_address)
    }
  }

  // Change record id (does not do final click)
  if(page == "record_home_page"){
    document.querySelector("#recordActionDropdownTrigger > span:nth-child(2) > span").click()
    document.querySelector("#ui-id-6").click()
    document.querySelector("#new-record-name").value = sessionStorage.getItem("record_id")
   }