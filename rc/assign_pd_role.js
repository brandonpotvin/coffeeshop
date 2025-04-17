// Enter My Username to add to role 
document.querySelector("#new_username_assign").value = "784850";

// Click Assign to Role
document.querySelector("#assignUserBtn").click();

// Uncheck Notify user via email? Try several times to make sure it is there
let attempts = 0;
const maxAttempts = 5;

function uncheckBox() {
  const checkbox = document.querySelector("#notify_email_role");
  if (checkbox) {
    checkbox.checked = false;
    checkbox.dispatchEvent(new Event('change', { bubbles: true }));
    console.log("Checkbox found and unchecked.");
  } else if (attempts < maxAttempts) {
    attempts++;
    console.log(`Checkbox not found. Retrying (${attempts}/${maxAttempts})...`);
    setTimeout(uncheckBox, 500); // wait 500ms before trying again
  } else {
    console.log("Checkbox not found after 5 attempts.");
  }
}

uncheckBox();

//Select Role
const dropdown = document.querySelector("#user_role");
const options = Array.from(dropdown.options);
const targetOption = options.find(opt => opt.text === "Project Development Team");

if (targetOption) {
  dropdown.value = targetOption.value;
  dropdown.dispatchEvent(new Event('change', { bubbles: true }));
  console.log('Selected "Project Development Team"');
} else {
  console.log('Option "Project Development Team" not found.');
}

//Click Assign
document.querySelector("#assignDagRoleBtn").click();
