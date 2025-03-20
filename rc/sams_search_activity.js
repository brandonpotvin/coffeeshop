// SAMS Helper Script
// This script checks if the current URL is a SAMS URL
// If it is, it reads from clipboard and fills the specified input field
// If not, it redirects to the SAMS URL

(function() {
    // Replace this with the actual SAMS URL you want to use
    const samsUrl = "https://im.cdc.gov/iam/im/SAMS3/ui/index.jsp?task.tag=AssignActivityAccess";
    
    // Check if the current URL matches the SAMS URL
    if (window.location.href.includes(samsUrl)) {
        //We're on the right page, 
        // Set Search Option to Email
        document.querySelector("#Filter\\.0\\.Field").selectedIndex = 4 
        // Try to read from clipboard
        navigator.clipboard.readText()
            .then(text => {
                // Set the value to the specified filter input field
                const inputField = document.querySelector("#Filter-queryFilter > tbody > tr > td:nth-child(4) > input[type=text]");
                if (inputField) {
                    inputField.value = text;
                    console.log("Clipboard content pasted into the filter field");
                    
                    // Optional: Trigger any necessary events
                    // This helps if the site uses event listeners to detect input changes
                    const inputEvent = new Event('input', { bubbles: true });
                    const changeEvent = new Event('change', { bubbles: true });
                    inputField.dispatchEvent(inputEvent);
                    inputField.dispatchEvent(changeEvent);
                } else {
                    alert("Could not find the filter input field on this page");
                }
            })
            .catch(error => {
                alert("Could not access clipboard. Error: " + error);
            });
    } else {
        // Not on the SAMS URL, redirect
        window.location.href = samsUrl;
    }
})();
