function copyToClipboard(clip) {
  var copyText = clip;
  navigator.clipboard.writeText(copyText).then(() => {
      // Alert the user that the action took place.
      // Nobody likes hidden stuff being done under the hood!
      console.log("Copied " + clip + " to clipboard");
  });
}


// Determine Page
var currentUrlSearch = window.location.search
console.log(currentUrlSearch)

if(currentUrlSearch.includes("admin_form")){
  var page = "pd_admin"
} 

if(currentUrlSearch.includes("action=create")){
  var page = "new_proj"
} 
console.log(page)

if(page == "pd_admin"){
  // Get Project Name
  var project_name = document.querySelector("#summary_request-tr > td > div > div > center > table > tbody > tr:nth-child(6) > td:nth-child(2) > p > b > span").textContent
  console.log("Project Name: ", project_name)
  
  var project_type = document.querySelector("#summary_request-tr > td > div > div > center > table > tbody > tr:nth-child(5) > td:nth-child(2) > p > b > span").textContent
  console.log("Project Type: ", project_type)
  
  // Copy Project Name to the Clipboard
  copyToClipboard(project_name)

  // Open New Project
  window.open("https://rdcp.cdc.gov/index.php?action=create", "_blank");
}

if(page == "new_proj"){
    if (project_type === "Administrative") {
      document.querySelector("#purpose").value = 4;
  } else if (project_type === "Monitoring and Evaluation") {
      document.querySelector("#purpose").value = 3;
  } else if (project_type === "Practice/Training/Test") {
      document.querySelector("#purpose").value = 0;
  } else if (project_type === "Research/Special Study") {
      document.querySelector("#purpose").value = 2;
  } else if (project_type === "Surveillance") {
      document.querySelector("#purpose").value = 2;
  }
