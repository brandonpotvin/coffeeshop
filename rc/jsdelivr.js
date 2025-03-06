//Convert JSDELIVR Link to Bookmarklet

function readFromClipboard(){
  navigator.clipboard
  .readText()
  .then((copiedText) => {
          alert(copiedText)
          document.querySelector("#new-record-name").value = copiedText //paste new record id

 });
}

  function copyToClipboard(clip) {
    var copyText = clip;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        console.log("Copied " + clip + " to clipboard");
    });
  }

//Get GitHub Path
git_path = readFromClipboard()

// Select the input field
var inputBox = document.querySelector("#page > div > div.content > div.container > div.box > div.input-wrapper.mb-48 > input");

// Check if the input field exists before modifying it
if (inputBox) {
    inputBox.value = git_path;  // Assign the git_path value
    inputBox.dispatchEvent(new Event("input", { bubbles: true }));  // Trigger input event
}

//Get JSDELIVR path
if (typeof jsdelivr_path !== "undefined") {
    jsdelivr_path = undefined;
}

jsdelivr_path = document.querySelector("#page > div > div.content > div.container > div.box > div:nth-child(5) > input")?.value;
console.log(jsdelivr_path); // Check the value in the console

//Create Bookmarklet
let bookmarklet = "javascript:(function () {  var script = document.createElement('script');  script.src = '" + jsdelivr_path + "';  document.body.appendChild(script);}());";
console.log(bookmarklet);

copyToClipboard(bookmarklet)
