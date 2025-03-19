// SAMS Helper Script
// This script checks if the current URL is a SAMS URL
// If it is, it reads from clipboard and fills the USER_ID field
// If not, it redirects to the SAMS URL

(function() {
    // Replace this with the actual SAMS URL you want to use
    const samsUrl = "https://im.cdc.gov/iam/im/SAMS3/ui/index.jsp?task.tag=SAMSInviteUser";
    
    // Check if the current URL matches the SAMS URL
    if (window.location.href.includes(samsUrl)) {
        // We're on the right page, now try to read from clipboard
        navigator.clipboard.readText()
            .then(text => {
                // Set the value to the USER_ID field
                const userIdField = document.getElementById("USER_ID");
                if (userIdField) {
                    userIdField.value = text;
                    console.log("Clipboard content pasted into USER_ID field");
                } else {
                    alert("Could not find the USER_ID field on this page");
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
