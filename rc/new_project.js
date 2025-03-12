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
  project_name = project_name.trim(); 
  console.log("Project Name: ", project_name)
 // Store in localStorage
 localStorage.setItem("project_name", project_name);

 var project_type = document.querySelector("#summary_request-tr > td > div > div > center > table > tbody > tr:nth-child(5) > td:nth-child(2) > p > b > span").textContent;
 project_type = project_type.trim(); 
  // Store in localStorage
 localStorage.setItem("project_type", project_type);

  var project_type = document.querySelector("#summary_request-tr > td > div > div > center > table > tbody > tr:nth-child(5) > td:nth-child(2) > p > b > span").textContent
  console.log("Project Type: ", project_type)
  
  // Copy Project Name to the Clipboard
  copyToClipboard(project_name)

  // Open New Project
  window.open("https://rdcp.cdc.gov/index.php?action=create", "_blank");
}



if(page == "new_proj"){

    var project_type = localStorage.getItem("project_type");
    console.log("Retrieved Project Type:", project_type);
    
    var project_name = localStorage.getItem("project_name");
    console.log("Retrieved Project Name:", project_name);  

    //Populate Project Name
    if (project_name) {
        document.querySelector("#app_title").value = project_name;
    }

    // Select Project Type from Drop Down
    if (project_type === "Administrative") {
      document.querySelector("#purpose").value = 4;
    } else if (project_type === "Monitoring and Evaluation") {
        document.querySelector("#purpose").value = 3;
    } else if (project_type === "Practice/Training/Test") {
        document.querySelector("#purpose").value = 0;
    } else if (project_type === "Research/Special Study") {
        document.querySelector("#purpose").value = 2;
        document.querySelector("#purpose_other\\[5\\]").click()
    } else if (project_type === "Surveillance") {
        document.querySelector("#purpose").value = 2;
        document.querySelector("#purpose_other\\[5\\]").click()
    }

    //Select Research Type Conditionall

    //Set Project Creation Option to Use a Template
    document.querySelector("#pagecontent > div > form > table > tbody > tr:nth-child(9) > td:nth-child(2) > div:nth-child(3) > label").click()

    //Select New Project Template
    document.querySelector("#table-template_projects_list > tbody > tr:nth-child(9) > td:nth-child(1) > div > input[type=radio]").click()

  
}
