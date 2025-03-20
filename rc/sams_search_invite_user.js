// SAMS Helper Script
// This script checks if the current URL is a SAMS URL
// If it is, it reads from clipboard and fills the USER_ID field
// If not, it redirects to the SAMS URL

(function () {
    // Replace this with the actual SAMS URL you want to use
    const samsUrl = "https://im.cdc.gov/iam/im/SAMS3/ui/index.jsp?task.tag=SAMSInviteUser";

    // Check if the current URL matches the SAMS URL
    if (window.location.href.includes(samsUrl)) {
        // We're on the right page, now try to read from clipboard
        navigator.clipboard.readText()
            .then(text => {
                console.log("Clipboard content:", text);

                // Define a helper function to set field value
                const setFieldValue = (fieldId, value) => {
                    const field = document.getElementById(fieldId);
                    if (field) {
                        field.value = value;
                        console.log(`Clipboard content pasted into ${fieldId} field`);
                    } else {
                        console.warn(`Could not find the ${fieldId} field on this page`);
                    }
                };

                // Set clipboard text to both USER_ID and EMAIL fields
                setFieldValue("USER_ID", text);
                setFieldValue("EMAIL", text);
            })
            .catch(error => {
                console.error("Could not access clipboard:", error);
                alert("Could not access clipboard. Please check permissions.");
            });
    } else {
        // Not on the SAMS URL, redirect
        window.location.href = samsUrl;
    }
})();
