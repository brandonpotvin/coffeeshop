// Open Page Invite User
let sams_url = "https://im.cdc.gov/iam/im/SAMS3/ui/index.jsp?task.tag=SAMSInviteUser";

/**
 * Reads content from the clipboard and assigns it to email_address variable
 * @returns {Promise<string>} The clipboard content
 */
async function readClipboardToEmailAddress() {
  try {
    // Request clipboard read permission and content
    const clipboardContent = await navigator.clipboard.readText();
    
    // Assign clipboard content to email_address variable
    const email_address = clipboardContent;
    console.log("Email address from clipboard:", email_address);
    
    return email_address;
  } catch (error) {
    console.error("Failed to read clipboard contents:", error);
    alert("Unable to access clipboard. Ensure permissions are allowed and try again.");
    return null;
  }
}

// Check if the current URL matches sams_url
if (window.location.href === sams_url) {
  console.log("Current URL matches:", sams_url);

  // Ensure the input element exists
  let userInput = document.getElementById("USER_ID");
  if (!userInput) {
    console.error("Element with ID 'USER_ID' not found.");
  }

  // Add event listener for button click
  document.getElementById("readClipboardButton")?.addEventListener("click", async () => {
    const email = await readClipboardToEmailAddress();
    if (email && userInput) {
      userInput.value = email; // Assign clipboard content to the input field
      console.log("Email pasted successfully.");
    }
  });
}
