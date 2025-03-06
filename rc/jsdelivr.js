//Convert JSDELIVR Link to Bookmarklet

function copyToClipboard(clip) {
  var copyText = clip;
  navigator.clipboard.writeText(copyText).then(() => {
      // Alert the user that the action took place.
      // Nobody likes hidden stuff being done under the hood!
      console.log("Copied " + clip + " to clipboard");
  });
}

//Get JSDELIVR path
if (typeof jsdelivr_path !== "undefined") {
    jsdelivr_path = undefined;
}

jsdelivr_path = document.querySelector("#page > div > div.content > div.container > div.box > div:nth-child(5) > input")?.value;
console.log(jsdelivr_path)

//Create Bookmarklet
let bookmarklet = "javascript:(function () {  var script = document.createElement('script');  script.src = '" + jsdelivr_path + "';  document.body.appendChild(script);}());";
console.log(bookmarklet);

copyToClipboard(bookmarklet)
