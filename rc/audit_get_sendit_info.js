//Create variables and write to console for Project Audit Send it


// Get Recipients
const element = document.querySelector("#label-pr_sendit > table > tbody > tr > td:nth-child(1) > div > div:nth-child(1) > span > ol > li:nth-child(1) > span");
if (element) {
  localStorage.setItem('recipients', element.textContent.trim());
  console.log('recipients set to:', localStorage.getItem('recipients'));
} else {
  console.log('Element not found.');
}

const recipients = localStorage.getItem('recipients');
console.log(recipients);

function copyToClipboard(clip) {
    var copyText = clip;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        console.log("Copied " + clip + " to clipboard");
    });
  }

copyToClipboard(recipients)


//Get Subject
const element = document.querySelector("#label-pr_sendit > table > tbody > tr > td:nth-child(1) > div > div:nth-child(1) > span > ol > li:nth-child(2) > span");
if (element) {
  localStorage.setItem('subject', element.textContent.trim());
  console.log('subject set to:', localStorage.getItem('subject'));
} else {
  console.log('Element not found.');
}

const recipients = localStorage.getItem('subject');
console.log(subject);


