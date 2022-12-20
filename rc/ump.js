// Get form status, if complete copy record_id otherwise copy email
var formStatus = document.querySelector("#sams_aa_complete-tr > td.data.col-5 > span > span > select").value


console.log("Form Status: ", formStatus)

function copyToClipboard(clip) {
  var copyText = clip;
  navigator.clipboard.writeText(copyText).then(() => {
      // Alert the user that the action took place.
      // Nobody likes hidden stuff being done under the hood!
      alert("Copied " + clip + " to clipboard");
  });
}

// Get Email
var email_address = document.querySelector("#user_info_1-tr > td > div > div > center > table > tbody > tr:nth-child(3) > td:nth-child(2) > p > b > span.piping_receiver.piperec-4200-user_email").textContent
console.log("Email Address: ", email_address)

// Get RecordID
var environment = document.querySelector("#warning_rename_3-tr > td > div > div > table > tbody > tr > td > div > center > p > b > span.piping_receiver.piperec-4200-access_env-value").textContent
var recordId = email_address + "_" + environment
console.log("Record ID: ", recordId)

if(formStatus == 2){
  copyToClipboard(recordId)
  //Click Save and Exit
  document.querySelector("#submit-btn-saverecord > span").click()
  } else {
    copyToClipboard(email_address)
  }
