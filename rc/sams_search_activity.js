let sams_url = "https://im.cdc.gov/iam/im/SAMS3/ui/index.jsp?task.tag=AssignActivityAccess";

function readFromClipboard(){
    navigator.clipboard
    .readText()
    .then((copiedText) => {
            // alert(copiedText)
            document.querySelector("#Filter-queryFilter > tbody > tr > td:nth-child(4) > input[type=text]").value = copiedText //paste email

   });
}

// Check if the current URL matches sams_url
if (window.location.href === sams_url) {
  console.log(sams_url)
    //Select option to serach by email, paste email from clipboard and start search
    document.querySelector("#Filter\\.0\\.Field").selectedIndex = 4 //set search option to email
    readFromClipboard()
    document.querySelector("#imh_1").click(); //click search button
} else {
  window.location.href = sams_url; // Redirect to sams_url
}


// //Select option to serach by email, paste email from clipboard and start search
// document.querySelector("#Filter\\.0\\.Field").selectedIndex = 4 //set search option to email
// readFromClipboard()
// document.querySelector("#imh_1").click(); //click search button
