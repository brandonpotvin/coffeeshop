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
} 

if(window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1) == "record_home.php"){
  var page = "record_home_page" 
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
  var email_address = document.querySelector("#user_info_1-tr > td > div > div > center > table > tbody > tr:nth-child(3) > td:nth-child(2) > p > b").textContent
  email_address = email_address.substring(email_address.indexOf('-') + 1).trim()
  localStorage.setItem("email_address", email_address);
  console.log("Email Address: ", email_address)

  // Get Name
  var fullName = document.querySelector("#user_info_1-tr > td > div > div > center > table > tbody > tr:nth-child(3) > td:nth-child(2) > p > b").textContent
  let [first_name, last_name] = fullName.split(" ");
  localStorage.setItem("first_name", first_name);
  localStorage.setItem("first_name", last_name);
  var first_name = localStorage.getItem("first_name");
  var last_name = localStorage.getItem("last_name");
  
  // Get RecordID
  //var environment = document.querySelector("#warning_rename_3-tr > td > div > div > table > tbody > tr > td > div > center > p > b > span.piping_receiver.piperec-4200-access_env-value").textContent
  var env = document.querySelector("#user_info_1-tr > td > div > div > center > table > tbody > tr:nth-child(7) > td:nth-child(2) > p > b > a").textContent

  if(env == 'https://rdcp.cdc.gov'){
    environment = 'SAMS'
    } else { 
    environment = 'Survey'
    }

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
    document.querySelector("#ui-id-7").click()
    document.querySelector("#new-record-name").value = sessionStorage.getItem("record_id")
   }
